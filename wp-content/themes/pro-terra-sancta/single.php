<?php

$post_type = get_post_type();
if($post_type == "page"){
	include 'page.php';
	return;
}

get_header();

$show_default_title = get_post_meta( get_the_ID(), '_et_pb_show_title', true );
$posthidesocial = get_post_meta( get_the_ID(), 'posthidesocial', true );
$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

global $suff;
include get_stylesheet_directory() . '/lang/label-'.$suff.'.php';
global $language;
?>

<div id="main-content" class="<?php echo $suff; ?>">
	<?php while ( have_posts() ) : the_post(); ?>
  <?php
    $tags = wp_get_post_tags(get_the_ID());
    $first_tag = (isset($tags[0]) && !empty($tags[0])) ? $tags[0] : '';
  ?>
	<div id="content-image">
		<?php
		$url=get_bloginfo( 'stylesheet_directory' ) . '/images/terra-santa-11.jpg';
		if ( has_post_thumbnail() ) $url=wp_get_attachment_image_src(get_post_thumbnail_id(), "full")[0];
		?>
		<div class="image_post" style="background:url('<?php echo $url;  ?>')">
		<?php

		$content=get_the_content();
		$class_date='moz_date';
		if (substr( $content, 0, 14 ) === "[et_pb_section") $class_date='et_pb_row et_pb_row_0';
		?>
		</div>
	</div> <!-- #content-image -->
	<div class="container pt-0">
		<div id="content-area" class="clearfix">
				<?php if (et_get_option('divi_integration_single_top') <> '' && et_get_option('divi_integrate_singletop_enable') == 'on') echo(et_get_option('divi_integration_single_top')); ?>
				<article id="post-<?php the_ID(); ?>" <?php post_class( 'et_pb_post' ); ?>>

					<div class="entry-content">
            <div class="news-article-date py-3">
              <?php echo get_the_time('d.m.Y'); ?>
              <span class="news-article-tag pl-1"><?php echo isset($first_tag->name) && !empty($first_tag->name) ? $first_tag->name : ''; ?></span>
            </div>
            <h1 class="news-article-title animate-up"><?php the_title(); ?></h1>

            <?php
						do_action( 'et_before_content' );

						$content=apply_filters('the_content', $content);
						echo $content;

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
						<div class="posts">
							<div class="next-post">
								<a href="<?php echo $obj_prev_post->link ?>" style="<?php echo $obj_prev_post->css ?>">
									<div class="arrow-left">
                    <i class="fas fa-caret-left"></i>
									</div>
									<div class="text">
										<?php echo $language['back'] // $obj_next_post->title ?>
									</div>
								</a>
							</div>
							<div class="prev-post">
								<a href="<?php echo $obj_next_post->link ?>" style="<?php echo $obj_next_post->css ?>">
									<div class="arrow-right">
                    <i class="fas fa-caret-right"></i>
									</div>
									<div class="text">
										<?php echo $language['forward'] // $obj_prev_post->title ?>
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
