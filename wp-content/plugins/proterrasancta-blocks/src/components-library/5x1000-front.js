import React, { useState } from 'react';
import locale from '../locale.json';

// eslint-disable-next-line sonarjs/cognitive-complexity
const Fivex1000Section = () => {
  const [result, setResult] = useState();
  const [message, setMessage] = useState();

  const CalculateNetWorth = (event) => {
    const gross = event.target.value;
    let thisResult = 0;
    if (gross < 15001) {
      thisResult = (gross * 0.23 * 5) / 1000;
    } else if (gross < 28001) {
      thisResult = (((gross - 15001) * 0.27 + 3450) * 5) / 1000;
    } else if (gross < 55001) {
      thisResult = (((gross - 28001) * 0.38 + 6960) * 5) / 1000;
    } else if (gross < 75001) {
      thisResult = (((gross - 55001) * 0.41 + 17219) * 5) / 1000;
    } else if (gross < 1000000000000000) {
      thisResult = (((gross - 75001) * 0.43 + 25419) * 5) / 1000;
    }

    setResult(thisResult.toFixed(2));

    if (gross < 15000) {
      setMessage('');
    } else if (gross < 20000) {
      setMessage('Sostieni le attività educative di un bambino in Terra Santa');
    } else if (gross < 25000) {
      setMessage(
        'Sostieni le spese di attività artistiche, musicali e teatrali di un bambino per superare i traumi della guerra',
      );
    } else if (gross < 35000) {
      setMessage('Compri un pacco alimentare per 3 famiglie in Siria');
    } else if (gross < 40000) {
      setMessage('Compri beni di prima necessità per 4 famiglie in Libano');
    } else if (gross < 45000) {
      setMessage('Compri kit medici per 2 famiglie in Siria');
    } else if (gross < 50000) {
      setMessage('Doni un corso di formazione ad una giovane donna di Betania');
    } else if (gross < 55000) {
      setMessage('Doni un corso di formazione ad un giovane di Betlemme');
    } else if (gross < 60000) {
      setMessage('Copri le spese di ordinaria manutenzione di un Santuario di Terra Santa');
    } else if (gross < 65000) {
      setMessage('Copri le spese di assistenza psicologica per un bambino vittima della guerra');
    } else if (gross < 70000) {
      setMessage('Sostieni le spese mediche di un anziano di Betlemme');
    } else if (gross < 80000) {
      setMessage('Aiuti a finanziare i lavori di ristrutturazione di una casa in Libano');
    } else if (gross < 85000) {
      setMessage("Sostieni un giovane o una giovane siriani nell'avviamento al lavoro");
    } else if (gross < 90000) {
      setMessage('Ci aiuti a costruire il centro Dar Al Majus per dare speranza ai giovani di Betlemme');
    } else if (gross < 100000) {
      setMessage('Aiuti a finanziare le attività di ristrutturazione di un santuario in Terra Santa');
    } else if (gross < 150000) {
      setMessage('Sostieni le spese dei centri di assistenza ad Aleppo, Damasco, Latakia e Knaye in Siria');
    } else {
      setMessage('Sostieni la riparazione di una casa distrutta in Siria');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-10 col-md-5 col-lg-4 mt-5" style={{ color: 'white', fontStyle: 'bold' }}>
        <div
          style={{
            backgroundColor: '#D31418',
            height: '150px',
            padding: '20px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
          }}
        >
          <div className="text-center py-2 font-weight-bold" style={{ fontSize: '26px' }}>
            {locale[window.language].reddito}
          </div>
          <div className="md-form">
            <i
              className="fas fa-euro-sign input-prefix font-weight-bold"
              style={{ fontSize: '26px', color: 'white' }}
            />
            <input
              type="number"
              id="reddito"
              step="1000"
              className="form-control font-weight-bold"
              style={{ fontSize: '26px', color: 'white', paddingLeft: '35px', backgroundColor: '#D31418' }}
              onChange={CalculateNetWorth}
            />
          </div>
        </div>
        <div
          className="text-center font-weight-bold"
          style={{
            backgroundColor: 'whitesmoke',
            padding: '20px',
            color: '#1d1d1b',
            fontSize: '26px',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
          }}
        >
          {locale[window.language]['your-5']} {result}
        </div>
      </div>
      {message ? (
        <div className="col-12 d-flex">
          <div className="mx-auto box arrow-top font-weight-bold" style={{ fontSize: '26px', maxWidth: '500px' }}>
            {message}
          </div>
        </div>
      ) : undefined}
      <div className="p-4 col-12">
        *calcolo esemplificativo indicativo basato sull'imposta netta del contribuente, al lordo di eventuali deduzioni,
        detrazioni, ritenute o crediti di imposta.
      </div>
    </div>
  );
};
export default Fivex1000Section;
