<?php
class Fullwidth_Post_Slider_Custom extends ET_Builder_Module_Fullwidth_Post_Slider{
    
    function init(){
        parent::init();
        $this->name       = esc_html__( 'Slider Custom', 'et_builder' );
        $this->plural     = esc_html__( 'Sliders Custom', 'et_builder' );
        $this->slug       = 'ats_fullwidth_post_slider';
    }
    function get_fields(){
        $ret = parent::get_fields();
        $ret['__posts']['computed_callback'] = array( 'Fullwidth_Post_Slider_Custom', 'get_blog_posts' );
        return $ret;
    }

    static function get_blog_posts( $args = array(), $conditional_tags = array(), $current_page = array(), $is_ajax_request = true ) {
		global $wp_query;

		$defaults = array(
			'posts_number'       => '',
			'include_categories' => '',
			'orderby'            => '',
			'content_source'     => '',
			'use_manual_excerpt' => '',
			'excerpt_length'     => '',
		);

		$args = wp_parse_args( $args, $defaults );
        $lang = ATS::get_lang();
		$query_args = array(
			'posts_per_page' => (int) $args['posts_number'],
            'post_status'    => 'publish',
            'post_type' => "{$lang}-post"
		);

		if ( '' !== $args['include_categories'] ) {
			$query_args['cat'] = $args['include_categories'];
		}

		if ( 'date_desc' !== $args['orderby'] ) {
			switch( $args['orderby'] ) {
				case 'date_asc' :
					$query_args['orderby'] = 'date';
					$query_args['order'] = 'ASC';
					break;
				case 'title_asc' :
					$query_args['orderby'] = 'title';
					$query_args['order'] = 'ASC';
					break;
				case 'title_desc' :
					$query_args['orderby'] = 'title';
					$query_args['order'] = 'DESC';
					break;
				case 'rand' :
					$query_args['orderby'] = 'rand';
					break;
			}
        }
        
		$query = new WP_Query( $query_args );

		// Keep page's $wp_query global
		$wp_query_page = $wp_query;

		// Turn page's $wp_query into this module's query
		$wp_query = $query; //phpcs:ignore WordPress.Variables.GlobalVariables.OverrideProhibited

		if ( $query->have_posts() ) {
			$post_index = 0;
			while ( $query->have_posts() ) {
				$query->the_post();

				$post_author_id = $query->posts[ $post_index ]->post_author;

				$categories = array();

				$categories_object = get_the_terms( get_the_ID(), 'category' );

				if ( ! empty( $categories_object ) ) {
					foreach ( $categories_object as $category ) {
						$categories[] = array(
							'id' => $category->term_id,
							'label' => $category->name,
							'permalink' => get_term_link( $category ),
						);
					}
				}

				$query->posts[ $post_index ]->post_featured_image = esc_url( wp_get_attachment_url( get_post_thumbnail_id() ) );
				$query->posts[ $post_index ]->has_post_thumbnail  = has_post_thumbnail();
				$query->posts[ $post_index ]->post_permalink      = get_the_permalink();
				$query->posts[ $post_index ]->post_author_url     = get_author_posts_url( $post_author_id );
				$query->posts[ $post_index ]->post_author_name    = get_the_author_meta( 'display_name', $post_author_id );
				$query->posts[ $post_index ]->post_date_readable  = get_the_date();
				$query->posts[ $post_index ]->categories          = $categories;
				$query->posts[ $post_index ]->post_comment_popup  = et_core_maybe_convert_to_utf_8( sprintf( esc_html( _nx( '%s Comment', '%s Comments', get_comments_number(), 'number of comments', 'et_builder' ) ), number_format_i18n( get_comments_number() ) ) );

				$post_content = et_strip_shortcodes( get_the_content(), true );

				global $et_fb_processing_shortcode_object, $et_pb_rendering_column_content;

				$global_processing_original_value = $et_fb_processing_shortcode_object;

				// reset the fb processing flag
				$et_fb_processing_shortcode_object = false;
				// set the flag to indicate that we're processing internal content
				$et_pb_rendering_column_content = true;

				if ( $is_ajax_request ) {
					// reset all the attributes required to properly generate the internal styles
					ET_Builder_Element::clean_internal_modules_styles();
				}

				if ( 'on' === $args['content_source'] ) {
					global $more;

					// page builder doesn't support more tag, so display the_content() in case of post made with page builder
					if ( et_pb_is_pagebuilder_used( get_the_ID() ) ) {

						// do_shortcode for Divi Plugin instead of applying `the_content` filter to avoid conflicts with 3rd party themes
						$builder_post_content = et_is_builder_plugin_active() ? do_shortcode( $post_content ) : apply_filters( 'the_content', $post_content );

						// Overwrite default content, in case the content is protected
						$query->posts[ $post_index ]->post_content = $builder_post_content;
					} else {
						$more = null; // phpcs:ignore WordPress.Variables.GlobalVariables.OverrideProhibited

						// Overwrite default content, in case the content is protected
						$query->posts[ $post_index ]->post_content = et_is_builder_plugin_active() ? do_shortcode( get_the_content('') ) : apply_filters( 'the_content', get_the_content('') );
					}
				} else {
					if ( has_excerpt() && 'off' !== $args['use_manual_excerpt'] ) {
						$query->posts[ $post_index ]->post_content = et_is_builder_plugin_active() ? do_shortcode( et_strip_shortcodes( get_the_excerpt(), true ) ) : apply_filters( 'the_content', et_strip_shortcodes( get_the_excerpt(), true ) );
					} else {
						$query->posts[ $post_index ]->post_content = strip_shortcodes( truncate_post( intval( $args['excerpt_length'] ), false, '', true ) );
					}
				}

				$et_fb_processing_shortcode_object = $global_processing_original_value;

				if ( $is_ajax_request ) {
					// retrieve the styles for the modules inside Blog content
					$internal_style = ET_Builder_Element::get_style( true );

					// reset all the attributes after we retrieved styles
					ET_Builder_Element::clean_internal_modules_styles( false );

					$query->posts[ $post_index ]->internal_styles = $internal_style;
				}

				$et_pb_rendering_column_content = false;

				$post_index++;
			} // end while
			wp_reset_query();
		} else if ( wp_doing_ajax() || et_core_is_fb_enabled() ) {
			// This is for the VB
			$query  = '<div class="et_pb_row et_pb_no_results">';
			$query .= self::get_no_results_template();
			$query .= '</div>';

			$query = array( 'posts' => $query );
		}

		wp_reset_postdata();

		// Reset $wp_query to its origin
		$wp_query = $wp_query_page; // phpcs:ignore WordPress.Variables.GlobalVariables.OverrideProhibited

		return $query;
	}

