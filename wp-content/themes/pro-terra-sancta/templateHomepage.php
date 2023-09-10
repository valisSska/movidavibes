<?php
/*
Template Name: Homepage
Template Post Type: page
*/
get_header();

$show_default_title = get_post_meta( get_the_ID(), '_et_pb_show_title', true );

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>

<div id="main-content">
	<?php while ( have_posts() ) : the_post(); ?>
	<div id="content-image">
		<?php 
		if ( has_post_thumbnail() ) {
			?>
			<div class="image_post" style="background:url('<?php echo the_post_thumbnail_url("full") ?>')">
				<span>
					<h1><?php the_title(); ?></h1>
				</span>
			</div>
			<?php
		}
		else {
			echo '<img src="' . get_bloginfo( 'stylesheet_directory' ) . '/images/thumbnail-default.jpg" />';
		}
		?>
	</div> <!-- #content-image -->
	<div class="container">
		<div id="content-area" class="clearfix">
				<?php if (et_get_option('divi_integration_single_top') <> '' && et_get_option('divi_integrate_singletop_enable') == 'on') echo(et_get_option('divi_integration_single_top')); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class( 'et_pb_post' ); ?>>

					<div class="entry-content">
					<?php
						do_action( 'et_before_content' );

						the_content();

						wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ), 'after' => '</div>' ) );
					?>
					</div> <!-- .entry-content -->
					<div class="et_post_meta_wrapper">
					<?php
					if ( et_get_option('divi_468_enable') == 'on' ){
						echo '<div class="et-single-post-ad">';
						if ( et_get_option('divi_468_adsense') <> '' ) echo( et_get_option('divi_468_adsense') );
						else { ?>
							<a href="<?php echo esc_url(et_get_option('divi_468_url')); ?>"><img src="<?php echo esc_attr(et_get_option('divi_468_image')); ?>" alt="468" class="foursixeight" /></a>
				<?php 	}
						echo '</div> <!-- .et-single-post-ad -->';
					}
				?>

					<?php if (et_get_option('divi_integration_single_bottom') <> '' && et_get_option('divi_integrate_singlebottom_enable') == 'on') echo(et_get_option('divi_integration_single_bottom')); ?>

					<?php
						if ( ( comments_open() || get_comments_number() ) && 'on' == et_get_option( 'divi_show_postcomments', 'on' ) ) {
							comments_template( '', true );
						}
					?>
					<?php
						$cssRemove = "display:none";
						$obj_next_post = new stdClass();
						$obj_next_post->title = "";
						$obj_next_post->link = "";
						$obj_next_post->css = $cssRemove;
						$obj_prev_post = new stdClass();
						$obj_prev_post->title = "";
						$obj_prev_post->link = "";
						$obj_prev_post->css= $cssRemove;
												
						$next_post = get_next_post(true);
						$prev_post = get_previous_post(true);
						
						if($next_post){
							$obj_next_post->css = (String) NULL;
							$obj_next_post->title = $next_post->post_title;
							$obj_next_post->link = get_permalink($next_post->ID);
						}
						if($prev_post){
							$obj_prev_post->css = (String) NULL;
							$obj_prev_post->title = $prev_post->post_title;
							$obj_prev_post->link = get_permalink($prev_post->ID);
						}
					?>
					<div id="see-other-post">
						<div class="divider"></div>
						<div class="posts">
							<div class="next-post">
								<a href="<?php echo $obj_next_post->link ?>" style="<?php echo $obj_next_post->css ?>">
									<div class="arrow-left">
										<img src="/wp-content/themes/ats/resources/svg/Arrow.svg">
									</div>
									<div class="text">
										<?php echo $obj_next_post->title ?>
									</div>
								</a>
							</div>
							<div class="prev-post">
								<a href="<?php echo $obj_prev_post->link ?>" style="<?php echo $obj_prev_post->css ?>">
									<div class="arrow-right">
										<img src="/wp-content/themes/ats/resources/svg/Arrow.svg">
									</div>
									<div class="text">
										<?php echo $obj_prev_post->title ?>
									</div>
								</a>
							</div>
						</div>
					</div>
					</div> <!-- .et_post_meta_wrapper -->
				</article> <!-- .et_pb_post -->
		</div> <!-- #content-area -->
	</div> <!-- .container -->
	<?php endwhile; ?>
</div> <!-- #main-content -->

<?php

get_footer();
