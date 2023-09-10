<?php
function get_give_module(){
    $toRet = array();
    $toRet['phone'] = new Traduzione();

    $toRet['phone']->setIt("Telefono");
    $toRet['phone']->setEn("Phone");
    $toRet['phone']->setEs("Teléfono");
    $toRet['phone']->setFr("Téléphone");
    $toRet['phone']->setDe("Telefon");

    return $toRet;
}