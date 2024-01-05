import clearCookiesMoviJson from './../custom-functions';

const requestLogged = async () => {
    try {
  
  
      const response = await fetch(`/wp-json/movidavibes-api/v1/is-logged`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const responseText = await response.text(); // Leggi la risposta come testo
  
  
      // Verifica se la proprietà 'user-cookies' è definita
      console.log('Risposta dal server:', responseText);
  
      const movieCookieLogged=clearCookiesMoviJson(responseText);
      const moviToken=movieCookieLogged[0].token;
      const idUser=movieCookieLogged[0].user_id;
      localStorage.setItem('movitoken', moviToken);
      localStorage.setItem('id_user', idUser);
      console.log('token request is logged //// ' + moviToken);
      const moviLogged = true;
      return moviLogged
  
    } catch (error) {
        console.log(error);
      const moviLogged = false;
      return moviLogged
    }
  };

export default requestLogged;