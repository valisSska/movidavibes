<?php
function get_project_category_list(){
    $toRet = array();

    $toRet['conservazione-e-sviluppo'] = new Traduzione();
    $toRet['educazione-e-assistenza'] = new Traduzione();
    $toRet['emergenza'] = new Traduzione();

    $toRet['conservazione-e-sviluppo']->setIt("Conservazione e Sviluppo");
    $toRet['conservazione-e-sviluppo']->setEn("Preservation and development");
    $toRet['conservazione-e-sviluppo']->setEs("Conservación y desarrollo");
    $toRet['conservazione-e-sviluppo']->setFr("Conservation et développement");
    $toRet['conservazione-e-sviluppo']->setDe("Erhaltung und Entwicklung");

    $toRet['educazione-e-assistenza']->setIt("Educazione e Assistenza");
    $toRet['educazione-e-assistenza']->setEn("Education and Assistance");
    $toRet['educazione-e-assistenza']->setEs("Educación y asistencia");
    $toRet['educazione-e-assistenza']->setFr("Éducation et assistance");
    $toRet['educazione-e-assistenza']->setDe("Bildung und Unterstützung");

    $toRet['emergenza']->setIt("Emergenza");
    $toRet['emergenza']->setEn("Emergencies in the middle east");
    $toRet['emergenza']->setEs("Emergencia");
    $toRet['emergenza']->setFr("Urgence");
    $toRet['emergenza']->setDe("Notfall");

    return $toRet;
}
