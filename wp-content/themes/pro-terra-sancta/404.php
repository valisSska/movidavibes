<?php get_header(); ?>
<?php /*
<div id="main-content">
	<div class="container error_404">
		<div id="content-area" class="clearfix">
			<div id="left-area">
				<article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>
					<?php get_template_part( 'includes/no-results', '404' ); ?>
				</article> <!-- .et_pb_post -->
			</div> <!-- #left-area -->

			<?php get_sidebar(); ?>
		</div> <!-- #content-area -->
	</div> <!-- .container -->
</div> <!-- #main-content --> */
?>
<div id="main-content">
	<?php $id = 108092 ; $p = get_page($id); echo apply_filters('the_content', $p->post_content); ?>
</div> <!-- #main-content -->
<div class="entry">
</div>
<?php
get_footer();