<?php

// to include in functions.php
function the_breadcrumb_category()
{
  $sep = '&nbsp;<strong>></strong>&nbsp;';

  $this_term = get_queried_object();
  $term_list = get_category_parents($this_term->term_id, true, $sep);

  echo '<div class="breadcrumbs">';
  echo '<div class="container">';
  echo '<div>';
  echo '<a href="/" class="breadcrumb-first">Home</a>';
  echo $sep . $term_list;
  echo '</div>';
  echo '</div>';
  echo '</div>';
}
