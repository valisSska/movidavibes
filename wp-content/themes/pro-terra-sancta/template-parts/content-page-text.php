<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage pro-terra-sancta
 * @since Rovagnati US
 */

?>

<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">

  <div class="container page-text-template">
    <?php
    the_title('<h1>', '</h1>');
    ?>

    <?php
    the_content();
    ?>
  </div>

</article>
