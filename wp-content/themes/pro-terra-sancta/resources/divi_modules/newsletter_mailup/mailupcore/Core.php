<?php
require_once __DIR__.'/MailUpClient.php';

function MailUp_objectToArray( $object ){
	if( !is_object( $object ) && !is_array( $object ) ){
		return $object;
	}
	if( is_object( $object ) ){
		$object = get_object_vars( $object );
	}
	return array_map( 'MailUp_objectToArray', $object );
}

class MailUpCore extends MailUpClient{
    protected $auth;
    public function __construct(MailUpCoreAuth $auth){
        $this->auth = $auth;
        parent::__construct($auth->getBasicAuth(), MailUpApiType::getArray());
    }
	
    public function makeRequest($method, $apitype ,$ep, $body = "", $content_type = "JSON", $refresh = true){
        $this->retrieveTokenByPassword($this->auth->user, $this->auth->pass);
        if($apitype == MailUpApiType::console){
            $url = $apitype. "/Console" . $ep;
        }
        else {
        $url = $apitype. '/' . $ep;
        }
        if(!empty($body))
            $body = json_encode($body);
        
        $r = parent::makeRequest($method, $content_type, $url, $body, $refresh);

        if($content_type == "JSON"){
            return json_decode($r);
        }
        return $r;
    }

    public function GetAllLists(){
        $res = $this->makeRequest(
            "GET",
            MailUpApiType::console,
            "/List"
        );
        return $res->Items;
    }
    public function GetLists($idList){
        $res = $this->makeRequest(
            "GET",
            MailUpApiType::console,
            "/List/$idList"
        );
        return $res;
    }
    public function GetGroups($idList = 1){
        $res = $this->makeRequest(
            "GET",
            MailUpApiType::console,
            "/List/$idList/Groups"
        );
        return $res;
    }
    public function AddToMailList($idList, $email){
        $res = $this->makeRequest(
            "POST",
            MailUpApiType::console,
            "/List/$idList/Recipient",
            array(
                "Email" => $email
            )
        );
        return $res;
    }
	

    public function AddToMailGroup($idGroup, $email, $name="", $surname=""){
		$arr_contact=array();
		$arr_contact['Email']=$email;
		
		if ($email) :
			$id=MailUp_objectToArray($this->GetRecipientByEmail($email));
			$db_name=$id['Items'][0]['Fields'][0]['Value'];
			$db_surname=$id['Items'][0]['Fields'][1]['Value'];
		endif;
		
		if (($name && !$db_name) || ($surname && !$db_surname)) :
			$arr_contact['Fields']=array();
			
			if ($name && !$db_name) :
				$arr_contact['Fields'][]=array(
					"Description" => "Nome",
					"Id" => 1,
					"Value" => $name
				);
			endif;

			if ($surname && !$db_surname) :
				$arr_contact['Fields'][]=array(
					"Description" => "Cognome",
					"Id" => 2,
					"Value" => $surname
				);
			endif;
			
		endif;
        
        $res = $this->makeRequest(
            "POST",
            MailUpApiType::console,
            "/Group/$idGroup/Recipient",
            $arr_contact
        );
        return $res;
    }
    public function GetRecipientById($id){
        $res = $this->makeRequest(
            "GET",
            MailUpApiType::console,
            "/Recipients/$id"
        );
        return $res;
    }
    public function GetRecipientByEmail($email){
        $res = $this->makeRequest(
            "GET",
            MailUpApiType::console,
            "/Recipients?email='$email'"
        );
        return $res;
    }
    public function GetRecipientStatusEmailById($id){
        $res = $this->makeRequest(
            "GET",
            MailUpApiType::console,
            "/Recipients/$id/EmailOptins"
        );
        return $res;
    }
}
abstract class MailUpApiType{
    const logon         = "https://services.mailup.com/Authorization/OAuth/LogOn";
    const authorization = "https://services.mailup.com/Authorization/OAuth/Authorization";
    const token         = "https://services.mailup.com/Authorization/OAuth/Token";
    const console       = "https://services.mailup.com/API/v1.1/Rest/ConsoleService.svc";
    const mail_stats    = "https://services.mailup.com/API/v1.1/Rest/MailStatisticsService.svc";
    
    public static function getArray(){
        $c = new ReflectionClass(__CLASS__);
        return $c->getConstants();
    }
}
class MailUpCoreAuth{
    private $client_id;
    private $secret_key;
    private $callback_url;
    private $user;
    private $pass;

    public function __construct($user,$pass,$client_id, $secret_key, $callback_url){
        $this->user = $user;
        $this->pass = $pass;
        $this->client_id = $client_id;
        $this->secret_key = $secret_key;
        $this->callback_url = $callback_url;
    }

    public function __get($name){
        if (property_exists($this, $name)) {
            return $this->$name;
        }
    }
    public function getBasicAuth(){
        return array(
            'client_id' => $this->client_id,
            'secret_key' => $this->secret_key
        );
    }
}