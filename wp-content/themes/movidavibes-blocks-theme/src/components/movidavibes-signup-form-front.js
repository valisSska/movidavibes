import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './components.css';
import MoviAllert from "./Movi-allert";


const  MoviSignUp = () => {
  const [sgnUpPage, setSgnUpPage] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurName] = useState('');
  const [userNicename, setUserNicename] = useState('');
  const [userUrl, setUserUrl] = useState('');
  const [userNicenameError, setUserNicenameError] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPassword2, setUserPassword2] = useState('');
  const [userPasswordControl, setUserPasswordControl] = useState(false);
  const [textError, setTextError] = useState('');
  const [textAllert, setTextAllert] = useState('test');
  const [emailError, setEmailError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const handleUpload = () => {
    if (selectedFile) {
      const id_user = localStorage.getItem('id_user');
      const formData = {
        id_user: id_user,
        file: selectedFile
        // Altri dati che desideri inviare
      };
      const jsonData = JSON.stringify(formData);
      console.log('Dati img JSON inviati:', jsonData, 'selectedfile', selectedFile);

      // Esempio di fetch per caricare l'immagine
      fetch('/wp-json/movidavibes-api/v1/img-upload', {
        method: 'POST',
        body: jsonData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Gestisci la risposta del server
          console.log('Risposta del server:', data);
        })
        .catch((error) => {
          // Gestisci gli errori di rete o del server
          console.error('Errore durante il caricamento:', error);
        });
    }
  };

  





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
        return
      };



    } catch (error) {
      setLoading(false);
      console.error('Errore nell\'invio dei dati a PHP:', error);
      return
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
        return
      };



    } catch (error) {
      setLoading(false);
      console.error('Errore nell\'invio dei dati a PHP:', error);
      return
    }
  };







  const controlUserTelExist = async () => {
    try {
      const userData = {
        data: phoneNumber,
        // Altri dati che desideri inviare
      };
      setLoading(true);

      const jsonData = JSON.stringify(userData);
      console.log('Dati JSON inviati:', jsonData);

      const responseTel = await fetch(`/wp-json/movidavibes-api/v1/exist-tel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      const responseTelText = await responseTel.text(); // Leggi la risposta come testo




      console.log('Risposta dal server:', responseTelText);

      if(responseTelText!=='[]'){
        setLoading(false);
        setTelError(true);
        setTextError('Questo numero di telefono è già registrato');
        return
      };



    } catch (error) {
      setLoading(false);
      console.error('Errore nell\'invio dei dati a PHP:', error);
      return
    }
  };





  const senDataSignUp = async () => {
    try {
      const userData = {
        name: userName,
        surname: userSurname,
        username:userNicename,
        email: userEmail,
        tel: phoneNumber,
        url: userUrl,
        password:userPassword
        // Altri dati che desideri inviare
      };
      setLoading(true);

      const jsonData = JSON.stringify(userData);
      console.log('Dati JSON inviati:', jsonData);

      const responseTel = await fetch(`/wp-json/movidavibes-api/v1/sgn-up2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      const responseTelText = await responseTel.text(); // Leggi la risposta come testo




      console.log('Risposta dal server:  ', responseTelText);
      setTextAllert('Registrato con successo.');
      setSgnUpPage(1);
      console.log('handle-login inizio');
      handleLogin();
      setLoading(false);
      return



    } catch (error) {
      setLoading(false);
      console.error('Errore nell\'invio dei dati a PHP:', error);
      return
    }
  };


  const handleLogin = async () => {
    console.log('ciao da handlelogin');
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
        console.log('Dati JSON inviati: handlelogin ', jsonData);
  
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
      console.log('token request log in token  handlelogin //// ' + moviToken);
  
  
  
  
        console.log('Risposta dal server://///////////////////  log in ', movieCookieLogged); 
  
      } catch (error) {
        setLoading(false);
        console.error('Errore nell\'invio dei dati a PHP:', error);
        return
      }
    };
    await loginRequest();
  };



  function nextPage(){
  setSgnUpPage(0);
  setPhoneNumber('');
  setUserName('');
  setUserSurName('');
  setUserNicename('');
  setUserUrl('');
  setUserNicenameError(false);
  setUserEmail('');
  setUserPassword('');
  setUserPassword2('');
  setUserPasswordControl(false);
  setTextError('');
  setTextAllert('');
  setEmailError(false);
  setTelError(false);
  setLoading(false);
  location.reload();
  }






  


  const handleRegistration = async () => {
  setTextError('');
  setUserPasswordControl(false);
  setEmailError(false);
  setUserNicenameError(false);
  setTelError(false);
  const regexuserPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (userPassword !== userPassword2) {
    setUserPasswordControl(true);
    setTextError('Le due password non coincidono.');
    return
  } else if (userPassword.length < 8) {
    setUserPasswordControl(true);
    setTextError('La password deve essere lunga almeno 8 caratteri.');
    return
  } else if (!regexuserPassword.test(userPassword)) {
    setUserPasswordControl(true);
    setTextError('La password deve contenere lettere minuscole, maiuscole, almeno un numero e almeno un carattere speciale.');
    return 
  } else if (!emailRegex.test(userEmail)) {
    setEmailError(true);
    setTextError('Inserisci un indirizzo email valido.');
    return
  }else if (!userName || userSurname=== '') {
    setTextError('Inserisci i campi vuoti.');
    return
  }else if (phoneNumber.length < 9) {
    setTelError(true);
    setTextError('Inserisci un numero di telefono vallido.');
    return
  }
  else if (userNicename.length < 5) {
    setUserNicenameError(true);
    setTextError('Inserisci all user almeno 5 caratteri.');
    return
  }
    ///////////////////// CONTROLL //////////////////////////////
      const fetchDatacontrol = async () => {
        await controlUserEmailExist();
        await controlUserNameExist();
        await controlUserTelExist();
        setLoading(false);
      };

      fetchDatacontrol();
    /////////////////////////////////////////////////////////////////////////////////////////
    if(textError===''){
      senDataSignUp();
      setLoading(false);
      return
    };
};

  if(sgnUpPage===1)
  {
    return (
      <div className="flex-center">
      <div className="container-login-forms">
        <div className="header-login-forms">
        <p className="text-welcome-login-forms">Registrati</p>
        </div>
      <p className="text-welcome-login-forms">Benvenuto su Movidavibes</p>
      <div className="container-inputs-login-forms" style={{ height:'460px' }}>
      {textAllert && (
        <>
      <p className="text-privacy-login-forms" >{textAllert}</p>
      <div className='container-label-input-file'>Immagine del profilo (Facoltativo)</div>
    <input type="file" className="custom-file-input input-password-login-forms" placeholder="Immagine profilo" onChange={handleFileChange} />
    <button onClick={handleUpload}>carica</button>
    </>
    )}
    <div className="container-button-login-forms" style={{ width:'100%' }}>
    <button className="button-login-forms" onClick={nextPage}>Avanti</button>
    </div>
      </div>
     </div> 
     </div>
    );
  }
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
      
      {telError === true ? (
      <input className={`input-password-SignUp-forms ${emailError ? 'error' : ''}`} 
      style={{ backgroundColor: '#FFF0F5', border: 'solid #e31c5f 1px' }}  
      type="tel"
      id="phoneNumber"
      name="phoneNumber"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      maxLength="10"
      placeholder="Inserisci il numero di telefono"
    />
      ) : (
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
      )}
      <input className="input-user-SignUp-forms" placeholder='Url (Facoltativo)' value={userUrl} onChange={(e) => setUserUrl(e.target.value)}/>
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
)}  <p className="text-privacy-login-forms">Informativa sulla Privacy</p>
    </div>
    {textError && (
      <p className="text-privacy-login-forms" style={{ color: '#e31c5f' }} >{textError}</p>
    )}
      {loading ?
      <>
      <div className='movidavibes-space-column'></div>
      <FontAwesomeIcon icon={faSpinner} spin /> 
      </> 
      : ''}
    <div className="container-button-login-forms">
    <button className="button-login-forms" onClick={handleRegistration}>Registrati</button>
    </div>
   </div> 
   </div>
  );
};

export default MoviSignUp;
