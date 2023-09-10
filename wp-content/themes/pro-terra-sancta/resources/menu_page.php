<?php
class ATS_MENU{
    public static function init(){
        $user = wp_get_current_user();
        if($user->user_nicename == "dev"){
            $capability = 'manage_options';
            $mslug = 'ats_test';
            $base_url = "admin.php?page=";
            add_menu_page(
                'Vista categoria', 
                'ATS', 
                $capability, 
                $mslug, 
                array('ATS_MENU', "ATS_DEV_Main"),
                '',
                ''
            );
        }

    }
    public static function ATS_DEV_Main(){

    }
}