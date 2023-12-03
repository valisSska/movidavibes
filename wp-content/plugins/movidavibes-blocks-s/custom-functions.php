<?php

function movidavibes_handle_registration() {
    // Ottenere i dati inviati dalla richiesta di registrazione
    $nome = sanitize_text_field($_POST['nome']);
    $cognome = sanitize_text_field($_POST['cognome']);
    $user = sanitize_text_field($_POST['user']);
    $email = sanitize_text_field($_POST['email']);
    $phoneNumber = sanitize_text_field($_POST['phoneNumber']);
    $password = $_POST['password']; // Assicurati di implementare una gestione sicura delle password

    // Aggiungi un nuovo utente
    $user_id = wp_insert_user(array(
        'user_login' => $user,
        'user_pass' => $password,
        'user_email' => $email,
        'first_name' => $nome,
        'last_name' => $cognome,
        // Aggiungi altri campi utente se necessario
    ));

    if (is_wp_error($user_id)) {
        // Gestisci l'errore in qualche modo
        wp_send_json_error(array('message' => 'Errore durante la registrazione.'));
    } else {
        // Registrazione riuscita
        wp_send_json_success(array('message' => 'Registrazione riuscita.'));
    }
}

add_action('wp_ajax_movidavibes_registration', 'movidavibes_handle_registration');
add_action('wp_ajax_nopriv_movidavibes_registration', 'movidavibes_handle_registration');