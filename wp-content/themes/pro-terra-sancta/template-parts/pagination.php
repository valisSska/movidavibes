<?php

$prev_text = sprintf(
  '%s <span class="nav-prev-text">%s</span>',
  '<span aria-hidden="true">&larr;</span>',
  __('Precedenti', 'pro-terra-sancta')
);
$next_text = sprintf(
  '<span class="nav-next-text">%s</span> %s',
  __('Successivi', 'pro-terra-sancta'),
  '<span aria-hidden="true">&rarr;</span>'
);

$posts_pagination = get_the_posts_pagination(
  [
      'screen_reader_text' => ' ',
      'mid_size'           => 20,
      'prev_text'          => $prev_text,
      'next_text'          => $next_text,
  ]
);

if (strpos($posts_pagination, 'prev page-numbers') === false) {
  $posts_pagination = str_replace('<div class="nav-links">', '<div class="nav-links"><span class="prev page-numbers placeholder" aria-hidden="true">' . $prev_text . '</span>', $posts_pagination); // phpcs:ignore
}

if (strpos($posts_pagination, 'next page-numbers') === false) {
  $posts_pagination = str_replace('</div>', '<span class="next page-numbers placeholder" aria-hidden="true">' . $next_text . '</span></div>', $posts_pagination); // phpcs:ignore
}

if ($posts_pagination) { ?>
    <div class="pagination-wrapper section-inner">

        <hr class="styled-separator pagination-separator is-style-wide" aria-hidden="true" />

  <?php echo $posts_pagination; // phpcs:ignore ?>

    </div>

  <?php
}
