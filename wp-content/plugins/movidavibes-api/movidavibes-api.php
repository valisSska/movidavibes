<?php
/*
Plugin Name: Movidavibes-api
Description: API movidavibes
Version: 1.0
Author: Valik
*/

function userExist_request($data) {
    global $wpdb;

    // Prendi direttamente il valore dalla chiave 'data'
    $userName = isset($data['data']) ? sanitize_text_field($data['data']) : '';

    // Prepara la query SQL
    $query = $wpdb->prepare("SELECT user_login FROM {$wpdb->prefix}users WHERE user_login = %s", $userName);

    // Esegui la query
    $results = $wpdb->get_results($query);

    // Ritorna i risultati come JSON
    return wp_send_json($results);
}

function emailExist_request($data) {
    global $wpdb;

    // Prendi direttamente il valore dalla chiave 'data'
    $userEmail = isset($data['data']) ? sanitize_text_field($data['data']) : '';

    // Prepara la query SQL
    $query = $wpdb->prepare("SELECT user_email FROM {$wpdb->prefix}users WHERE user_email = %s", $userEmail);

    // Esegui la query
    $results = $wpdb->get_results($query);

    // Ritorna i risultati come JSON
    return wp_send_json($results);
}

add_action('rest_api_init', function () {
    register_rest_route('/movidavibes-api/v1', '/exist-user', array(
        'methods'             => 'POST',
        'callback'            => 'userExist_request',
        'permission_callback' => '__return_true',
    ));
});
add_action('rest_api_init', function () {
    register_rest_route('/movidavibes-api/v1', '/exist-email', array(
        'methods'             => 'POST',
        'callback'            => 'emailExist_request',
        'permission_callback' => '__return_true',
    ));
});
