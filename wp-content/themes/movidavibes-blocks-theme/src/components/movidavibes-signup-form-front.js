import React, { useState, useEffect } from 'react';
import './components.css';


const  MoviSignUp = () => {
  return (
    <div className="flex-center">
    <div className="container-login-forms">
      <div className="header-login-forms">
      <p className="text-welcome-login-forms">Registrati</p>
      </div>
    <p className="text-welcome-login-forms">Benvenuto su Movidavibes</p>
    <div className="container-inputs-login-forms">
      <div className="container-inputs-signUp-row-forms">
        <input className="input-name-Signup-forms" placeholder='Nome'/>
        <input className="input-surname-Signup-forms" placeholder='Cognome'/>
      </div>
    <input className="input-user-SignUp-forms" placeholder='User'/>
      <input className="input-user-SignUp-forms" placeholder='Email' type='email'/>
    <input className="input-password-SignUp-forms" type='password' placeholder='Password'/>
    <input className="input-password-SignUp-forms" type='password' placeholder='Conferma Password'/>
    </div>
    <p className="text-privacy-login-forms">Informativa sulla Privacy</p>
    <div className="container-button-login-forms">
    <button className="button-login-forms">Registrati</button>
    </div>
   </div> 
   </div>
  );
};

export default MoviSignUp;
