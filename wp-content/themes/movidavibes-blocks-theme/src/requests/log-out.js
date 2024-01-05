const logOut = async () => {
    try {
      const Token = localStorage.getItem('movitoken');
      const savedIdUser = localStorage.getItem('id_user');
      let succesLogOut = false;
      if((Token === undefined && savedIdUser === undefined) || (Token === null && savedIdUser === null))
      {return succesLogOut}
      const tokenData = {
        token: Token,
        id_user: savedIdUser
        // Altri dati che desideri inviare
      };

      const jsonData = JSON.stringify(tokenData);
      console.log('Richiesta Log-Out', jsonData);

      const responseLoggin = await fetch(`/wp-json/movidavibes-api/v1/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseLogText = await responseLoggin.text(); // Leggi la risposta come testo

      localStorage.removeItem('movitoken');
      localStorage.removeItem('id_user');
      localStorage.removeItem('timestamp_created');


      console.log('Log Out ////////////// ', responseLogText);
      if (responseLogText==='[true]') {
         succesLogOut=true;
         const TokenLogOut = localStorage.getItem('movitoken');
         const savedIdUserLogOut = localStorage.getItem('id_user');
         console.log('LogOut Eseguito ' + TokenLogOut + ' ' + savedIdUserLogOut );
         location.reload();
      }else{
         succesLogOut=false;
         const TokenLogOut = localStorage.getItem('movitoken');
         const savedIdUserLogOut = localStorage.getItem('id_user');
         console.log('LogOut non Eseguito ' + TokenLogOut + ' ' + savedIdUserLogOut );
      }
      return succesLogOut

    } catch (error) {
      console.error('Errore nell\'invio dei dati a PHP:', error);
       succesLogOut=false;
      return succesLogOut
    }
  };

  export default logOut;