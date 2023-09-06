<?php
// Template Name:Stripe Charge Page
// Wp Estate Pack


$endpoint_secret    =   esc_html ( wprentals_get_option('wp_estate_stripe_webhook','') );
$payload            =   file_get_contents('php://input');
$sig_header         =   esc_html($_SERVER['HTTP_STRIPE_SIGNATURE']);
$event = null;


 

//if($sig_header=='')return;

try {
    $event = \Stripe\Webhook::constructEvent(
        $payload, $sig_header, $endpoint_secret
    );
} catch(\UnexpectedValueException $e) {
    // Invalid payload
    http_response_code(400); // PHP 5.4 or greater
    exit('');
} catch(\Stripe\Error\SignatureVerification $e) {
    // Invalid signature
    http_response_code(400); // PHP 5.4 or greater
    exit();
}



error_log($event);

if ($event->type == "payment_intent.succeeded") {
        $intent = $event->data->object;

        if(isset ($event->data->object->charges->data[0]->metadata->pay_type) ){
            $pay_type       =   intval($event->data->object->charges->data[0]->metadata->pay_type);
            $userId         =   intval($event->data->object->charges->data[0]->metadata->user_id);
        }
        if(isset ($event->data->object->metadata->pay_type) ){
            $pay_type       =   intval($event->data->object->metadata->pay_type);
            $userId         =   intval($event->data->object->metadata->user_id);
        }
      

        $depozit        =   intval($intent->amount);
        $user_data      =   get_userdata($userId);
 
     
        if($pay_type==1){
            $user_email     =   $user_data->user_email;

            if( isset($event->data->object->charges->data[0]->metadata->invoice_id) ){
                $invoice_id     =   intval($event->data->object->charges->data[0]->metadata->invoice_id);
                $booking_id     =   intval($event->data->object->charges->data[0]->metadata->booking_id );
            }
            if( isset($event->data->object->metadata->invoice_id) ) {
                $invoice_id     =   intval($event->data->object->metadata->invoice_id);
                $booking_id     =   intval($event->data->object->metadata->booking_id);
            }
      
            error_log('****4444444444****** '.$invoice_id.'/'.$booking_id) ;



            $is_stripe=1;
            wpestate_booking_mark_confirmed($booking_id,$invoice_id,$userId,$depozit,$user_email,$is_stripe);
            $redirect=wpestate_get_template_link('user_dashboard_my_reservations.php');
            http_response_code(200);
            //wp_redirect($redirect);
            exit();


        }else if($pay_type==2){

            $listing_id     =   intval($event->data->object->charges->data[0]->metadata->listing_id);
            $is_featured    =   intval($event->data->object->charges->data[0]->metadata->featured_pay);
            $is_upgrade     =   intval($event->data->object->charges->data[0]->metadata->is_upgrade);

            $time = time();
            $date = date('Y-m-d H:i:s',$time);

            if($is_upgrade==1){
                update_post_meta($listing_id, 'prop_featured', 1);
                $invoice_id = wpestate_insert_invoice('Upgrade to Featured','One Time',$listing_id,$date,$current_user->ID,0,1,'' );
                update_post_meta($invoice_id, 'invoice_status', 'confirmed');
                wpestate_email_to_admin(1);
            }else{
                update_post_meta($listing_id, 'pay_status', 'paid');
                $admin_submission_status = esc_html ( wprentals_get_option('wp_estate_admin_submission','') );
                $paid_submission_status  = esc_html ( wprentals_get_option('wp_estate_paid_submission','') );

                if($admin_submission_status=='no'  && $paid_submission_status=='per listing' ){
                    $post = array(
                        'ID'            => $listing_id,
                        'post_status'   => 'publish'
                        );
                    $post_id =  wp_update_post($post );
                }
                // end make post publish

                if($is_featured==1){
                    update_post_meta($listing_id, 'prop_featured', 1);
                    $invoice_id = wpestate_insert_invoice('Publish Listing with Featured','One Time',$listing_id,$date,$current_user->ID,1,0,'' );
                    update_post_meta($invoice_id, 'invoice_status', 'confirmed');
                }else{
                    $invoice_id = wpestate_insert_invoice('Listing','One Time',$listing_id,$date,$current_user->ID,0,0,'' );
                    update_post_meta($invoice_id, 'invoice_status', 'confirmed');
                }
                wpestate_email_to_admin(0);
            }

            $redirect = wpestate_get_template_link('user_dashboard.php');
            http_response_code(200);
            //wp_redirect($redirect);
            exit();
        }








}elseif ($event->type == "invoice.payment_succeeded") {
            $customer_stripe_id =$event->data->object->customer;

            $args=array('meta_key'      => 'stripe',
                        'meta_value'    => $customer_stripe_id
            );

            $update_user_id =   0;
            $customers=get_users( $args );
            foreach ( $customers as $user ) {
                $update_user_id = $user->ID;
            }
            $pack_id = intval (get_user_meta($update_user_id, 'package_id',true));

            if($update_user_id!=0 && $pack_id!=0){
                if( wpestate_check_downgrade_situation($update_user_id,$pack_id) ){
                    wpestate_downgrade_to_pack( $update_user_id, $pack_id );
                    wpestate_upgrade_user_membership($update_user_id,$pack_id,2,'');
                }else{
                    wpestate_upgrade_user_membership($update_user_id,$pack_id,2,'');
                }
            }


            http_response_code(200);
            exit();



}elseif ($event->type == "invoice.payment_failed" || $event->type=="customer.subscription.deleted") {

        $customer_stripe_id =$event->data->object->customer;
        $args   =   array(  'meta_key'      => 'stripe',
                            'meta_value'    => $customer_stripe_id
                            );

        $customers  =   get_users( $args );
        foreach ( $customers as $user ) {
            update_user_meta( $user->ID, 'stripe', '' );
            wpestate_downgrade_to_free($user->ID);
        }
        http_response_code(200);
        exit();


}elseif ($event->type == "payment_intent.payment_failed") {
        $intent = $event->data->object;
        $error_message = $intent->last_payment_error ? $intent->last_payment_error->message : "";
        printf("Failed: %s, %s", $intent->id, $error_message);
        http_response_code(200);
        exit();
}elseif($event->type=="invoice.payment_action_required"){
    error_log('****payment_action_required****** '.json_encode($event) );
    if(isset ($event->data->object->charges->data[0]->metadata->pay_type) ){
        $pay_type       =   intval($event->data->object->charges->data[0]->metadata->pay_type);
        $userId         =   intval($event->data->object->charges->data[0]->metadata->user_id);
    }
    if(isset ($event->data->object->metadata->pay_type) ){
        $pay_type       =   intval($event->data->object->metadata->pay_type);
        $userId         =   intval($event->data->object->metadata->user_id);
    }
  

   
    if(isset ( $event->data->object->customer_email ) ){
        $user_email     =   $event->data->object->customer_email;
    }
    $payment_intent='';
    if(isset($event->data->object->payment_intent)){
        $payment_intent = $event->data->object->payment_intent;
    }



    error_log('****user_email****** '.($user_email) );
    error_log('****payment_intent****** '.($payment_intent) );
    
    if($user_email!=''):
        $user           = get_user_by( 'email', $user_email );
        $userId         = $user->ID;
        update_user_meta($userId,'wpestate_payment_intent_recurring',$payment_intent);
        $arguments      = array('payment_intent'=>$payment_intent);
        wpestate_select_email_type($user_email, 'payment_action_required', $arguments);
    endif;
     
}else{
    http_response_code(400);
    exit();
}
