<?php
//$last_url = $_SERVER['HTTP_REFERER'];
$lang = ATS::get_lang();
print_r($lang);
get_header(); ?>
<div id="main-content">
	<?php
		$id = 108098 ;
		$p = get_page($id);
		echo apply_filters('the_content', $p->post_content);
	?>

</div> <!-- #main-content -->

<?php
get_footer();
