<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage rovagnati-us
 * @since pro-terra-sancta-fixed
 */

?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

  <div class="container page-clean-template">
    <?php
    the_content();
    ?>
  </div>

</article>
