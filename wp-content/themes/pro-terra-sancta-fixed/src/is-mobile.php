<?php

function is_mobile()
{
  if (isset($_SERVER['HTTP_CLOUDFRONT_IS_MOBILE_VIEWER']) && $_SERVER['HTTP_CLOUDFRONT_IS_MOBILE_VIEWER'] === 'true') {
    return true;
  }

  return false;
}
