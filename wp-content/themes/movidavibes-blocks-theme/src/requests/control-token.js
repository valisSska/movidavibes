const controlTokenRequest = async () => {
    try {
      const Token = localStorage.getItem('movitoken');
      let succesToken = false;
    if((Token === undefined) || (Token === null)){
      return succesToken
    }
      const tokenData = {
        token: Token
        // Altri dati che desideri inviare
      };

      const jsonData = JSON.stringify(tokenData);
      console.log('Dati JSON inviati:', jsonData);

      const responseLoggin = await fetch(`/wp-json/movidavibes-api/v1/control-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      });

      const responseLogText = await responseLoggin.text(); // Leggi la risposta come testo


      console.log('Risposta dal server: tokeeeeennnn /////////////////////  ', responseLogText);
      if (responseLogText==='[true]') {
         succesToken=true;
      }else{
         succesToken=false;
      }
      return succesToken

    } catch (error) {
      console.error('Errore nell\'invio dei dati a PHP:', error);
       succesToken=false;
      return succesToken
    }
  };

  export default controlTokenRequest;