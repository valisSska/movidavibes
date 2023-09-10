<?php
/**
 * The default template for displaying content
 *
 * Used for both singular and index.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage pro-terra-sancta-fixed
 * @since pro-terra-sancta-fixed
 */

require_once ABSPATH . 'wp-content/themes/pro-terra-sancta-fixed/src/is-mobile.php';
?>
<?php
$dateA=get_the_date('U');
$todays_date = date("U");
$sixm= 15897615;
$difr=$todays_date-$dateA;
$currentUrl=get_permalink();
$postT=get_post_type();
$partsUrl = explode('/', $currentUrl);
$PageIs=$partsUrl[4];
if( $postT=='campaign'){
if($difr>$sixm){
  if(ICL_LANGUAGE_CODE =="it")
  {
    ?>
    <div class="CMP-TERMINATED"><p class="CMP-TERMINATED-text">CAMPAGNA TERMINATA</p></div>
    <?php
  }else
  {
    ?>
    <div class="CMP-TERMINATED"><p class="CMP-TERMINATED-text">CAMPAIGN TERMINATED</p></div>
    <?php
  }
}
}
?>
<!--  this is single page -->
<article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
  <div class="news-article-background">
    <div class="news-text">
      <?php the_content(); ?>
    </div>
  </div>
</article>
