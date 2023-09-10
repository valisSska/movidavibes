<?php
function get_custom_project(){
    $toRet = array();
    $toRet['button_text'] = new Traduzione();

    $toRet['button_text']->setIt('Vai al progetto');
    $toRet['button_text']->setEn('Read more');
    $toRet['button_text']->setEs('Mira el proyecto');
    $toRet['button_text']->setFr('Read more');
    $toRet['button_text']->setDe('Mehr efahren');
    return $toRet;
}