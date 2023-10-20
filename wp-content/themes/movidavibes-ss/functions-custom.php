<?php
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


function enqueue_react_app() {
    wp_enqueue_script('react-app', get_template_directory_uri() . '/build/static/js/main.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'enqueue_react_app');

?>

<script>
    var homeurl = <?php echo json_encode(get_home_url()); ?>;
</script>
