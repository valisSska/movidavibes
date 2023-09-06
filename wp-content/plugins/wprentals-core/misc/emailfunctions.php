<?php

if (!function_exists('wpestate_select_email_type')):
    function wpestate_select_email_type($user_email,$type,$arguments){
    
        if(class_exists('WpestateEmail')){
            $WpestateEmail = WpestateEmail::get_instance();
            $sending_Email = $WpestateEmail->wpestate_send_email($user_email,$type,$arguments);

        }
        return;
        
        

    }
endif;










if( !function_exists('wpestate_email_management') ):
    function wpestate_email_management(){



        $emails=array(
            'new_user'                  =>  __('New user  notification','wprentals-core'),
            'admin_new_user'            =>  __('New user admin notification','wprentals-core'),
            'purchase_activated'        =>  __('Purchase Activated','wprentals-core'),
            'password_reset_request'    =>  __('Password Reset Request','wprentals-core'),
            'password_reseted'          =>  __('Password Reseted','wprentals-core'),
           // 'purchase_activated'        =>  __('Purchase Activated','wprentals-core'),
            'approved_listing'          =>  __('Approved Listings','wprentals-core'),
            'admin_expired_listing'     =>  __('Admin - Expired Listing','wprentals-core'),
            'paid_submissions'          =>  __('Paid Submission','wprentals-core'),
            'featured_submission'       =>  __('Featured Submission','wprentals-core'),
            'account_downgraded'        =>  __('Account Downgraded','wprentals-core'),
            'membership_cancelled'      =>  __('Membership Cancelled','wprentals-core'),
            'free_listing_expired'      =>  __('Free Listing Expired','wprentals-core'),
            'new_listing_submission'    =>  __('New Listing Submission','wprentals-core'),
           // 'listing_edit'              =>  __('Listing Edit','wprentals-core'),
            'recurring_payment'         =>  __('Recurring Payment','wprentals-core'),
            'membership_activated'      =>  __('Membership Activated','wprentals-core'),
            'agent_update_profile'      =>  __('Update Profile','wprentals-core'),
            'bookingconfirmeduser'      =>  __('Booking Confirmed - User','wprentals-core'),
            'bookingconfirmed'          =>  __('Booking Confirmed','wprentals-core'),
            'bookingconfirmed_nodeposit'=>  __('Booking Confirmed - no deposit','wprentals-core'),
            'inbox'                     =>  __('Inbox- New Message','wprentals-core'),
            'newbook'                   =>  __('New Booking Request','wprentals-core'),
            'mynewbook'                 =>  __('User - New Booking Request','wprentals-core'),
            'newinvoice'                =>  __('Invoice generation','wprentals-core'),
            'deletebooking'             =>  __('Booking request rejected','wprentals-core'),
            'deletebookinguser'         =>  __('Booking Request Cancelled','wprentals-core'),
            'deletebookingconfirmed'    =>  __('Booking Period Cancelled ','wprentals-core'),
            'new_wire_transfer'         =>  __('New wire Transfer','wprentals-core'),
            'admin_new_wire_transfer'   =>  __('Admin - New wire Transfer','wprentals-core'),
            'full_invoice_reminder'     =>  __('Invoice Payment Reminder','wprentals-core'),
	    'new_user_id_verification'  =>  __('New User ID verification', 'wprentals-core'),
        );



        print'<div class="estate_option_row">
            <div class="label_option_row">'.__('Global variables: %website_url as website url,%website_name as website name, %user_email as user_email, %username as username','wprentals-core').'</div>
            </div>';



        foreach ($emails as $key=>$label ){
            $value          = stripslashes( wprentals_get_option('wp_estate_'.$key,'') );
            $value_subject  = stripslashes( wprentals_get_option('wp_estate_subject_'.$key,'') );


        print'<div class="estate_option_row wpestate_editor_class">
                <div class="label_option_row">'.esc_html__('Subject for','wprentals-core').' '.$label.'</div>
                <div class="option_row_explain">'.esc_html__('Email subject for','wprentals-core').' '.$label.'</div>
                <input type="text" style="width:100%" name="subject_'.$key.'" value="'.$value_subject.'" />
                </br>
                <div class="label_option_row">'.esc_html__('Content for','wprentals-core').' '.$label.'</div>
                <div class="option_row_explain ">'.esc_html__('Email content for','wprentals-core').' '.$label.'</div>';


                        //<textarea rows="10" style="width:100%" name="'.$key.'">'.$value.'</textarea>
                  	wp_editor( $value, $key, array( 'textarea_rows' => 15, 'teeny' => true )  );
                print'
                <div class="extra_exp_new"> '.wpestate_emails_extra_details($key).'</div>
                </div>';

        }
        print ' <div class="estate_option_row_submit">
            <input type="submit" name="submit"  class="new_admin_submit " value="' . __('Save Changes', 'wprentals-core') . '" />
            </div>';
}
endif;


