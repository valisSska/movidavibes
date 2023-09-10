<?php
function get_header_translation(){
		$toRet = array();
		$toRet['dona_btn'] = new Traduzione();
		$toRet['facebook'] = new Traduzione();

		$toRet['dona_btn']->setIt("DONA");
		$toRet['dona_btn']->setEn("DONATE");
		$toRet['dona_btn']->setEs("DONA");
		$toRet['dona_btn']->setFr("FAIRE UN DON");
		$toRet['dona_btn']->setDe("SPENDEN");

    $toRet['facebook']->setIt("https://www.facebook.com/pages/Ats-Pro-Terra-Sancta/260446743996552");
    $toRet['facebook']->setEn("https://www.facebook.com/proterrasanctauk");
    $toRet['facebook']->setEs("https://www.facebook.com/pages/Ats-Pro-Terra-Sancta/260446743996552");
    $toRet['facebook']->setFr("https://www.facebook.com/pages/Ats-Pro-Terra-Sancta/260446743996552");
    $toRet['facebook']->setDe("https://www.facebook.com/proterrasanctauk");

		return $toRet;
}
