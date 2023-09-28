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

include "index.php";

?>