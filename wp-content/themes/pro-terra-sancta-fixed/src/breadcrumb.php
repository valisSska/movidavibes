<?php

// to include in functions.php
function the_breadcrumb()
{
  $sep = '&nbsp;<strong>></strong>&nbsp;';

  if (!is_front_page()) {
    echo '<div class="breadcrumbs d-none d-md-block">';
    echo '<div class="container">';
    echo '<div class="">';
    echo '<a href="/" class="breadcrumb-first">Home</a>';

    // Check if the current page is a category, an archive or a single page. If so show the category or archive name.
    if (is_category() || is_single()) {
      echo $sep; // phpcs:ignore
      the_category($sep);
    }

    // If the current page is a single post, show its title with the separator
    if (is_single()) {
      echo $sep; // phpcs:ignore
      the_title('<span class="breadcrumb-last">', '</div>');
    }

    // If the current page is a static page, show its title.
    if (is_page()) {
      the_title('<span class="breadcrumb-last">', '</div>');
    }
  } else {
    echo '<div class="breadcrumbs">';
    echo '<div class="container">';
    echo '<div class="row">';
    echo '<a href="/" class="breadcrumb-first breadcrumb-last">Home</a>';
  }//end if

  echo '</div>';
  echo '</div>';
  echo '</div>';
}
