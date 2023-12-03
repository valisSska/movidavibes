import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './components.css';
import MoviAllert from "./Movi-allert";


const  MoviSignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurName] = useState('');
  const [userNicename, setUserNicename] = useState('');
  const [userNicenameError, setUserNicenameError] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPassword2, setUserPassword2] = useState('');
  const [userPasswordControl, setUserPasswordControl] = useState(false);
  const [textError, setTextError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhoneNumberChange = (e) => {


    // Rimuovi tutti i caratteri non numerici
    const inputPhoneNumber = e.target.value.replace(/\D/g, '');

    // Limita la lunghezza massima a 10 caratteri
    const truncatedPhoneNumber = inputPhoneNumber.slice(0, 10);

    setPhoneNumber(truncatedPhoneNumber);
  };

  const controlUserNameExist = async () => {
    try {
      const userData = {
        data: userNicename,
        // Altri dati che desideri inviare
      };
      setLoading(true);
      const jsonData = JSON.stringify(userData);
      console.log('Dati JSON inviati:', jsonData);

      const responseUsers = await fetch(`/wp-json/movidavibes-api/v1/exist-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      const responseUsersText = await responseUsers.text(); // Leggi la risposta come testo




      console.log('Risposta dal server:', responseUsersText);

      if(responseUsersText!=='[]'){
        setLoading(false);
        setUserNicenameError(true);
        setTextError('Questo nome utente è già registrato');
      };



    } catch (error) {
      setLoading(false);
      console.error('Errore nell\'invio dei dati a PHP:', error);
    }
  };
  const controlUserEmailExist = async () => {
    try {
      const userData = {
        data: userEmail,
        // Altri dati che desideri inviare
      };
      setLoading(true);

      const jsonData = JSON.stringify(userData);
      console.log('Dati JSON inviati:', jsonData);

      const responseEmail = await fetch(`/wp-json/movidavibes-api/v1/exist-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      const responseEmailText = await responseEmail.text(); // Leggi la risposta come testo




      console.log('Risposta dal server:', responseEmailText);

      if(responseEmailText!=='[]'){
        setLoading(false);
        setEmailError(true);
        setTextError('Questa email è già registrata');
      };



    } catch (error) {
      setLoading(false);
      console.error('Errore nell\'invio dei dati a PHP:', error);
    }
  };

  const handleRegistration = async () => {
  setTextError('');
  setUserPasswordControl(false);
  setEmailError(false);
  setUserNicenameError(false);
  const regexuserPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userPassword !== userPassword2) {
    setUserPasswordControl(true);
    setTextError('Le due password non coincidono.');
  } else if (userPassword.length < 8) {
    setUserPasswordControl(true);
    setTextError('La password deve essere lunga almeno 8 caratteri.');
  } else if (!regexuserPassword.test(userPassword)) {
    setUserPasswordControl(true);
    setTextError('La password deve contenere lettere minuscole, maiuscole, almeno un numero e almeno un carattere speciale.');
  } else if (!emailRegex.test(userEmail)) {
    setEmailError(true);
    setTextError('Inserisci un indirizzo email valido.');
  }
    ///////////////////// CONTROLL //////////////////////////////
    useEffect(() => {
      const fetchDatacontrol = async () => {
        await controlUserEmailExist();
        await controlUserNameExist();
      };

      fetchDatacontrol();
    }, []);
    /////////////////////////////////////////////////////////////////////////////////////////
};


  return (
    <div className="flex-center">
    <div className="container-login-forms">
      <div className="header-login-forms">
      <p className="text-welcome-login-forms">Registrati</p>
      </div>
    <p className="text-welcome-login-forms">Benvenuto su Movidavibes</p>
    <div className="container-inputs-login-forms">
      <div className="container-inputs-signUp-row-forms">
        <input className="input-name-Signup-forms" placeholder='Nome' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input className="input-surname-Signup-forms" placeholder='Cognome' value={userSurname} onChange={(e) => setUserSurName(e.target.value)}/>
      </div>
      {userNicenameError === true ? (
          <input className={`input-password-SignUp-forms ${userNicenameError ? 'error' : ''}`} style={{ backgroundColor: '#FFF0F5', border: 'solid #e31c5f 1px' }} placeholder='User' value={userNicename} onChange={(e) => setUserNicename(e.target.value)}/>
      ) : (
          <input className="input-user-SignUp-forms" placeholder='User' value={userNicename} onChange={(e) => setUserNicename(e.target.value)}/>
      )}
    {emailError === true ? (
      <input className={`input-password-SignUp-forms ${emailError ? 'error' : ''}`} style={{ backgroundColor: '#FFF0F5', border: 'solid #e31c5f 1px' }} placeholder='Email' type='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
      ) : (
        <input className="input-user-SignUp-forms" placeholder='Email' type='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
      )}
      <input
        type="tel"
        id="phoneNumber"
        className="input-user-SignUp-forms"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        maxLength="10"
        placeholder="Inserisci il numero di telefono"
      />
   {userPasswordControl === true ? (
  <>
    <input
     className={`input-password-SignUp-forms ${userPasswordControl ? 'error' : ''}`}
      type="password"
      placeholder="Password"
      value={userPassword}
      onChange={(e) => setUserPassword(e.target.value)}
      style={{ backgroundColor: '#FFF0F5', border: 'solid #e31c5f 1px' }} // Utilizzo delle parentesi graffe per creare un oggetto stile
    />
    <input
      className={`input-password-login-forms ${userPasswordControl ? 'error' : ''}`}
      type="password"
      placeholder="Conferma Password"
      value={userPassword2}
      onChange={(e) => setUserPassword2(e.target.value)}
      style={{ backgroundColor: '#FFF0F5', border: 'solid #e31c5f 1px' }} // Utilizzo delle parentesi graffe per creare un oggetto stile
    />
  </>
) : (
  <>
    <input
      className="input-password-SignUp-forms"
      type="password"
      placeholder="Password"
      value={userPassword}
      onChange={(e) => setUserPassword(e.target.value)}
    />
    <input
      className="input-password-login-forms"
      type="password"
      placeholder="Conferma Password"
      value={userPassword2}
      onChange={(e) => setUserPassword2(e.target.value)}
    />
  </>
)}
    </div>
    {textError && (
      <p className="text-privacy-login-forms" style={{ color: '#e31c5f' }} >{textError}</p>
    )}
      {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : ''}
    <p className="text-privacy-login-forms">Informativa sulla Privacy</p>
    <div className="container-button-login-forms">
    <button className="button-login-forms" onClick={handleRegistration}>Registrati</button>
    </div>
   </div> 
   </div>
  );
};

export default MoviSignUp;
