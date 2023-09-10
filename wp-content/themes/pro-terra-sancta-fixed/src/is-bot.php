<?php

function is_bot()
{
  return isset($_SERVER['HTTP_IS_BOT_REQUEST']);
}
