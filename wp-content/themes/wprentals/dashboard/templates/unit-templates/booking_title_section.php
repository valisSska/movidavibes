<?php

if ( $booking_status=='confirmed'){
    $total_price        =   floatval( get_post_meta($post->ID, 'total_price', true) );
    $to_be_paid         =   floatval( get_post_meta($post->ID, 'to_be_paid', true) );
    $to_be_paid         =   $total_price-$to_be_paid;
    $to_be_paid_show    =   wpestate_show_price_booking ( $to_be_paid ,$wpestate_currency,$wpestate_where_currency,1);
}else{
    $to_be_paid         =   floatval( get_post_meta($post->ID, 'total_price', true) );
    $to_be_paid_show    =   wpestate_show_price_booking ( $to_be_paid ,$wpestate_currency,$wpestate_where_currency,1);
}


 

?>

<div class="prop-info">
    <h4 class="listing_title_book book_listing_user_title">
        <?php
        echo esc_html__('Booking request','wprentals').' '.$post->ID;
        print ' <strong>'. esc_html__( 'for','wprentals').'</strong> <a href="'.esc_url (get_permalink($booking_id) ).'">'.get_the_title($booking_id).'</a>';
        ?>
    </h4>


    <?php if( $author!= $user_login ) { ?>
        <div class="user_dashboard_listed book_listing_user_invoice">
            <span class="booking_details_title"><?php esc_html_e('Invoice No: ','wprentals');?></span> <span class="invoice_list_id"><?php print esc_html($invoice_no);?></span>
        </div>

        <div class="user_dashboard_listed book_listing_user_pay">
            <span class="booking_details_title"><?php esc_html_e('Pay Amount: ','wprentals');?> </span> <?php print wpestate_show_price_booking ( floatval( get_post_meta($invoice_no, 'item_price', true)) ,$wpestate_currency,$wpestate_where_currency,1); ?>
            <span class="booking_details_title guest_details book_listing_user_guest_details">
                <?php
                if ($booking_guests!=0){
                    esc_html_e('Guests: ','wprentals');?> </span> <?php print '<span class="book_listing_user_guest_details">'. esc_html($booking_guests).wpestate_booking_guest_explanations($post->ID).'</span>'; 
                }?>
        </div>
    <?php }


    include(locate_template('dashboard/templates/unit-templates/balance_display.php') );

    if($event_description!=''){
        print ' <div class="user_dashboard_listed event_desc"> <span class="booking_details_title">'.esc_html__( 'Reservation made by owner','wprentals').'</span></div>';
        print ' <div class="user_dashboard_listed event_desc"> <span class="booking_details_title">'.esc_html__( 'Comments: ','wprentals').'</span>'.esc_html($event_description).'</div>';
    }
    ?>
</div>