if( !function_exists('wpestate_emails_extra_details') ):
    function wpestate_emails_extra_details($type,$is_sms=''){
        $return_string='';
        switch ($type) {

            case "agent_update_profile":
                    $return_string=__('%user_login as  username, %user_email_profile as user email, %user_id as user_id' ,'wprentals-core');
                    break;
            case "validation":
                    $return_string=__('%apincode as new pin' ,'wprentals-core');
                    break;
            case "new_user":
                    $return_string=__('%user_login_register as new username, %user_pass_register as user password, %user_email_register as new user email' ,'wprentals-core');
                    break;

            case "admin_new_user":
                    $return_string=__('%user_login_register as new username and %user_email_register as new user email' ,'wprentals-core');
                    break;

            case "password_reset_request":
                    $return_string=__('%reset_link as reset link, %forgot_username as username and  %forgot_email as user email','wprentals-core');
                    break;

            case "password_reseted":
                    $return_string=__('%user_pass as user password,%user_login as user login','wprentals-core');
                    break;

            case "purchase_activated":
                    $return_string='';
                    break;

            case "approved_listing":
                    $return_string=__('* you can use %post_id as listing id, %property_url as property url and %property_title as property name','wprentals-core');
                    break;

            case "new_wire_transfer":
                    $return_string=  __('* you can use %invoice_no as invoice number, %total_price as $totalprice and %payment_details as  $payment_details','wprentals-core');
                    break;

            case "admin_new_wire_transfer":
                    $return_string=  __('* you can use %invoice_no as invoice number, %total_price as $totalprice and %payment_details as  $payment_details','wprentals-core');
                    break;

            case "admin_expired_listing":
                    $return_string=  __('* you can use %submission_title as property title number, %submission_url as property submission url','wprentals-core');
                    break;

            case "matching_submissions":
                    $return_string=  __('* you can use %matching_submissions as matching submissions list','wprentals-core');
                    break;

            case "paid_submissions":
                    $return_string= '';
                    break;

            case  "featured_submission":
                    $return_string=  '';
                    break;

            case "account_downgraded":
                    $return_string=  '';
                    break;

            case "free_listing_expired":
                    $return_string=  __('* you can use %expired_listing_url as expired listing url and %expired_listing_name as expired listing name','wprentals-core');
                    break;

            case "new_listing_submission":
                    $return_string=  __('* you can use %new_listing_title as new listing title and %new_listing_url as new listing url','wprentals-core');
                    break;

        /*   case "listing_edit":
                    $return_string=  __('* you can use %editing_listing_title as editing listing title and %editing_listing_url as editing listing url','wprentals-core');
                    break;
          */
            case "recurring_payment":
                    $return_string=  __('* you can use %recurring_pack_name as recurring packacge name and %merchant as merchant name','wprentals-core');
                    break;

            case "membership_activated":
                    $return_string=  '';
                    break;
            case "bookingconfirmeduser":
                    $return_String='';
                    break;
            case "bookingconfirmed":
                    $return_String='';
                    break;
            case "inbox":
                    $return_string=  __('* you can use %content as message content','wprentals-core');
                    break;
            case "newbook":
                    $return_string=  __('* you can use %booking_property_link as property url','wprentals-core');
                    break;
            case "mynewbook":
                    $return_string=  __('* you can use %booking_property_link as property url','wprentals-core');
                    break;
            case "newinvoice":
                    $return_String='';
                    break;
            case "deletebooking":
                    $return_String='';
                    break;
            case "deletebookinguser":
                    $return_String='';
                    break;
            case "deletebookingconfirmed":
                    $return_String='';
                    break;
            case "new_wire_transfer":
                    $return_string=  __('* you can use %invoice_no as invoice number, %total_price as $totalprice and %payment_details as  $payment_details','wprentals-core');
                    break;

            case "admin_new_wire_transfer":
                    $return_string=  __('* you can use %invoice_no as invoice number, %total_price as $totalprice and %payment_details as  $payment_details','wprentals-core');
                    break;


            case "full_invoice_reminder":
                    $return_string=__('* you can use %invoice_id as invoice id, %property_url as property url and %property_title as property name, %booking_id as booking id, %until_date as the last day','wprentals-core');
                    break;
        }

        if($is_sms!=1){
            $return_string.= htmlspecialchars(', use text mode and <br> tag for new line');
        }
        return $return_string;
    }
endif;
