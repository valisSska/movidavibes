<?php
echo "ciaoo da custom-functions 46665 /////  ";


/*
global $wpdb;

$query=$wpdb->prepare("SELECT * FROM {$wpdb->prefix}users");
$results = $wpdb->get_results($query);

if($results){
    print_r($results);
    ?>
    <script>
    var customData = <?php echo json_encode($results); ?>;
    </script>
    <?php
}else
{
    echo "errore query users db";
    $wpdb->print_error();
}
*/

/*

function movidavibes_query_user() {
    echo 'ciao movidavibes_query_user';
    global $wpdb;

    // Ottieni il parametro userName dalla richiesta AJAX
    $userName = $_POST['userName'];

    // Esegui la query nel tuo database
    $query = $wpdb->prepare("SELECT user_login FROM {$wpdb->prefix}users WHERE user_login = %s", "casa");
    $results = $wpdb->get_results($query);

    // Restituisci i risultati in formato JSON
     echo json_encode($results);

    // Assicurati di terminare l'esecuzione del codice dopo la restituzione dei risultati
}

add_action('wp_ajax_movidavibes_query_user', 'movidavibes_query_user');
add_action('wp_ajax_nopriv_movidavibes_query_user', 'movidavibes_query_user');

*/

/*
function enqueue_react_app() {
    wp_enqueue_script('react-app', get_template_directory_uri() . '/build/static/js/main.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'enqueue_react_app');

*/

?>
<!--
<script>
    var homeurl = <?php /*echo json_encode(get_home_url()); */?>;
</script>

-->
