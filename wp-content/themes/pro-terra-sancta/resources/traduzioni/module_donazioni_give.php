<?php
function get_module_donazioni_give(){
    $toRet = array();

    $toRet['title'] = new Traduzione();

    $toRet['title']->setIt("DONA ONLINE");
    $toRet['title']->setEn("DONATE ONLINE");
    $toRet['title']->setEs("DONAR EN LINEA");
    $toRet['title']->setFr("FAITES UN DON EN LIGNE");
    $toRet['title']->setDe("ONLINE SPENDEN");

    return $toRet;
}