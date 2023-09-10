<?php
function get_newsletter_mailup(){
    $toRet = array();

    $toRet['title'] = new Traduzione();
    $toRet['subtitle'] = new Traduzione();
    $toRet['privacy'] = new Traduzione();
    $toRet['btn_text'] = new Traduzione();
    $toRet['email'] = new Traduzione();
    $toRet['name'] = new Traduzione();
    $toRet['surname'] = new Traduzione();
    $toRet['idlist'] = new Traduzione();

    $toRet['title']->setIt("ISCRIVITI ALLA NEWSLETTER");
    $toRet['title']->setEn("SUBSCRIBE TO OUR NEWSLETTER");
    $toRet['title']->setEs("SUSCRIBIRSE AL BOLETÍN INFORMATIVO");
    $toRet['title']->setFr("S'ABONNER À LA LETTRE D'INFORMATION");
    $toRet['title']->setDe("ABONNIEREN SIE UNSEREN NEWSLETTER");

    $toRet['subtitle']->setIt("Ricevi i nostri aggiornamenti dalla Terra Santa.");
    $toRet['subtitle']->setEn("Receive our updates from the Holy Land.");
    $toRet['subtitle']->setEs("Recibe nuestras actualizaciones de la Tierra Santa.");
    $toRet['subtitle']->setFr("Recevez nos mises à jour de la Terre Sainte.");
    $toRet['subtitle']->setDe("Erhalten Sie unsere Updates aus dem Heiligen Land.");

    $toRet['privacy']->setIt('Accetto <a class="popup-modal" href="https://www.proterrasancta.org/it/privacy-policy/?vwp=1">l\'informativa sulla privacy</a>');
    $toRet['privacy']->setEn('I Agree to the <a class="popup-modal" href="https://www.proterrasancta.org/en/privacy-policy_en/?vwp=1">privacy policy</a>');
    $toRet['privacy']->setEs('Acepto la <a class="popup-modal" href="https://www.proterrasancta.org/en/privacy-policy_en/?vwp=1">Política de privacidad</a>');
    $toRet['privacy']->setFr('J’accepte la <a class="popup-modal" href="https://www.proterrasancta.org/en/privacy-policy_en/?vwp=1">politique de confidentialité</a>');
    $toRet['privacy']->setDe('Ich akzeptiere die <a class="popup-modal" href="https://www.proterrasancta.org/en/privacy-policy_en/?vwp=1">Datenschutzerklärung</a>');

    $toRet['btn_text']->setIt("Iscriviti alla newsletter");
    $toRet['btn_text']->setEn("Subscribe to our newsletter");
    $toRet['btn_text']->setEs("Suscribirse al boletín informativo");
    $toRet['btn_text']->setFr("S'abonner à la lettre d'information");
    $toRet['btn_text']->setDe("Abonnieren sie unseren newsletter");

    $toRet['email']->setIt("Email");
    $toRet['email']->setEn("Email");
    $toRet['email']->setEs("Email");
    $toRet['email']->setFr("E-mail");
    $toRet['email']->setDe("E-Mail");

    $toRet['name']->setIt("Nome");
    $toRet['name']->setEn("First Name");
    $toRet['name']->setEs("Nombre");
    $toRet['name']->setFr("Prénom");
    $toRet['name']->setDe("Vorname");

    $toRet['surname']->setIt("Cognome");
    $toRet['surname']->setEn("Last Name");
    $toRet['surname']->setEs("Apellidos");
    $toRet['surname']->setFr("Nom");
    $toRet['surname']->setDe("Zuname");

    $toRet['idlist']->setIt("22");
    $toRet['idlist']->setEn("21");
    $toRet['idlist']->setEs("23");
    $toRet['idlist']->setFr("24");
    $toRet['idlist']->setDe("20");

    return $toRet;
}