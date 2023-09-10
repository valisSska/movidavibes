<?php

class MailUpException extends Exception
{
        
    private $statusCode;
    
    function __construct($statusCode, $message)
    {
        parent::__construct($message);
        $this->statusCode = $statusCode;
    }
    
    public function getStatusCode()
    {
        return $this->statusCode;
    }
}