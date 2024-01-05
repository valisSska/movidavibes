import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import clearCookiesMoviJson from './custom-functions';
import requestLogged from './requests/request-is-logged';
import controlTokenRequest from './requests/control-token';


import './styles/main.scss';
import Heade from './components/heade';
import MoviLogin from './components/movidavibes-login-form-front';
import MoviSignUp from './components/movidavibes-signup-form-front';




const clearLocalStorage = () => {
  localStorage.removeItem('movitoken');
  localStorage.removeItem('id_user');
  localStorage.removeItem('timestamp_created'); // Rimuovi il timestamp quando si elimina il local storage
  console.log('LocalStorage eliminato.');
};

const startTimer = () => {
  // Controlla se c'è un timestamp salvato in localStorage
  const lastClearTime = localStorage.getItem('timestamp_created');
  const clearLocalStorageTimer = 1 * 60 * 60 * 10000;

  // Calcola il tempo trascorso dall'ultimo avvio del timer
  if (lastClearTime) {
    const clearTime = new Date().getTime();
    const elapsedTime = clearTime - parseInt(lastClearTime);
    console.log('tempo trascorso ///' + (elapsedTime / 1000));

    if (elapsedTime > clearLocalStorageTimer) {
      clearLocalStorage();
    }
  } else {
    localStorage.setItem('timestamp_created', new Date().getTime());
    console.log('localstorage timestamp assente ');
  }
};



document.addEventListener('DOMContentLoaded', function() {

  startTimer();

  const savedMoviToken = localStorage.getItem('movitoken');
  const savedIdUser = localStorage.getItem('id_user');
  
  if(savedMoviToken !==null && savedIdUser !== null){
     
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        console.log('localstorage presente');
        const tokenControlls = controlTokenRequest();
        tokenControlls.then((tokenControll) => {

          if (tokenControll===true)
        {
          console.log('controllo token con sucesso' + tokenControll);
        }else{
          const moviLoggeds=requestLogged();
          console.log('controllo token non con sucesso si passa alla richiesta cookie ' + moviLoggeds);
          moviLoggeds.then((moviLoggedd) => {
            console.log('controllo token non con sucesso si passa alla richiesta cookie risultato del requestlogged array ' + moviLoggedd);
            if(moviLoggedd===true)
            {
              console.log('controllo token non con sucesso la richiesta cookie risulta true ' + moviLoggedd);
            }
          });
        }
          
        });

    //////////////////////////////////////////////////////////////////////////////////////////////////////
  }else{
    console.log('localstorage assente si passa alla richiesta dei cookie');
    const moviLoggeds=requestLogged();
    console.log('localstorage assente si passa alla richiesta dei cookie ' + moviLoggeds);
          moviLoggeds.then((moviLoggedd) => {
            if(moviLoggedd===true)
            {
            }
            console.log('localstorage assente la richiesta dei cookie risulta' + moviLoggedd);
          });
  }
    //fetchData();


    if (typeof wp !== 'undefined') {

      console.log(localStorage.getItem('id_user')? 'ID LOGGATTOOO /// ' + localStorage.getItem('id_user') : 'id assente');

        const moviHeader = document.querySelector('#movidavibes-header-block');

        if (moviHeader) {
            const formType = moviHeader.getAttribute('data-form-type');
            const menuTags = moviHeader.getAttribute('data-tags-menu');
            console.log('formType:', formType);
            console.log('menuTags:', menuTags);
            ReactDOM.render(<Heade formType={formType} menuTags={JSON.parse(menuTags)} />, moviHeader);
        }

        const moviLogin = document.querySelector('#movidavibes-login-form');

        if (moviLogin) {
            console.log('Rendering MoviLogin...');
            ReactDOM.render(<MoviLogin />, moviLogin);
        }

        const moviSignUp = document.querySelector('#movidavibes-signup-form');

        if (moviSignUp) {
            console.log('Rendering MoviSignUp...');
            ReactDOM.render(<MoviSignUp />, moviSignUp);
        }
    }
});