    function render( $attrs, $content = null, $render_slug ) {
		/**
		 * Cached $wp_filter so it can be restored at the end of the callback.
		 * This is needed because this callback uses the_content filter / calls a function
		 * which uses the_content filter. WordPress doesn't support nested filter
		 */
		global $wp_filter;
		$wp_filter_cache                 = $wp_filter;
		$show_arrows                     = $this->props['show_arrows'];
		$show_pagination                 = $this->props['show_pagination'];
		$parallax                        = $this->props['parallax'];
		$parallax_method                 = $this->props['parallax_method'];
		$auto                            = @$this->props['auto'];
		$auto_speed                      = @$this->props['auto_speed'];
		$auto_ignore_hover               = @$this->props['auto_ignore_hover'];
		$body_font_size                  = $this->props['body_font_size'];
		$show_content_on_mobile          = $this->props['show_content_on_mobile'];
		$show_cta_on_mobile              = $this->props['show_cta_on_mobile'];
		$show_image_video_mobile         = $this->props['show_image_video_mobile'];
		$background_position             = $this->props['background_position'];
		$background_size                 = $this->props['background_size'];
		$posts_number                    = $this->props['posts_number'];
		$include_categories              = $this->props['include_categories'];
		$show_more_button                = $this->props['show_more_button'];
		$more_text                       = $this->props['more_text'];
		$content_source                  = $this->props['content_source'];
		$background_color                = $this->props['background_color'];
		$show_image                      = $this->props['show_image'];
		$image_placement                 = $this->props['image_placement'];
		$background_image                = $this->props['background_image'];
		$background_layout               = $this->props['background_layout'];
		$background_layout_hover         = et_pb_hover_options()->get_value( 'background_layout', $this->props, 'light' );
		$background_layout_hover_enabled = et_pb_hover_options()->is_enabled( 'background_layout', $this->props );
		$background_repeat               = $this->props['background_repeat'];
		$background_blend                = $this->props['background_blend'];
		$use_bg_overlay                  = $this->props['use_bg_overlay'];
		$bg_overlay_color                = $this->props['bg_overlay_color'];
		$use_text_overlay                = $this->props['use_text_overlay'];
		$text_overlay_color              = $this->props['text_overlay_color'];
		$orderby                         = $this->props['orderby'];
		$show_meta                       = $this->props['show_meta'];
		$button_custom                   = $this->props['custom_button'];
		$button_rel                      = $this->props['button_rel'];
		$custom_icon                     = $this->props['button_icon'];
		$use_manual_excerpt              = $this->props['use_manual_excerpt'];
		$excerpt_length                  = $this->props['excerpt_length'];
		$text_border_radius              = $this->props['text_border_radius'];
		$dot_nav_custom_color            = $this->props['dot_nav_custom_color'];
		$arrows_custom_color             = $this->props['arrows_custom_color'];
		$header_level                    = $this->props['header_level'];

		$post_index = 0;

		$hide_on_mobile_class = self::HIDE_ON_MOBILE;

		$is_text_overlay_applied = 'on' === $use_text_overlay;

		// Applying backround-related style to slide item since advanced_option only targets module wrapper
		if ( 'on' === $this->props['show_image'] && 'background' === $this->props['image_placement'] && 'off' === $parallax ) {
			if ('' !== $background_color) {
				ET_Builder_Module::set_style( $render_slug, array(
					'selector'    => '%%order_class%% .et_pb_slide:not(.et_pb_slide_with_no_image)',
					'declaration' => sprintf(
						'background-color: %1$s;',
						esc_html( $background_color )
					),
				) );
			}

			if ( '' !== $background_size && 'default' !== $background_size ) {
				ET_Builder_Module::set_style( $render_slug, array(
					'selector'    => '%%order_class%% .et_pb_slide',
					'declaration' => sprintf(
						'-moz-background-size: %1$s;
						-webkit-background-size: %1$s;
						background-size: %1$s;',
						esc_html( $background_size )
					),
				) );

				if ( 'initial' === $background_size ) {
					ET_Builder_Module::set_style( $render_slug, array(
						'selector'    => 'body.ie %%order_class%% .et_pb_slide',
						'declaration' => '-moz-background-size: auto; -webkit-background-size: auto; background-size: auto;',
					) );
				}
			}

			if ( '' !== $background_position && 'default' !== $background_position ) {
				$processed_position = str_replace( '_', ' ', $background_position );

				ET_Builder_Module::set_style( $render_slug, array(
					'selector'    => '%%order_class%% .et_pb_slide',
					'declaration' => sprintf(
						'background-position: %1$s;',
						esc_html( $processed_position )
					),
				) );
			}

			if ( '' !== $background_repeat ) {
				ET_Builder_Module::set_style( $render_slug, array(
					'selector'    => '%%order_class%% .et_pb_slide',
					'declaration' => sprintf(
						'background-repeat: %1$s;',
						esc_html( $background_repeat )
					),
				) );
			}

			if ( '' !== $background_blend ) {
				ET_Builder_Module::set_style( $render_slug, array(
					'selector'    => '%%order_class%% .et_pb_slide',
					'declaration' => sprintf(
						'background-blend-mode: %1$s;',
						esc_html( $background_blend )
					),
				) );
			}
		}

		if ( 'on' === $use_bg_overlay && '' !== $bg_overlay_color ) {
			ET_Builder_Element::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .et_pb_slide .et_pb_slide_overlay_container',
				'declaration' => sprintf(
					'background-color: %1$s;',
					esc_html( $bg_overlay_color )
				),
			) );
		}

		if ( $is_text_overlay_applied && '' !== $text_overlay_color ) {
			ET_Builder_Element::set_style( $render_slug, array(
				'selector'    => '%%order_class%% .et_pb_slide .et_pb_text_overlay_wrapper',
				'declaration' => sprintf(
					'background-color: %1$s;',
					esc_html( $text_overlay_color )
				),
			) );
		}

		if ( '' !== $text_border_radius ) {
			$border_radius_value = et_builder_process_range_value( $text_border_radius );
			ET_Builder_Element::set_style( $render_slug, array(
				'selector'    => '%%order_class%%.et_pb_slider_with_text_overlay .et_pb_text_overlay_wrapper',
				'declaration' => sprintf(
					'border-radius: %1$s;',
					esc_html( $border_radius_value )
				),
			) );
		}

		$fullwidth = 'et_pb_fullwidth_post_slider' === $render_slug ? 'on' : 'off';

		$video_background = $this->video_background();
		$parallax_image_background = $this->get_parallax_image_background();

		$data_dot_nav_custom_color = '' !== $dot_nav_custom_color
			? sprintf( ' data-dots_color="%1$s"', esc_attr( $dot_nav_custom_color ) )
			: '';

		$data_arrows_custom_color = '' !== $arrows_custom_color
			? sprintf( ' data-arrows_color="%1$s"', esc_attr( $arrows_custom_color ) )
			: '';

		ob_start();

		// Re-used self::get_blog_posts() for builder output
		$query = static::get_blog_posts(array(
			'posts_number'       => $posts_number,
			'include_categories' => $include_categories,
			'orderby'            => $orderby,
			'content_source'     => $content_source,
			'use_manual_excerpt' => $use_manual_excerpt,
			'excerpt_length'     => $excerpt_length,
		), array(), array(), false );

		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();

				$slide_class = 'off' !== $show_image && in_array( $image_placement, array( 'left', 'right' ) ) && has_post_thumbnail() ? ' et_pb_slide_with_image' : '';
				$slide_class .= 'off' !== $show_image && ! has_post_thumbnail() ? ' et_pb_slide_with_no_image' : '';
				$slide_class .= " et_pb_bg_layout_{$background_layout}";
			?>
			<div class="et_pb_slide et_pb_media_alignment_center<?php echo esc_attr( $slide_class ); ?>" <?php if ( 'on' !== $parallax && 'off' !== $show_image && 'background' === $image_placement ) { printf( 'style="background-image:url(%1$s)"', esc_url( wp_get_attachment_url( get_post_thumbnail_id() ) ) );  } ?><?php echo et_core_esc_previously( $data_dot_nav_custom_color ); echo et_core_esc_previously( $data_arrows_custom_color ); ?>>
				<?php if ( 'on' === $parallax && 'off' !== $show_image && 'background' === $image_placement ) { ?>
					<div class="et_parallax_bg<?php if ( 'off' === $parallax_method ) { echo ' et_pb_parallax_css'; } ?>" style="background-image: url(<?php echo esc_url( wp_get_attachment_url( get_post_thumbnail_id() ) ); ?>);"></div>
				<?php } ?>
				<?php if ( 'on' === $use_bg_overlay ) { ?>
					<div class="et_pb_slide_overlay_container"></div>
				<?php } ?>
				<div class="et_pb_container clearfix">
					<div class="et_pb_slider_container_inner">
						<?php if ( 'off' !== $show_image && has_post_thumbnail() && ! in_array( $image_placement, array( 'background', 'bottom' ) ) ) { ?>
							<div class="et_pb_slide_image">
								<?php the_post_thumbnail(); ?>
							</div>
						<?php } ?>
						<div class="et_pb_slide_description">
							<?php if ( $is_text_overlay_applied ) : ?><div class="et_pb_text_overlay_wrapper"><?php endif; ?>
								<<?php echo et_pb_process_header_level( $header_level, 'h2' ) ?> class="et_pb_slide_title"><a href="<?php esc_url( the_permalink() ); ?>"><?php the_title(); ?></a></<?php echo et_pb_process_header_level( $header_level, 'h2' ) ?>>
								<div class="et_pb_slide_content <?php if ( 'on' !== $show_content_on_mobile ) { echo esc_attr( $hide_on_mobile_class ); } ?>">
									<?php
									if ( 'off' !== $show_meta ) {
										printf(
											'<p class="post-meta">%1$s | %2$s | %3$s | %4$s</p>',
											et_get_safe_localization( sprintf( __( 'by %s', 'et_builder' ), '<span class="author vcard">' .  et_pb_get_the_author_posts_link() . '</span>' ) ),
											et_get_safe_localization( sprintf( __( '%s', 'et_builder' ), '<span class="published">' . esc_html( get_the_date() ) . '</span>' ) ),
											get_the_category_list(', '),
											esc_html( sprintf( _nx( '%s Comment', '%s Comments', get_comments_number(), 'number of comments', 'et_builder' ), number_format_i18n( get_comments_number() ) ) )
										);
									}
									?>
									<?php
										echo et_core_intentionally_unescaped( $query->posts[ $post_index ]->post_content, 'html' );
									?>
								</div>
							<?php if ( $is_text_overlay_applied ) : ?></div><?php endif; ?>
							<?php
								// render button
								$button_classname = array( 'et_pb_more_button' );

								if ( 'on' !== $show_cta_on_mobile ) {
									$button_classname[] = $hide_on_mobile_class;
								}

								echo et_core_esc_previously( $this->render_button( array(
									'button_classname' => $button_classname,
									'button_custom'    => $button_custom,
									'button_rel'       => $button_rel,
									'button_text'      => $more_text,
									'button_url'       => get_permalink(),
									'custom_icon'      => $custom_icon,
									'display_button'   => ( 'off' !== $show_more_button && '' !== $more_text ),
								) ) );
							?>
						</div> <!-- .et_pb_slide_description -->
						<?php if ( 'off' !== $show_image && has_post_thumbnail() && 'bottom' === $image_placement ) { ?>
							<div class="et_pb_slide_image">
								<?php the_post_thumbnail(); ?>
							</div>
						<?php } ?>
					</div>
				</div> <!-- .et_pb_container -->
			</div> <!-- .et_pb_slide -->
		<?php
			$post_index++;

			} // end while
		} // end if

		wp_reset_query();

		if ( ! $content = ob_get_clean() ) {
			$content  = '<div class="et_pb_row et_pb_no_results">';
			$content .= self::get_no_results_template();
			$content .= '</div>';
		}

		$data_background_layout       = '';
		$data_background_layout_hover = '';
		if ( $background_layout_hover_enabled ) {
			$data_background_layout = sprintf(
				' data-background-layout="%1$s"',
				esc_attr( $background_layout )
			);
			$data_background_layout_hover = sprintf(
				' data-background-layout-hover="%1$s"',
				esc_attr( $background_layout_hover )
			);
		}

		// Module classnames
		$this->add_classname( array(
			'et_pb_slider',
			'et_pb_post_slider',
			"et_pb_post_slider_image_{$image_placement}",
		) );

		if ( 'off' === $fullwidth ) {
			$this->add_classname( 'et_pb_slider_fullwidth_off' );
		}

		if ( 'off' === $show_arrows ) {
			$this->add_classname( 'et_pb_slider_no_arrows' );
		}

		if ( 'off' === $show_pagination ) {
			$this->add_classname( 'et_pb_slider_no_pagination' );
		}

		if ( 'on' === $parallax ) {
			$this->add_classname( 'et_pb_slider_parallax' );
		}

		if ( 'on' === $auto ) {
			$this->add_classname( array(
				'et_slider_auto',
				"et_slider_speed_{$auto_speed}",
			) );
		}

		if ( 'on' === $auto_ignore_hover ) {
			$this->add_classname( 'et_slider_auto_ignore_hover' );
		}

		if ( 'on' === $show_image_video_mobile ) {
			$this->add_classname( 'et_pb_slider_show_image' );
		}

		if ( 'on' === $use_bg_overlay ) {
			$this->add_classname( 'et_pb_slider_with_overlay' );
		}

		if ( 'on' === $use_text_overlay ) {
			$this->add_classname( 'et_pb_slider_with_text_overlay' );
		}

		// Removed automatically added classnames
		$this->remove_classname( 'et_pb_fullwidth_post_slider' );

		$output = sprintf(
			'<div%3$s class="%1$s"%7$s%8$s>
				%5$s
				%4$s
				<div class="et_pb_slides">
					%2$s
				</div> <!-- .et_pb_slides -->
				%6$s
			</div> <!-- .et_pb_slider -->
			',
			$this->module_classname( $render_slug ),
			$content,
			$this->module_id(),
			$video_background,
			$parallax_image_background, // #5
			'',
			et_core_esc_previously( $data_background_layout ),
			et_core_esc_previously( $data_background_layout_hover )
		);

		// Restore $wp_filter
		$wp_filter = $wp_filter_cache; // phpcs:ignore WordPress.Variables.GlobalVariables.OverrideProhibited
		unset($wp_filter_cache);

		return $output;
	}
}