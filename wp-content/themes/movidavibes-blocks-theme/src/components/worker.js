const clearLocalStorage = () => {
    localStorage.removeItem('movitoken');
    localStorage.removeItem('id_user');
    console.log('LocalStorage eliminato.');
  };
  
  
  const startTimer = () => {
    // Controlla se c'è un timestamp salvato in sessionStorage
    const lastClearTime = sessionStorage.getItem('lastClearTime');
  
    // Calcola il tempo trascorso dall'ultimo avvio del timer
    const elapsedTime = lastClearTime ? Date.now() - parseInt(lastClearTime) : 0;
  
    // Imposta il timer per eseguire clearLocalStorage ogni 2 ore (in millisecondi)
    const clearLocalStorageTimer = setInterval(clearLocalStorage, 1 * 10000);
  
    // Salva il timestamp corrente in sessionStorage
    sessionStorage.setItem('lastClearTime', Date.now().toString());
  
    // Cancella il timer al momento della ricarica della pagina
    window.addEventListener('beforeunload', () => {
      clearInterval(clearLocalStorageTimer);
    });
  };




function worker(){
    self.addEventListener('install', (event) => {
        startTimer();
      });
      
      self.addEventListener('activate', (event) => {
        startTimer();
      });
      
      self.addEventListener('fetch', (event) => {
        startTimer();
      });
}

export default worker;