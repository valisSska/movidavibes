<?php
/*
Plugin Name: Movidavibes-api
Description: API movidavibes
Version: 1.0
Author: Valik
*/

function clearCookiesMoviJson($string) {
    $userCookiesString2 = str_replace('\\', '', $string);
    $userCookiesString3 = str_replace('"', '', $userCookiesString2);
    $userCookiesString4 = str_replace(':', "':'", $userCookiesString3);
    $userCookiesString5 = str_replace(',', "','", $userCookiesString4);
    $userCookiesString6 = str_replace('{', "{'", $userCookiesString5);
    $userCookiesString7 = str_replace('}', "'}", $userCookiesString6);
    $userCookiesString8 = str_replace('[]', '', $userCookiesString7);
    $userCookiesString9 = preg_replace('/^"|"$/','', str_replace("'", '"', $userCookiesString8));
    
    $response = json_decode($userCookiesString9, true); // Il secondo parametro true restituisce un array associativo invece di un oggetto
    
    return $response;
}

function my_plugin_function() {
require_once(ABSPATH . 'wp-load.php');


// Funzione per generare un token di sessione casuale
function generateSessionToken($length = 32) {
    return bin2hex(random_bytes($length));
}

// Funzione per verificare se è necessario generare un nuovo token (ogni 10 giorni)
function checkGenerateNewToken() {
    $ultimaGenerazione = isset($_SESSION['ultima_generazione']) ? $_SESSION['ultima_generazione'] : 0;
    $scadenza = $ultimaGenerazione + (10 * 24 * 60 * 60); // 10 giorni in secondi

    if (time() > $scadenza) {
        // Genera un nuovo token
        $_SESSION['token'] = generateSessionToken();
        $_SESSION['ultima_generazione'] = time();
    }
}



function controlCookie_request($tokenRequest) {
    $tokenReceived=$tokenRequest["token"];
    if (is_user_logged_in()) {
        // Utente autenticato
        $user_id = get_current_user_id();
        $user_data = get_userdata($user_id);
    
        $response = array(true);
    } else {
        if (isset($_COOKIE["logged"])) {
            // Recupera il valore del cookie
            $valoreCookie = $_COOKIE["logged"];
            
            // Decodifica il JSON nel cookie
            $user_info = clearCookiesMoviJson($valoreCookie);
            

            // Verifica se il token ricevuto corrisponde a quello nel cookie
            if(isset($user_info['token']) && $user_info['token'] == $tokenReceived){
                $response = array(true);
            } else {
                $response = array(false);
            }
        } else {
            $response = array(false);
        }
    }

    return wp_send_json($response);
}




function userLogged_request() {
    if (is_user_logged_in()) {
        // Utente autenticato
        $user_id = get_current_user_id();
        $user_data = get_userdata($user_id);
    
        $response = array(
            'success' => true,
            'user_id' => $user_id,
            'message' => 'Utente loggato',
        );
    } else {
        if (isset($_COOKIE["logged"])) {
            // Recupera il valore del cookie
            $valoreCookie = $_COOKIE["logged"];
            $response = array(
                 $_COOKIE["logged"],
            );
        } else {
            $response = array('success' => false, 'message' => 'Utente non loggato');
        }
    }

    return wp_send_json($response);
}


function user_log_in_request($data) {
    $userName = isset($data['username']) ? sanitize_text_field($data['username']) : '';
    $userPassword = isset($data['password']) ? sanitize_text_field($data['password']) : '';
    // Elimina il cookie
    setcookie("logged", '', time()-3600, '/');

    // Inizia una nuova sessione o ripristina quella corrente
    session_start();

    // Distruggi la sessione esistente
    session_destroy();

    // Richiama checkGenerateNewToken per generare un nuovo token
    checkGenerateNewToken();

    // Inizia una nuova sessione
    session_start();
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*


    $user_data = wp_signon(array('user_login' => $userName, 'user_password' => $userPassword, 'remember' => true), false);
    $user_tel = wp_signon(array('user_tel' => $userName, 'user_password' => $userPassword, 'remember' => true), false);
    $user_email = wp_signon(array('user_email' => $userName, 'user_password' => $userPassword, 'remember' => true), false);

    if (is_wp_error($user_data) && is_wp_error($user_tel) && is_wp_error($user_email)) {
        $response = array('success' => false, 'message' => $user_data->get_error_message());
        return wp_send_json($response);
    } else {
        // Considera l'utente come autenticato
        if (!is_wp_error($user_data)) {
            wp_set_current_user($user_data[0]->ID);
            wp_set_auth_cookie($user_data[0]->ID);
            do_action('wp_login', $user_data[0]->user_login, $user_data);
        } elseif (!is_wp_error($user_tel)) {
            wp_set_current_user($user_tel[0]->ID);
            wp_set_auth_cookie($user_tel[0]->ID);
            do_action('wp_login', $user_tel[0]->user_login, $user_tel);
        } elseif (!is_wp_error($user_email)) {
            wp_set_current_user($user_email[0]->ID);
            wp_set_auth_cookie($user_email[0]->ID);
            do_action('wp_login', $user_email[0]->user_login, $user_email);
        }

        $user_id = get_current_user_id();
        $is_logged_in = is_user_logged_in();

        checkGenerateNewToken();
        session_start();

        $token = $_SESSION['token'];

        $cookie_name = 'logged';

        // Creare un array o un oggetto con le informazioni desiderate
        $user_info = array(
            'user_id' => $user_id,
            'token' => $token,
            'is_logged' => true,
        );

        // Convertire l'array o l'oggetto in una stringa JSON senza scapare i backslash
        $cookie_value = wp_json_encode($user_info);

        $expire = time() + (10 * 24 * 60 * 60); // 10 giorni in secondi
        setcookie($cookie_name, $cookie_value, $expire);

        $response = array('success' => true, 'logged' => $is_logged_in, 'id_user' => $user_id, 'token_user' => $token);

        return wp_send_json($response);
    }
    */


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    $user_data = wp_signon(array('user_login' => $userName, 'user_password' => $userPassword,'remember' => true), false);

    if (is_wp_error($user_data)) {
        global $wpdb;
        $user_tel = sanitize_text_field($data['username']);
        $query_user_by_tel = $wpdb->prepare("SELECT * FROM {$wpdb->prefix}users WHERE user_tel = %s", $user_tel);
        $result_user = $wpdb->get_results($query_user_by_tel);
        if($result_user && wp_check_password($userPassword, $result_user[0]->user_pass, $result_user[0]->ID))
        {
            wp_set_current_user($result_user[0]->ID);
            wp_set_auth_cookie($result_user[0]->ID);
            do_action('wp_login', $user->user_login, $result_user);
            $is_logged_in = is_user_logged_in();
            $user_id = $result_user[0]->ID;
            checkGenerateNewToken();
            session_start();

            $token=$_SESSION['token'];

            $cookie_name = 'logged';


            // Creare un array o un oggetto con le informazioni desiderate
            $user_info = array(
            'user_id' => $user_id,
            'token' => $token,
            'is_logged' => true,
             );
        
             // Convertire l'array o l'oggetto in una stringa JSON senza scapare i backslash
             $cookie_value = wp_json_encode($user_info);
             $expire = time() + (10 * 24 * 60 * 60); // 10 giorni in secondi
             setcookie($cookie_name, $cookie_value, $expire);



             $response = array('success' => true, 'logged'=> is_user_logged_in(), 'id_user' =>  $user_id, 'token_user' => $token);
        
        }else{
            $user_email = sanitize_text_field($data['username']);
            $query_user_by_email = $wpdb->prepare("SELECT * FROM {$wpdb->prefix}users WHERE user_email = %s", $user_email);
            $result_user = $wpdb->get_results($query_user_by_email);
            if($result_user && wp_check_password($userPassword, $result_user[0]->user_pass, $result_user[0]->ID)){
                wp_set_current_user($result_user[0]->ID);
                wp_set_auth_cookie($result_user[0]->ID);
                do_action('wp_login', $user->user_login, $result_user);
                $is_logged_in = is_user_logged_in();
                $user_id = $result_user[0]->ID;
                checkGenerateNewToken();
                session_start();
    
                $token=$_SESSION['token'];
    
                $cookie_name = 'logged';
    
    
                // Creare un array o un oggetto con le informazioni desiderate
                $user_info = array(
                'user_id' => $user_id,
                'token' => $token,
                'is_logged' => true,
                 );
            
                 // Convertire l'array o l'oggetto in una stringa JSON senza scapare i backslash
                 $cookie_value = wp_json_encode($user_info);
                 $expire = time() + (10 * 24 * 60 * 60); // 10 giorni in secondi
                 setcookie($cookie_name, $cookie_value, $expire);
    
    
    
                 $response = array('success' => true, 'logged'=> is_user_logged_in(), 'id_user' =>  $user_id, 'token_user' => $token);
            
            }else{
    
                $response = array('success' => false, 'message' => 'Autenticazione fallita.');
                
                }

            }
    } else {
        // Considera l'utente come autenticato

        wp_set_current_user($user_data->ID);
        wp_set_auth_cookie($user_data->ID);
        do_action('wp_login', $user->user_login, $user);


        $is_logged_in = is_user_logged_in();
        $user_id = get_current_user_id();

        checkGenerateNewToken();
        session_start();

        $token=$_SESSION['token'];

        $cookie_name = 'logged';


        // Creare un array o un oggetto con le informazioni desiderate
        $user_info = array(
            'user_id' => $user_id,
            'token' => $token,
            'is_logged' => true,
        );
        
        // Convertire l'array o l'oggetto in una stringa JSON senza scapare i backslash
        $cookie_value = wp_json_encode($user_info);
        
        $expire = time() + (10 * 24 * 60 * 60); // 10 giorni in secondi
        setcookie($cookie_name, $cookie_value, $expire);



        $response = array('success' => true, 'logged'=> is_user_logged_in(), 'id_user' =>  $user_id, 'token_user' => $token);
        
    }
   

    return wp_send_json($response);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}



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
function telExist_request($data) {
    global $wpdb;

    // Prendi direttamente il valore dalla chiave 'data'
    $userTel = isset($data['data']) ? sanitize_text_field($data['data']) : '';

    // Prepara la query SQL
    $query = $wpdb->prepare("SELECT user_tel FROM {$wpdb->prefix}users WHERE user_tel = %s", $userTel);

    // Esegui la query
    $results = $wpdb->get_results($query);

    // Ritorna i risultati come JSON
    return wp_send_json($results);
}
function logout_request() {
    if (isset($_COOKIE["logged"])) {

        session_start();

        session_destroy();
        // Elimina il cookie
        session_start();
        setcookie("logged", null);
    
    
        // Imposta il risultato nel risultato solo se il cookie era presente prima dell'eliminazione
        $results = array(
            true
        );
    } else {
        // Il cookie non era presente
        $results = array(
            false
        );
    }
   

    // Ritorna i risultati come JSON
    return wp_send_json($results);
}

function sgn_up_request2($data) {
    $Name = isset($data['name']) ? sanitize_text_field($data['name']) : '';
    $Surname = isset($data['surname']) ? sanitize_text_field($data['surname']) : '';
    $Username = isset($data['username']) ? sanitize_text_field($data['username']) : '';
    $Email = isset($data['email']) ? sanitize_text_field($data['email']) : '';
    $Tel = isset($data['tel']) ? sanitize_text_field($data['tel']) : '';
    $Url = isset($data['url']) ? sanitize_text_field($data['url']) : '';
    $Password = isset($data['password']) ? sanitize_text_field($data['password']) : '';
    $userName = isset($data['username']) ? sanitize_text_field($data['username']) : '';
    $userPassword = isset($data['password']) ? sanitize_text_field($data['password']) : '';

    // Creare un nuovo utente
    $user_id = wp_create_user($Username, $Password, $Email);

    if (!is_wp_error($user_id)) {
        // Aggiornare le informazioni dell'utente
        wp_update_user(array(
            'ID' => $user_id,
            'first_name' => $Name,
            'last_name' => $Surname,
            'user_url' => $Url,
            'user_tel' => $Tel,
            'display_name' => $Name . ' ' . $Surname
        ));

        // Invia una risposta JSON di successo
        wp_send_json(array('success' => true, 'user_id' => $user_id));
    } else {
        // Invia una risposta JSON di errore
        wp_send_json(array('success' => false, 'error_message' => $user_id->get_error_message()));
    }
}


function img_profile_upload_request($formData) {
    $id_user = $_POST['id_user'];
    $file = $_POST['file'];

    // Verifica che l'ID utente sia valido
    if ($id_user) {
            // Ottieni l'estensione del file
            $fileExtension = pathinfo($file['name'], PATHINFO_EXTENSION);

            // Genera un nome univoco per il file
            $uniqueFilename = md5(uniqid($file['name'])) . '.' . $fileExtension;

            // Specifica il percorso di destinazione con uno slash iniziale
            $uploadPath = '/wp-content/profile-imgs/' . $uniqueFilename;

            // Sposta il file nella directory di destinazione
            move_uploaded_file($file['tmp_name'], $_SERVER['DOCUMENT_ROOT'] . $uploadPath);

            // Restituisci una risposta JSON di successo
            $response = array('success' => true, 'message' => 'Immagine caricata con successo');
    } else {
        // Restituisci un messaggio di errore JSON se l'ID utente non è valido
        $response = array('success' => false, 'message' => 'Id utente non valido.');
    }

    // Restituisci la risposta JSON
    wp_send_json($response);
}


add_action('rest_api_init', function () {
    register_rest_route('/movidavibes-api/v1', '/img-upload', array(
        'methods'             => 'POST',
        'callback'            => 'img_profile_upload_request',
        'permission_callback' => '__return_true',
    ));
});
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
add_action('rest_api_init', function () {
    register_rest_route('/movidavibes-api/v1', '/exist-tel', array(
        'methods'             => 'POST',
        'callback'            => 'telExist_request',
        'permission_callback' => '__return_true',
    ));
});
add_action('rest_api_init', function () {
    register_rest_route('/movidavibes-api/v1', '/sgn-up', array(
        'methods'             => 'POST',
        'callback'            => 'sgn_up_request',
        'permission_callback' => '__return_true',
    ));
});
add_action('rest_api_init', function () {
    register_rest_route('/movidavibes-api/v1', '/sgn-up2', array(
        'methods'             => 'POST',
        'callback'            => 'sgn_up_request2',
        'permission_callback' => '__return_true',
    ));
});
add_action('rest_api_init', function () {
    register_rest_route('/movidavibes-api/v1', '/log-in', array(
        'methods'             => 'POST',
        'callback'            => 'user_log_in_request',
        'permission_callback' => '__return_true',
    ));
});
function register_custom_rest_route() {
    add_action('rest_api_init', function () {
    register_rest_route('/movidavibes-api/v1', '/is-logged', array(
        'methods'             => 'POST',
        'callback'            => 'userLogged_request',
        'permission_callback' => '__return_true',
    ));
});
}
function register_custom_rest_route_token() {
    add_action('rest_api_init', function () {
        register_rest_route('/movidavibes-api/v1', '/control-token', array(
            'methods'             => 'POST',
            'callback'            => 'controlCookie_request',
            'permission_callback' => '__return_true',
        ));
    });
};
function register_custom_rest_route_logout() {
    add_action('rest_api_init', function () {
        register_rest_route('/movidavibes-api/v1', '/logout', array(
            'methods'             => 'POST',
            'callback'            => 'logout_request',
            'permission_callback' => '__return_true',
        ));
    });
};

add_action('init', 'register_custom_rest_route');
add_action('init', 'register_custom_rest_route_token');
add_action('init', 'register_custom_rest_route_logout');

}

add_action('plugins_loaded', 'my_plugin_function', 0);