import React, { useState, useEffect } from 'react';
import './components.css';


const  MoviLogin = () => {

  const [userNicename, setUserNicename] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [textError, setTextError] = useState('');

  const handleLogin = async () => {
    setTextError('');
    const loginRequest = async () => {
      try {
        const userData = {
          username: userNicename,
          password:userPassword
          // Altri dati che desideri inviare
        };
        setLoading(true);
  
        const jsonData = JSON.stringify(userData);
        console.log('Dati JSON inviati:', jsonData);
  
        const responseLoggin = await fetch(`/wp-json/movidavibes-api/v1/log-in`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            credentials: 'include'
          },
          body: jsonData,
        });
  
        const movieCookieLogged = await responseLoggin.json(); // Leggi la risposta come json


      const moviToken=movieCookieLogged.token_user;
      const idUser=movieCookieLogged.id_user;
      localStorage.setItem('movitoken', moviToken);
      localStorage.setItem('id_user', idUser);
      console.log('token request log in token //// ' + moviToken);
  
  
  
  
        console.log('Risposta dal server://///////////////////  log in ', movieCookieLogged); 

        location.reload();
  
      } catch (error) {
        setLoading(false);
        console.error('Errore nell\'invio dei dati a PHP:', error);
        return
      }
    };
    await loginRequest();
  };



  return (
    <div className="flex-center">
    <div className="container-login-forms">
      <div className="header-login-forms">
      <p className="text-welcome-login-forms">Accedi</p>
      </div>
    <p className="text-welcome-login-forms">Benvenuto su Movidavibes</p>
    <div className="container-inputs-login-forms">
    <input className="input-user-login-forms" placeholder='User' value={userNicename} onChange={(e) => setUserNicename(e.target.value)}/>
    <input className="input-password-login-forms" type='password' placeholder='Password'value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
    </div>
    <p className="text-privacy-login-forms">Informativa sulla Privacy</p>
    <div className="container-button-login-forms">
    <button className="button-login-forms" onClick={handleLogin}>Accedi</button>
    </div>
   </div> 
   </div>
  );
};

export default MoviLogin;
