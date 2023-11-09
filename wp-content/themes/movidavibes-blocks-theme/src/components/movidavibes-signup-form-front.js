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
    <input className="input-user-login-forms" placeholder='User'></input>
    <input className="input-password-login-forms" type='password' placeholder='Password'></input>
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
