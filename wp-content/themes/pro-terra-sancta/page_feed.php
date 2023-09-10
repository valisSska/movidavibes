<?php
/*
Template Name: Pagina Feed
*/

function feed_rss_date( $timestamp = null ) {
  $timestamp = ($timestamp==null) ? time() : $timestamp;
  echo date(DATE_RSS, $timestamp);
}


function get_the_excerpt_content($post) {
    $excerpt = strip_tags($post);
	$excerpt= preg_replace("~\[(.+?)\]~", "", $excerpt);
    $output = getWords($excerpt, 30, 0, true);
  return $output." [...]";
}

function getWords($str, $num=NULL, $offset=0, $asStr=true)
{
 
	$words = explode(' ', $str);
	if (!empty($num) && $num < count($words)) {
		$words = array_slice($words, $offset, $num);
	}
 
        if ($asStr == true) {
		$string = '';
		foreach ($words as $w) $string .= $w . ' ';
		$words = substr($string, 0, -1);
	}
 
	return $words;
}

function viewexcerpt2($text=null,$link=null)
{
global $language;
$text=str_replace(chr(10),"",trim($text));		
$text=str_replace("[...]","",trim($text));
$text=preg_replace(array('/\s{2,}/', '/[\t\n]/'), ' ', $text);
return trim($text).' <a title="'.$language['strcontinue'].'.." href="'.$link.'">[...]</a>';
}

header('Content-Type: application/xml');
$numposts = 15;
$apg = explode("/", $_SERVER["REQUEST_URI"]);
if (count($apg)>3) :
	$posts=query_posts(array(
		'showposts'=>$numposts,
		'post_type'=>strtolower($apg[1]).'-post',
		'orderby' => 'date',
		'order' => 'DESC',
	));
	include get_stylesheet_directory() . '/lang/label-'.strtolower($apg[1]).'.php';	
	global $language;
echo '<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	>

'; ?>
<channel>
<title><?php echo $language['ATSnobr']; ?></title>
<atom:link href="https://<?php echo $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"]; ?>" rel="self" type="application/rss+xml" />
<link><?php echo get_bloginfo('url'); ?></link>
<description><?php echo $language['ATSdesc']; ?></description>
<lastBuildDate><?php feed_rss_date( strtotime($posts[0]->post_date_gmt) ); ?></lastBuildDate>
<language><?php echo $apg[1]; ?></language>
<sy:updatePeriod>hourly</sy:updatePeriod>
<sy:updateFrequency>1</sy:updateFrequency>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<item>
<title><?php echo get_the_title(); ?></title>
<link><?php echo get_permalink(); ?></link>
<?php 
$exc =$post->post_excerpt;
if (!$exc) $exc=viewexcerpt2(get_the_excerpt_content($post-> post_content),get_permalink());			
$image="";
$thumb = get_the_post_thumbnail($post->ID, 'medium');
$pattern= "/(?<=src=['|\"])[^'|\"]*?(?=['|\"])/i";
preg_match($pattern, $thumb, $thePath);
$image_src = $thePath[0];
if ($image_src) $image = '<a href="'.get_permalink().'"><img border="0" align="right" src="' . $image_src . '" /></a>'; 
?>
<description>
<?php echo '<![CDATA['.$image.$exc.' '.']]>';  ?>
</description> 
<pubDate><?php feed_rss_date( strtotime($post->post_date_gmt) ); ?></pubDate>
<guid><?php echo get_permalink(); ?></guid>
</item>
<?php  endwhile; endif; ?>

</channel>
</rss>
<?php endif; ?>