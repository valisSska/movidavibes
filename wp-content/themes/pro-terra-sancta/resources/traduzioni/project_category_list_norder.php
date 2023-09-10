<?php
function get_project_category_list_norder(){
    $toRet = array();
    $toRet['dona_progetto'] = new Traduzione();

    $toRet['dona_progetto']->setIt("Dona online");
    $toRet['dona_progetto']->setEn("Online donation");
    $toRet['dona_progetto']->setEs("Donación en línea");
    $toRet['dona_progetto']->setFr("Faire un don");
    $toRet['dona_progetto']->setDe("Spenden");

    return $toRet;
}