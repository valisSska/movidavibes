<form role="search" method="get" class="search-form my-5 d-flex justify-content-center" action="<?php echo esc_url(home_url('/')); ?>">
  <div class="form-outline" style="max-width: 250px">
    <input type="search" id="search-input" class="form-control" value="<?php echo get_search_query(); // phpcs:ignore ?>" name="s" />
    <label class="form-label" for="search-input"><?php _e('search', 'pro-terra-sancta-fixed'); ?></label>
  </div>
  <div class="d-flex">
    <input type="submit" class="btn btn-primary m-auto mx-3" value="<?php _e('send', 'pro-terra-sancta-fixed'); ?>">
  </div>
</form>
