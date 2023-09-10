/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { DateTime } from 'luxon';
import locale from '../locale.json';
import nations from '../nazioni.json';

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.append(script);
  }, [url]);
};

const ChooseDonation = ({
  campaignTag,
  env,
  setStep,
  icon1,
  icon2,
  icon3,
  ask1,
  ask1Text,
  ask2,
  ask2Text,
  ask3,
  ask3Text,
  mainSelection,
  mainSelectionRegular,
  mainSingleDonation,
  mainDonation,
  mainAskText,
  mainIcon,
  setMainSelection,
  setMainSelectionRegular,
  setMainSingleDonation,
  setMainDonation,
  setMainAsk,
  setMainIcon,
  formType,
}) => {
  const [icon, setIcon] = useState(mainIcon);
  const [singleDonation, setSingleDonation] = useState(mainSingleDonation);
  const [selection, setSelection] = useState(mainSelection);
  const [selectionRegular, setSelectionRegular] = useState(mainSelectionRegular);
  const [donationField, setDonationField] = useState(mainDonation);
  const [donation, setDonation] = useState(
    new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(mainDonation),
  );
  const [ask, setAsk] = useState(mainAskText);

  useEffect(() => {
    if (formType === 'recurring') {
      setSingleDonation(false);
      setMainSingleDonation(false);
    }
  }, []);

  const nextStep = () => {
    let myDonation = donationField;
    if (typeof donationField === 'string' || donationField instanceof String) {
      myDonation = Number.parseFloat(donationField);
    }

    if (env === 'prod' && myDonation < 5) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warningError,
        text: locale[window.language].minDonation,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
    } else {
      if (typeof gtag !== 'undefined') {
        // eslint-disable-next-line no-undef
        gtag('event', 'add_to_cart', {
          currency: window.language === 'en' ? 'USD' : 'EUR',
          value: donationField,
          items: [
            {
              id: campaignTag,
              name: campaignTag,
              quantity: 1,
              price: donationField,
            },
          ],
        });
      }
      setStep('personal-data');
    }
  };

  const changeDonation = (event) => {
    setDonationField(event.target.value);
    setDonation(new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(event.target.value));
    setMainDonation(event.target.value);
    setSelection(4);
    setMainSelection(4);
    setAsk(locale[window.language].customAmount);
    setMainAsk(locale[window.language].customAmount);
    setIcon('custom-amount');
    setMainIcon('custom-amount');
  };

  const changeButtonDonation = (button) => {
    // eslint-disable-next-line default-case
    switch (button) {
      case 1:
        setDonation(new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(ask1));
        setMainDonation(ask1);
        setAsk(ask1Text);
        setMainAsk(ask1Text);
        setIcon(icon1);
        setMainIcon(icon1);
        break;
      case 2:
        setDonation(new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(ask2));
        setMainDonation(ask2);
        setAsk(ask2Text);
        setMainAsk(ask2Text);
        setIcon(icon2);
        setMainIcon(icon2);
        break;
      case 3:
        setDonation(new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(ask3));
        setMainDonation(ask3);
        setAsk(ask3Text);
        setMainAsk(ask3Text);
        setIcon(icon3);
        setMainIcon(icon3);
        break;
    }

    setSelection(button);
    setMainSelection(button);
  };

  const changeButtonRegular = (button) => {
    setSelectionRegular(button);
    setMainSelectionRegular(button);
  };

  return (
    <>
      <div className="donate-menu row gx-0">
        {formType !== 'recurring' && (
          <>
            <div
              className="col-6"
              onClick={() => {
                setSingleDonation(true);
                setMainSingleDonation(true);
              }}
            >
              <span className={`text-menu ${singleDonation ? 'selected' : ''}`}>{locale[window.language].single}</span>
            </div>
            <div
              className={`text-menu ${formType !== 'recurring' ? 'col-6' : 'col-12'}`}
              onClick={() => {
                setSingleDonation(false);
                setMainSingleDonation(false);
              }}
            >
              <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>
                {locale[window.language].monthly}
              </span>
            </div>
          </>
        )}
        {formType === 'recurring' && (
          <div
            className={`text-menu ${formType !== 'recurring' ? 'col-6' : 'col-12'}`}
            onClick={() => {
              setSingleDonation(false);
              setMainSingleDonation(false);
            }}
          >
            <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>
              {locale[window.language].monthlyRegular}
            </span>
          </div>
        )}
      </div>
      {formType !== 'in-memory' && (
        <div className="donate-selected row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto d-flex">
              <div className="m-auto">
                <img
                  className="donate-icon"
                  src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/${icon}.svg`}
                  alt="icon-campaign"
                />
                <div className="divider" />
              </div>
            </div>
          </div>
          <div className="col-8 text-container row align-items-center">
            <div>
              <div className="icon-title">{locale[window.language].give}</div>
              <div className="icon-price">
                {donation}
                {window.language === 'en' ? '$' : '€'}
              </div>
              <div className="icon-ask">{ask}</div>
            </div>
          </div>
        </div>
      )}
      {formType === 'in-memory' && (
        <div className="donate-selected row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto d-flex">
              <div className="m-auto">
                <img
                  className="donate-icon"
                  src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/pray.png`}
                  alt="icon-campaign"
                />
                <div className="divider" />
              </div>
            </div>
          </div>
          <div className="col-8 text-container row align-items-center">
            <div>
              <div className="icon-title">{locale[window.language].give}</div>
              <div className="icon-price">
                {donation}
                {window.language === 'en' ? '$' : '€'}
              </div>
              <div className="icon-ask">{locale[window.language].giveMemory}</div>
            </div>
          </div>
        </div>
      )}
      {!singleDonation && (
        <div className="donate-select row gx-0 justify-content-center">
          <div className="col option-container">
            <button
              type="button"
              className={`btn btn-options-blue btn-rounded btn-block btn-blue ${
                selectionRegular === 1 ? 'selected' : ''
              }`}
              onClick={() => changeButtonRegular(1)}
            >
              {locale[window.language].selectMonthly}
            </button>
          </div>
          <div className="col option-container">
            <button
              type="button"
              className={`btn btn-options-blue btn-rounded btn-block btn-blue ${
                selectionRegular === 2 ? 'selected' : ''
              }`}
              onClick={() => changeButtonRegular(2)}
            >
              {locale[window.language].selectQuarterly}
            </button>
          </div>
        </div>
      )}
      <div className="donate-select row gx-0 justify-content-center">
        <div className="col option-container">
          <button
            type="button"
            className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 1 ? 'selected' : ''}`}
            onClick={() => changeButtonDonation(1)}
          >
            {new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(ask1)}
            {window.language === 'en' ? '$' : '€'}
          </button>
        </div>
        <div className="col option-container">
          <button
            type="button"
            className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 2 ? 'selected' : ''}`}
            onClick={() => changeButtonDonation(2)}
          >
            {new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(ask2)}
            {window.language === 'en' ? '$' : '€'}
          </button>
        </div>
        <div className="col option-container">
          <button
            type="button"
            className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 3 ? 'selected' : ''}`}
            onClick={() => changeButtonDonation(3)}
          >
            {new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(ask3)}
            {window.language === 'en' ? '$' : '€'}
          </button>
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="input-container selected">
            <div className="md-form">
              <i
                className={`fas input-prefix font-weight-bold ${
                  window.language === 'en' ? 'fa-dollar-sign' : 'fa-euro-sign'
                }`}
              />
              <input
                type="number"
                id="reddito"
                min="5"
                step="1"
                className="form-control font-weight-bold with-icon"
                placeholder={locale[window.language].selectAmount}
                onChange={changeDonation}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="donate-btn row gx-0 justify-content-center">
        <div className="col option-container">
          <button type="button" className="btn btn-donate btn-rounded btn-block btn-primary" onClick={() => nextStep()}>
            {locale[window.language].donate}
          </button>
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="notes-text" dangerouslySetInnerHTML={{ __html: locale[window.language].privacyText }} />
        </div>
      </div>
      <div className="donate-cards row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="card-container">
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/amex.svg"
              alt="amex"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/maestro.svg"
              alt="maestro"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/mastercard.svg"
              alt="mastercard"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/visa.svg"
              alt="visa"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png"
              alt="paypal"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/logo-satispay.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SavePersonalData = ({
  index,
  setStep,
  icon,
  donation,
  askText,
  singleDonation,
  selectionRegular,
  campaignTag,
  mainSurname,
  mainName,
  mainEmail,
  mainAddress,
  mainMemoryPerson,
  setMainSurname,
  setMainName,
  setMainEmail,
  setMainAddress,
  setMainMemoryPerson,
  setMainNewsletter,
  env,
  setIdDirectChannel,
  paypalKey,
  stripeKey,
  setPaypalPlanID,
  formType,
}) => {
  const [name, setName] = useState(mainName);
  const [surname, setSurname] = useState(mainSurname);
  const [address, setAddress] = useState(mainAddress);
  const [memoryPerson, setMemoryPerson] = useState(mainMemoryPerson);
  const [email, setEmail] = useState(mainEmail);
  const [privacy, setPrivacy] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [campaign] = useState(campaignTag);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const formElement = document.querySelector(`#modal-place-${index}`);
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  if (formType === 'in-memory') {
    window.initMap = () => {
      // eslint-disable-next-line no-undef
      const autocomplete = new google.maps.places.Autocomplete(document.querySelector('#memory_ad'), {
        types: ['geocode'],
      });

      autocomplete.setFields(['geometry', 'address_components']);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        const number = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'street_number',
        );
        const street = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'route',
        );
        const city = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'locality',
        );
        const country = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'country',
        );
        const cap = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'postal_code',
        );
        setAddress(`${street.long_name} ${number.long_name} ${city.long_name} ${country.long_name} ${cap.long_name}`);
        setMainAddress(
          `${street.long_name} ${number.long_name} ${city.long_name} ${country.long_name} ${cap.long_name}`,
        );
        console.log(`${number.long_name} ${street.long_name} ${city.long_name} ${country.long_name} ${cap.long_name}`);
        console.log(place);
      });
    };

    useScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAzShHNzNBSmSFnek_bSrHQTczX9xmzjv4&libraries=places&callback=initMap',
    );
  }

  const clickOK = (event) => {
    event.preventDefault();

    if (!name || !surname || !email) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warning,
        text: locale[window.language].warningInsert,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
      return;
    }

    if (!validator.isEmail(email)) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warning,
        text: locale[window.language].warningEmail,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
      return;
    }

    if (!privacy) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warning,
        text: locale[window.language].warningPrivacy,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
      return;
    }

    if (formType === 'in-memory' && !address) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warning,
        text: locale[window.language].warningAddress,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
      return;
    }

    if (formType === 'in-memory' && !memoryPerson) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warning,
        text: locale[window.language].warningMemoryName,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
      return;
    }

    setLoading(true);

    const urlParameters = new URLSearchParams(window.location.search);
    const utmCampaign = urlParameters.get('utm_campaign');
    const utmSource = urlParameters.get('utm_source');

    // eslint-disable-next-line no-undef
    grecaptcha.ready(() => {
      // eslint-disable-next-line no-undef
      grecaptcha.execute('6LdxET4dAAAAAE4ZyQHdePjS0kCAzRdDPPXCJexw', { action: 'submit' }).then(async (token) => {
        const ipLocation = await fetch(`https://pro.ip-api.com/json/?key=8CeI2UILnuHDUiB`, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json());

        fetch(`/wp-json/proterrasancta-api/v1/donor`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            name,
            surname,
            email,
            privacy,
            newsletter,
            campaign,
            utmSource,
            utmCampaign,
            env,
            singleDonation,
            selectionRegular,
            donation,
            askText,
            locale: window.language,
            paypalKey,
            stripeKey,
            formType,
            address,
            memoryPerson,
            countryCode: ipLocation.countryCode,
            codiceNazione: nations.Nazioni.find((el) => el.CodiceISO === ipLocation?.countryCode?.toUpperCase())
              ?.CodiceMentor,
            currency: window.language === 'en' ? 'USD' : 'EUR',
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.debug('fetch result');
            console.debug(result);
            if (result !== 'false') {
              setIdDirectChannel(result.id_direct_channel);
              setPaypalPlanID(result.paypal_plan_id);
              setLoading(false);
              setStep('pay-step');
            } else {
              setLoading(false);
              // eslint-disable-next-line no-undef
              Swal.fire({
                title: locale[window.language].warningError,
                text: locale[window.language].errorRecaptcha,
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#b91521',
              });
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.debug(`error: ${error}`);
            setLoading(false);
            // eslint-disable-next-line no-undef
            Swal.fire({
              title: locale[window.language].warningError,
              text: locale[window.language].errorNetwork,
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#b91521',
            });
          });

        return true;
      });
    });
  };

  return (
    <>
      <div className="donate-menu row gx-0">
        <i className="fas fa-chevron-left arrow-back-button" onClick={() => setStep('donation')} />
        {formType !== 'recurring' && (
          <>
            <div className="col-6">
              <span className={`text-menu ${singleDonation ? 'selected' : ''}`}>{locale[window.language].single}</span>
            </div>
            <div className={`text-menu ${formType !== 'recurring' ? 'col-6' : 'col-12'}`}>
              <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>
                {locale[window.language].monthly}
              </span>
            </div>
          </>
        )}
        {formType === 'recurring' && (
          <div className={`text-menu ${formType !== 'recurring' ? 'col-6' : 'col-12'}`}>
            <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>
              {locale[window.language].monthlyRegular}
            </span>
          </div>
        )}
      </div>
      {formType !== 'in-memory' && (
        <div className="donate-selected row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto d-flex">
              <div className="m-auto">
                <img
                  className="donate-icon"
                  src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/${icon}.svg`}
                  alt="icon-campaign"
                />
                <div className="divider" />
              </div>
            </div>
          </div>
          <div className="col-8 text-container row align-items-center">
            <div>
              <div className="icon-title">{locale[window.language].give}</div>
              <div className="icon-price">
                {new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(donation)}
                {window.language === 'en' ? '$' : '€'}
              </div>
              <div className="icon-ask">{askText}</div>
            </div>
          </div>
        </div>
      )}
      <div className="donate-data row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="input-container selected">
            <div className="md-form">
              <input
                type="text"
                id="name"
                className="form-control font-weight-bold"
                placeholder={locale[window.language].name}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setMainName(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col option-container">
          <div className="input-container selected">
            <div className="md-form">
              <input
                type="text"
                id="surname"
                className="form-control font-weight-bold"
                placeholder={locale[window.language].surname}
                value={surname}
                onChange={(event) => {
                  setSurname(event.target.value);
                  setMainSurname(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 option-container">
          <div className="input-container selected">
            <div className="md-form">
              <i className="fas fa-envelope input-prefix font-weight-bold" />
              <input
                type="email"
                id="email"
                className="form-control font-weight-bold with-icon"
                placeholder="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMainEmail(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {formType === 'in-memory' && (
          <div className="col-12 option-container">
            <div className="input-container selected">
              <div className="md-form">
                <input
                  type="text"
                  id="memory_ad"
                  className="form-control font-weight-bold"
                  defaultValue={mainAddress}
                  placeholder={locale[window.language].address}
                />
              </div>
            </div>
          </div>
        )}
        {formType === 'in-memory' && (
          <div className="col-12 option-container">
            <div className="input-container selected">
              <div className="md-form">
                <input
                  type="text"
                  className="form-control font-weight-bold"
                  placeholder={locale[window.language].memoryPerson}
                  value={memoryPerson}
                  autoComplete="off"
                  onChange={(event) => {
                    setMemoryPerson(event.target.value);
                    setMainMemoryPerson(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="col-12 option-container">
          <div className="input-container selected">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacyCheck1"
                onChange={(event) => {
                  setNewsletter(event.target.checked);
                  setMainNewsletter(event.target.checked);
                }}
              />
              <label className="form-check-label notes-text" htmlFor="privacyCheck1">
                {locale[window.language]['newsletter-consent']}{' '}
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 option-container">
          <div className="input-container selected">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacyCheck"
                onChange={(event) => {
                  setPrivacy(event.target.checked);
                }}
              />
              <label className="form-check-label notes-text" htmlFor="privacyCheck">
                {locale[window.language]['privacy-consent']}{' '}
                <a href={`/${window.language}/privacy-policy/`} target="_blank" rel="noreferrer">
                  privacy policy
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="donate-btn row gx-0 justify-content-center">
        <div className="col option-container">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status" />
            </div>
          ) : (
            <button type="button" className="btn btn-donate btn-rounded btn-block btn-primary" onClick={clickOK}>
              {locale[window.language].donate}
            </button>
          )}
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="notes-text" dangerouslySetInnerHTML={{ __html: locale[window.language].privacyText }} />
        </div>
      </div>
      <div className="donate-cards row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="card-container">
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/amex.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/maestro.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/mastercard.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/visa.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/logo-satispay.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const SaveNewsletter = ({
  setStep,
  campaignTag,
  mainSurname,
  mainName,
  mainEmail,
  setMainSurname,
  setMainName,
  setMainEmail,
  env,
  setIdDirectChannel,
  formType,
}) => {
  const [name, setName] = useState(mainName);
  const [surname, setSurname] = useState(mainSurname);
  const [email, setEmail] = useState(mainEmail);
  const [phone, setPhone] = useState('');
  const [adres, setAdres] = useState('');
  const [ncivico, setNcivico] = useState('');
  const [city, setCity] = useState('');
  const [reg, setReg] = useState('');
  const [ncap, setNcap] = useState('');
  const [preghieraTxt, setPreghieraTxt] = useState('');
  const [fiscaleTxt, setFiscaleTxt] = useState('');
  const [message, setMessage] = useState('');
  const [privacy, setPrivacy] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [newsletter, _] = useState(true);
  const [campaign] = useState(campaignTag);
  const [loading, setLoading] = useState(false);
  const [capg, setCapg] = useState('');

  const clickSend = (event) => {
    event.preventDefault();

    if (!name || !surname || !email || !phone) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warning,
        text: locale[window.language].warningInsert,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
      return;
    }

    if (!validator.isEmail(email)) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warning,
        text: locale[window.language].warningEmail,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
      return;
    }

    if (!privacy) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warning,
        text: locale[window.language].warningPrivacy,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
      return;
    }

    setLoading(true);

    const urlParameters = new URLSearchParams(window.location.search);
    const utmCampaign = urlParameters.get('utm_campaign');
    const utmSource = urlParameters.get('utm_source');

    // eslint-disable-next-line no-undef
    grecaptcha.ready(() => {
      // eslint-disable-next-line no-undef
      grecaptcha.execute('6LdxET4dAAAAAE4ZyQHdePjS0kCAzRdDPPXCJexw', { action: 'submit' }).then(async (token) => {
        const ipLocation = await fetch(`https://pro.ip-api.com/json/?key=8CeI2UILnuHDUiB`, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => response.json());

        console.log('ipLocation');
        console.log(ipLocation);

        fetch(`/wp-json/proterrasancta-api/v1/form-data`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            name,
            surname,
            email,
            privacy,
            newsletter,
            campaign,
            utmSource,
            utmCampaign,
            env,
            message,
            phone,
            adres,
            ncivico,
            city,
            reg,
            ncap,
            formType,
            fiscaleTxt,
            preghieraTxt,
            locale: window.language,
            countryCode: ipLocation.countryCode,
            codiceNazione: nations.Nazioni.find((el) => el.CodiceISO === ipLocation?.countryCode?.toUpperCase())
              ?.CodiceMentor,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.debug('fetch result');
            console.debug(result);
            if (result !== 'false') {
              setIdDirectChannel(result.id_direct_channel);
              setLoading(false);
              setStep('thankyou-page-newsletter');
            } else {
              setLoading(false);
              // eslint-disable-next-line no-undef
              Swal.fire({
                title: locale[window.language].warningError,
                text: locale[window.language].errorRecaptcha,
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#b91521',
              });
            }
          })
          // eslint-disable-next-line sonarjs/no-identical-functions
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.debug(`error: ${error}`);
            setLoading(false);
            // eslint-disable-next-line no-undef
            Swal.fire({
              title: locale[window.language].warningError,
              text: locale[window.language].errorNetwork,
              icon: 'error',
              confirmButtonText: 'OK',
              confirmButtonColor: '#b91521',
            });
          });

        return true;
      });
    });
  };
  if (formType === 'newsletter-residence') {
    window.initMap = () => {
      // eslint-disable-next-line no-undef
      const autocomplete = new google.maps.places.Autocomplete(document.querySelector('input#address-preghiera'), {
        types: ['geocode'],
      });

      autocomplete.setFields(['geometry', 'address_components']);
      console.log(autocomplete);
      console.log(autocomplete.getPlace());

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        console.log(place);
        const streetN = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'street_number',
        );
        const street = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'route',
        );
        const citta = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'locality',
        );
        const cap = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'postal_code',
        );
        // eslint-disable-next-line no-shadow
        const reg = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'administrative_area_level_2',
        );

        setNcap(cap.long_name);
        setNcivico(streetN.long_name);
        setCity(citta.short_name);
        setReg(reg.short_name);
        setAdres(street.long_name);

        console.log(`${street.long_name} ${citta.long_name} ${cap.long_name}`);
      });
    };

    useScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAzShHNzNBSmSFnek_bSrHQTczX9xmzjv4&libraries=places&callback=initMap',
    );
  }
  if (formType === 'newsletter-fiscale') {
    window.initMap = () => {
      // eslint-disable-next-line no-undef
      const autocomplete = new google.maps.places.Autocomplete(document.querySelector('input#adress-fiscale'), {
        types: ['geocode'],
      });

      autocomplete.setFields(['geometry', 'address_components']);
      console.log(autocomplete);
      console.log(autocomplete.getPlace());

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        console.log(place);
        const street = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'route',
        );
        const streetN = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'street_number',
        );
        const citta = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'locality',
        );
        const cap = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'postal_code',
        );
        // eslint-disable-next-line no-shadow
        const reg = place.address_components.find(
          (el) => el.types && el.types.length > 0 && el.types[0] === 'administrative_area_level_2',
        );

        setNcap(cap.long_name);
        setNcivico(streetN.long_name);
        setCity(citta.short_name);
        setReg(reg.short_name);
        setAdres(street.long_name);

        console.log(`${street.long_name} ${citta.long_name} ${cap.long_name}`);
      });
    };

    useScript(
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAzShHNzNBSmSFnek_bSrHQTczX9xmzjv4&libraries=places&callback=initMap',
    );
  }

  return (
    <>
      <div className="donate-menu row gx-0">
        <div className="text-menu col-12">
          <span className={`text-menu`}></span>
        </div>
      </div>
      <div className="donate-data row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="input-container selected">
            <div className="md-form">
              <input
                type="text"
                id="name"
                className="form-control font-weight-bold"
                placeholder={locale[window.language].name}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setMainName(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col option-container">
          <div className="input-container selected">
            <div className="md-form">
              <input
                type="text"
                id="surname"
                className="form-control font-weight-bold"
                placeholder={locale[window.language].surname}
                value={surname}
                onChange={(event) => {
                  setSurname(event.target.value);
                  setMainSurname(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 option-container">
          <div className="input-container selected">
            <div className="md-form">
              <i className="fas fa-envelope input-prefix font-weight-bold" />
              <input
                type="email"
                id="email"
                className="form-control font-weight-bold with-icon"
                placeholder="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMainEmail(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {formType === 'newsletter-message' && (
          <div className="col-12 option-container">
            <div className="input-container selected">
              <div className="md-form">
                <textarea
                  id="message"
                  className="form-control font-weight-bold with-icon"
                  placeholder={locale[window.language].message}
                  value={message}
                  rows="4"
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {formType === 'newsletter-residence' && (
          <div className="col-12 option-container">
            <div className="input-container selected">
              <div className="md-form">
                <input
                  type="tel"
                  id="phone"
                  className="form-control font-weight-bold with-icon"
                  placeholder="Cellulare(senza il prefisso +39)"
                  required
                  maxLength="10"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    // setMainPhone(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="zpacio20"></div>
            <div className="input-container selected">
              <div className="md-form">
                <input
                  id="address-preghiera"
                  className="form-control font-weight-bold with-icon"
                  placeholder="Indirizzo (specificare via,piazza ecc...)"
                  value={adres}
                  onChange={(event) => {
                    setAdres(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="zpacio20"></div>
            <div className="col option-container">
              <div className="container-orizont">
                <div className="input-container-adress selected">
                  <div className="md-form">
                    <input
                      id="n-civico-preghiera"
                      className="form-control font-weight-bold bordo"
                      maxLength="4"
                      placeholder="N.Civico"
                      value={ncivico}
                      onChange={(event) => {
                        setNcivico(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="input-container-adress selected">
                  <div className="md-form">
                    <input
                      id="n-cap-preghiera"
                      className="form-control font-weight-bold"
                      placeholder="N.Cap"
                      maxLength="5"
                      value={ncap}
                      onChange={(event) => {
                        setNcap(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col option-container">
              <div className="container-orizont">
                <div className="input-container-adress selected">
                  <div className="md-form">
                    <input
                      id="city-preghiera"
                      className="form-control font-weight-bold bordo"
                      placeholder="città"
                      value={city}
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="input-container-adress selected">
                  <div className="md-form">
                    <input
                      id="pr-preghiera"
                      className="form-control font-weight-bold"
                      placeholder="Provincia (sigla)"
                      maxLength="2"
                      value={reg}
                      onChange={(event) => {
                        setReg(event.target.value.toUpperCase());
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="zpacio20"></div>
            <div className="input-container selected">
              <div className="md-form">
                <input
                  id="preghiera"
                  className="form-control font-weight-bold with-icon"
                  placeholder="La tua intenzione di preghiera"
                  maxLength="200"
                  value={preghieraTxt}
                  onChange={(event) => {
                    setPreghieraTxt(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {formType === 'newsletter-fiscale' && (
          <div className="col-12 option-container">
            <div className="input-container selected">
              <div className="md-form">
                <input
                  type="tel"
                  id="phone"
                  className="form-control font-weight-bold with-icon"
                  placeholder="Cellulare(senza il prefisso +39)"
                  maxLength="10"
                  required
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                    // setMainPhone(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="zpacio20"></div>
            <div className="input-container selected">
              <div className="md-form">
                <input
                  id="adress-fiscale"
                  name="adres"
                  className="form-control font-weight-bold with-icon"
                  placeholder="Indirizzo (specificare via,piazza ecc...)"
                  value={adres}
                  required
                  onChange={(event) => {
                    setAdres(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="zpacio20"></div>
            <div className="col option-container">
              <div className="container-orizont">
                <div className="input-container-adress selected">
                  <div className="md-form">
                    <input
                      id="n-civico-fiscale"
                      className="form-control font-weight-bold bordo"
                      maxLength="4"
                      placeholder="N.Civico"
                      value={ncivico}
                      onChange={(event) => {
                        setNcivico(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="input-container-adress selected">
                  <div className="md-form">
                    <input
                      id="n-cap-fiscale"
                      className="form-control font-weight-bold"
                      placeholder="N.Cap"
                      maxLength="5"
                      value={ncap}
                      onChange={(event) => {
                        setNcap(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col option-container">
              <div className="container-orizont">
                <div className="input-container-adress selected">
                  <div className="md-form">
                    <input
                      id="city-fiscale"
                      className="form-control font-weight-bold bordo"
                      placeholder="città"
                      value={city}
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="input-container-adress selected">
                  <div className="md-form">
                    <input
                      id="pr-fiscale"
                      className="form-control font-weight-bold"
                      placeholder="Provincia (sigla)"
                      maxLength="2"
                      value={reg}
                      onChange={(event) => {
                        setReg(event.target.value.toUpperCase());
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="zpacio20"></div>
            <div className="input-container selected">
              <div className="md-form">
                <input
                  id="fiscale"
                  className="form-control font-weight-bold with-icon"
                  placeholder="Codice Fiscale"
                  maxLength="16"
                  value={fiscaleTxt}
                  onChange={(event) => {
                    setFiscaleTxt(event.target.value.toUpperCase());
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="col-12 option-container">
          <div className="input-container selected">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacyCheck"
                onChange={(event) => {
                  setPrivacy(event.target.checked);
                }}
              />
              <label className="form-check-label notes-text" htmlFor="privacyCheck">
                {locale[window.language]['privacy-consent']}{' '}
                <a href={`/${window.language}/privacy-policy/`} target="_blank" rel="noreferrer">
                  privacy policy
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="donate-btn row gx-0 justify-content-center">
        <div className="col option-container">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status" />
            </div>
          ) : (
            <button type="button" className="btn btn-donate btn-rounded btn-block btn-primary" onClick={clickSend}>
              {locale[window.language].saveData}
            </button>
          )}
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="notes-text" dangerouslySetInnerHTML={{ __html: locale[window.language].privacyText }} />
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line no-unused-vars
const CheckoutForm = ({
  setStep,
  donation,
  askText,
  singleDonation,
  campaignTag,
  name,
  surname,
  email,
  idDirectChannel,
  subscriptionId,
  env,
  formType,
  newsletter,
  paypalKey,
  stripeKey,
  customerId,
}) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.debug('handleSubmit');
    console.debug(event);

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:7575/it/',
      },
      redirect: 'if_required',
    });

    if (result.error) {
      console.debug(result.error.message);
      setLoading(false);
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warningError,
        text: result.error.message,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
    } else {
      console.debug('stripe.confirmPayment result');
      console.debug(result);

      const urlParameters = new URLSearchParams(window.location.search);
      const utmCampaign = urlParameters.get('utm_campaign');
      const utmSource = urlParameters.get('utm_source');

      if (typeof typeof gtag !== 'undefined') {
        // eslint-disable-next-line no-undef
        gtag('event', 'purchase', {
          transaction_id: result.paymentIntent.id,
          value: donation,
          currency: result.paymentIntent.currency.toUpperCase(),
          items: [
            {
              id: campaignTag,
              name: campaignTag,
              quantity: 1,
              price: donation,
            },
          ],
        });
      }

      if (typeof typeof fbq !== 'undefined') {
        fbq('track', 'Purchase', { currency: result.paymentIntent.currency.toUpperCase(), value: donation });
      }

      fetch(`/wp-json/proterrasancta-api/v1/donation`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          idDirectChannel,
          campaign: campaignTag,
          ask: askText,
          utmSource,
          utmCampaign,
          payment_method: 'stripe',
          payment_id: result.paymentIntent.id,
          payment_email: '',
          merchant_id: '',
          currency: result.paymentIntent.currency.toUpperCase(),
          address: '',
          city: '',
          country: '',
          postal_code: '',
          donation,
          donationText: `${new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(donation)}${
            window.language === 'en' ? '$' : '€'
          }`,
          monthly: !singleDonation,
          monthlyText: singleDonation ? locale[window.language].single : locale[window.language].monthly,
          subscription_id: subscriptionId,
          order_time: DateTime.fromSeconds(result.paymentIntent.created).toISO(),
          locale: window.language,
          env,
          formType,
          newsletter,
          paypalKey,
          stripeKey,
          customerId,
          paymentMethodId: result.paymentIntent.payment_method,
        }),
      })
        // eslint-disable-next-line no-unused-vars
        .then(() => {
          setLoading(false);
          setStep('thankyou-page');
        })
        // eslint-disable-next-line sonarjs/no-identical-functions
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.debug(`error: ${error}`);
          setLoading(false);
          // eslint-disable-next-line no-undef
          Swal.fire({
            title: locale[window.language].warningError,
            text: locale[window.language].errorNetwork,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#b91521',
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {loading ? (
        <div className="text-center mt-3">
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status" />
        </div>
      ) : (
        <button className="btn btn-donate btn-rounded btn-block btn-primary mt-3">
          {locale[window.language].donate}
        </button>
      )}
    </form>
  );
};

// eslint-disable-next-line no-unused-vars, object-curly-newline
const PayStep = ({
  index,
  setStep,
  icon,
  donation,
  askText,
  singleDonation,
  campaignTag,
  name,
  surname,
  email,
  paypalKey,
  stripeKey,
  idDirectChannel,
  paypalPlanID,
  env,
  formType,
  newsletter,
  selectionRegular,
}) => {
  const [selection, setSelection] = useState(1);
  const [clientSecret, setClientSecret] = useState();
  const [customerId, setCustomerId] = useState();
  const [stripePromise, setStripePromise] = useState();
  const [subscriptionId, setSubscriptionId] = useState('');
  const [loading, setLoading] = useState(false);
  const [satispayPaymentId, setSatispayPaymentId] = useState();

  useScript('https://online.satispay.com/web-button.js');

  useEffect(() => {
    const formElement = document.querySelector(`#modal-place-${index}`);
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const changeButtonPayment = (button) => {
    setSelection(button);
    if (button === 3) {
      console.debug('satispay: init ');

      // eslint-disable-next-line no-undef
      const satispay = SatispayWebButton.configure({
        paymentId: satispayPaymentId,
        completed(order) {
          console.debug('satispay: completed ');
          console.debug(order);

          setLoading(true);
          const urlParameters = new URLSearchParams(window.location.search);
          const utmCampaign = urlParameters.get('utm_campaign');
          const utmSource = urlParameters.get('utm_source');

          if (typeof gtag !== 'undefined') {
            // eslint-disable-next-line no-undef
            gtag('event', 'purchase', {
              transaction_id: satispayPaymentId,
              value: donation,
              currency: 'EUR',
              items: [
                {
                  id: campaignTag,
                  name: campaignTag,
                  quantity: 1,
                  price: donation,
                },
              ],
            });
          }

          if (typeof typeof fbq !== 'undefined') {
            fbq('track', 'Purchase', { currency: 'EUR', value: donation });
          }

          fetch(`/wp-json/proterrasancta-api/v1/donation`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              surname,
              email,
              idDirectChannel,
              campaign: campaignTag,
              ask: askText,
              utmSource,
              utmCampaign,
              payment_method: 'satispay',
              payment_id: satispayPaymentId,
              payment_email: email,
              merchant_id: '',
              currency: 'EUR',
              address: '',
              city: '',
              country: 'IT',
              postal_code: '',
              donation,
              donationText: `${new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(donation)}€`,
              monthly: false,
              monthlyText: singleDonation ? locale[window.language].single : locale[window.language].monthly,
              order_time: new Date(),
              locale: window.language,
              env,
              formType,
              newsletter,
              paypalKey,
              stripeKey,
            }),
          })
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
              setLoading(false);
              setStep('thankyou-page');
            })
            // eslint-disable-next-line sonarjs/no-identical-functions
            .catch((error) => {
              // eslint-disable-next-line no-console
              setLoading(false);
              console.debug(`error: ${error}`);
              // eslint-disable-next-line no-undef
              Swal.fire({
                title: locale[window.language].warningError,
                text: locale[window.language].errorNetwork,
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#b91521',
              });
            });
        },
      });

      document.querySelector('#pay-with-satispay').addEventListener('click', (error) => {
        error.preventDefault();
        console.debug('satispay: open');
        satispay.open();
      });
    }
  };

  const setupStripe = () => {
    fetch(`/wp-json/proterrasancta-api/v1/create-stripe-payment`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: donation,
        key: stripeKey,
        env,
        currency: window.language === 'en' ? 'USD' : 'EUR',
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setClientSecret(result.clientSecret);
        console.debug(result);
        console.debug(result.clientSecret);
      })
      // eslint-disable-next-line sonarjs/no-identical-functions
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.debug(`error: ${error}`);
        // eslint-disable-next-line no-undef
        Swal.fire({
          title: locale[window.language].warningError,
          text: locale[window.language].errorNetwork,
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#b91521',
        });
      });
  };

  const setupStripeSubscription = () => {
    fetch(`/wp-json/proterrasancta-api/v1/create-stripe-subscription`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        donation,
        askText,
        selectionRegular,
        email,
        key: stripeKey,
        env,
        currency: window.language === 'en' ? 'USD' : 'EUR',
      }),
    })
      .then((response) => response.json())
      // eslint-disable-next-line sonarjs/no-identical-functions
      .then((result) => {
        setSubscriptionId(result.subscriptionId);
        setClientSecret(result.clientSecret);
        setCustomerId(result.customerId);
        console.debug(result);
        console.debug(result.clientSecret);
      })
      // eslint-disable-next-line sonarjs/no-identical-functions
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.debug(`error: ${error}`);
        // eslint-disable-next-line no-undef
        Swal.fire({
          title: locale[window.language].warningError,
          text: locale[window.language].errorNetwork,
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#b91521',
        });
      });
  };

  const setupSatispay = () => {
    fetch(`/wp-json/proterrasancta-api/v1/create-satispay-payment`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Number.parseFloat(donation) * 100,
        env: 'prod',
        currency: 'EUR',
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.debug(result);
        setSatispayPaymentId(result.id);
      })
      // eslint-disable-next-line sonarjs/no-identical-functions
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.debug(`error: ${error}`);
        // eslint-disable-next-line no-undef
        Swal.fire({
          title: locale[window.language].warningError,
          text: locale[window.language].errorNetwork,
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#b91521',
        });
      });
  };

  useEffect(() => {
    const thisStripePromise = loadStripe(stripeKey);
    setStripePromise(thisStripePromise);
    if (singleDonation) {
      setupStripe();
    } else {
      setupStripeSubscription();
    }

    setupSatispay();
  }, []);

  return (
    <>
      <div className="donate-menu row gx-0">
        <i className="fas fa-chevron-left arrow-back-button" onClick={() => setStep('personal-data')} />
        {formType !== 'recurring' && (
          <>
            <div className="col-6">
              <span className={`text-menu ${singleDonation ? 'selected' : ''}`}>{locale[window.language].single}</span>
            </div>
            <div className={`text-menu ${formType !== 'recurring' ? 'col-6' : 'col-12'}`}>
              <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>
                {locale[window.language].monthly}
              </span>
            </div>
          </>
        )}
        {formType === 'recurring' && (
          <div className={`text-menu ${formType !== 'recurring' ? 'col-6' : 'col-12'}`}>
            <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>
              {locale[window.language].monthlyRegular}
            </span>
          </div>
        )}
      </div>
      {formType !== 'in-memory' && (
        <div className="donate-selected row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto d-flex">
              <div className="m-auto">
                <img
                  className="donate-icon"
                  src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/${icon}.svg`}
                  alt="icon-campaign"
                />
                <div className="divider" />
              </div>
            </div>
          </div>
          <div className="col-8 text-container row align-items-center">
            <div>
              <div className="icon-title">{locale[window.language].give}</div>
              <div className="icon-price">
                {new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(donation)}
                {window.language === 'en' ? '$' : '€'}
              </div>
              <div className="icon-ask">{askText}</div>
            </div>
          </div>
        </div>
      )}
      <div className="donate-select row gx-0 justify-content-center">
        <div className={`${singleDonation ? 'col-4' : 'col-6'} option-container`}>
          <button
            type="button"
            className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 1 ? 'selected' : ''}`}
            onClick={() => changeButtonPayment(1)}
            style={{ minWidth: 'unset' }}
          >
            <div>{locale[window.language].paypal}</div>
            <img
              className="card-icon-button"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png"
              alt="icon"
            />
          </button>
        </div>
        <div className={`${singleDonation ? 'col-4' : 'col-6'} option-container`}>
          <button
            type="button"
            className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 2 ? 'selected' : ''}`}
            onClick={() => changeButtonPayment(2)}
            style={{ minWidth: 'unset' }}
          >
            <div>{locale[window.language].cards}</div>
            <img
              className="card-icon-button"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/cards.png"
              alt="icon"
            />
          </button>
        </div>
        <div className={`${singleDonation ? 'col-4' : 'd-none'} option-container`}>
          <button
            type="button"
            className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 3 ? 'selected' : ''}`}
            onClick={() => changeButtonPayment(3)}
            style={{ minWidth: 'unset' }}
          >
            <div>{locale[window.language].satispay}</div>
            <img
              className="card-icon-button"
              src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/${
                selection === 3 ? 'logo-satispay.svg' : 'logo-satispay-negative.svg'
              }`}
              alt="icon"
            />
          </button>
        </div>
      </div>
      <div className={`donate-btn row gx-0 justify-content-center ${selection !== 3 ? 'd-none' : ''}`}>
        <div className="col option-container d-flex">
          <img
            src="https://staging.online.satispay.com/images/en-pay-red.svg"
            alt="Pay with Satispay"
            id="pay-with-satispay"
            style={{ maxWidth: '300px', cursor: 'pointer', margin: 'auto' }}
          />
        </div>
      </div>
      <div className={`donate-btn row gx-0 justify-content-center ${selection !== 1 ? 'd-none' : ''}`}>
        <div className="col option-container">
          <PayPalScriptProvider
            options={{
              'client-id': paypalKey,
              currency: window.language === 'en' ? 'USD' : 'EUR',
              vault: !singleDonation,
              intent: singleDonation ? 'capture' : 'subscription',
            }}
          >
            <PayPalButtons
              showSpinner={true}
              disabled={loading}
              style={{ layout: 'horizontal', color: 'gold', shape: 'pill', label: 'paypal', tagline: false }}
              createOrder={
                singleDonation
                  ? (data, actions) =>
                      actions.order
                        .create({
                          purchase_units: [
                            {
                              amount: {
                                currency_code: window.language === 'en' ? 'USD' : 'EUR',
                                value: donation,
                                breakdown: {
                                  item_total: {
                                    currency_code: window.language === 'en' ? 'USD' : 'EUR',
                                    value: donation,
                                  },
                                },
                              },
                              items: [
                                {
                                  name: campaignTag,
                                  description: askText,
                                  quantity: 1,
                                  unit_amount: {
                                    currency_code: window.language === 'en' ? 'USD' : 'EUR',
                                    value: donation,
                                  },
                                },
                              ],
                            },
                          ],
                        })
                        .then((orderId) => {
                          // Your code here after create the order
                          console.debug('createOrder');
                          console.debug(orderId);
                          return orderId;
                        })
                  : undefined
              }
              createSubscription={
                !singleDonation
                  ? (data, actions) =>
                      actions.subscription.create({ plan_id: paypalPlanID }).then((subscriptionID) => {
                        // Your code here after create the order
                        console.debug('createSubscription');
                        console.debug(subscriptionID);
                        return subscriptionID;
                      })
                  : undefined
              }
              onApprove={function (data, actions) {
                const urlParameters = new URLSearchParams(window.location.search);
                const utmCampaign = urlParameters.get('utm_campaign');
                const utmSource = urlParameters.get('utm_source');
                setLoading(true);

                if (singleDonation) {
                  return actions.order.capture().then((order) => {
                    console.debug('onApprove');
                    console.debug(order);

                    if (typeof gtag !== 'undefined') {
                      // eslint-disable-next-line no-undef
                      gtag('event', 'purchase', {
                        transaction_id: order.id,
                        value: donation,
                        currency: order.purchase_units[0].amount.currency_code,
                        items: [
                          {
                            id: campaignTag,
                            name: campaignTag,
                            quantity: 1,
                            price: donation,
                          },
                        ],
                      });
                    }

                    if (typeof typeof fbq !== 'undefined') {
                      fbq('track', 'Purchase', {
                        currency: order.purchase_units[0].amount.currency_code,
                        value: donation,
                      });
                    }

                    fetch(`/wp-json/proterrasancta-api/v1/donation`, {
                      method: 'POST',
                      mode: 'cors',
                      cache: 'no-cache',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        name,
                        surname,
                        email,
                        idDirectChannel,
                        campaign: campaignTag,
                        ask: askText,
                        utmSource,
                        utmCampaign,
                        selectionRegular,
                        payment_method: 'paypal',
                        payment_id: order.id,
                        payment_email: order.payer.email_address,
                        merchant_id: order.purchase_units[0].payee.merchant_id,
                        currency: order.purchase_units[0].amount.currency_code,
                        address: order.purchase_units[0].shipping.address.address_line_1,
                        city: order.purchase_units[0].shipping.address.admin_area_1,
                        country: order.purchase_units[0].shipping.address.country_code,
                        postal_code: order.purchase_units[0].shipping.address.postal_code,
                        donation,
                        donationText: `${new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(
                          donation,
                        )}${window.language === 'en' ? '$' : '€'}`,
                        monthly: false,
                        monthlyText: singleDonation ? locale[window.language].single : locale[window.language].monthly,
                        order_time: order.update_time,
                        locale: window.language,
                        env,
                        formType,
                        newsletter,
                        paypalKey,
                        stripeKey,
                      }),
                    })
                      // eslint-disable-next-line no-unused-vars
                      .then((result) => {
                        setLoading(false);
                        setStep('thankyou-page');
                      })
                      // eslint-disable-next-line sonarjs/no-identical-functions
                      .catch((error) => {
                        // eslint-disable-next-line no-console
                        setLoading(false);
                        console.debug(`error: ${error}`);
                        // eslint-disable-next-line no-undef
                        Swal.fire({
                          title: locale[window.language].warningError,
                          text: locale[window.language].errorNetwork,
                          icon: 'error',
                          confirmButtonText: 'OK',
                          confirmButtonColor: '#b91521',
                        });
                      });
                  });
                }

                console.debug('onApprove');
                console.debug(data);

                if (typeof gtag !== 'undefined') {
                  // eslint-disable-next-line no-undef
                  gtag('event', 'purchase', {
                    transaction_id: data.orderID,
                    value: donation,
                    currency: window.language === 'en' ? 'USD' : 'EUR',
                    items: [
                      {
                        id: campaignTag,
                        name: campaignTag,
                        quantity: 1,
                        price: donation,
                      },
                    ],
                  });
                }

                if (typeof typeof fbq !== 'undefined') {
                  fbq('track', 'Purchase', {
                    currency: window.language === 'en' ? 'USD' : 'EUR',
                    value: donation,
                  });
                }

                fetch(`/wp-json/proterrasancta-api/v1/donation`, {
                  method: 'POST',
                  mode: 'cors',
                  cache: 'no-cache',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name,
                    surname,
                    email,
                    idDirectChannel,
                    campaign: campaignTag,
                    ask: askText,
                    utmSource,
                    utmCampaign,
                    payment_method: 'paypal',
                    payment_id: data.orderID,
                    donation,
                    donationText: `${new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(
                      donation,
                    )}${window.language === 'en' ? '$' : '€'}`,
                    subscription_id: data.subscriptionID,
                    monthly: true,
                    monthlyText: singleDonation ? locale[window.language].single : locale[window.language].monthly,
                    order_time: DateTime.now().toISO(),
                    locale: window.language,
                    currency: window.language === 'en' ? 'USD' : 'EUR',
                    env,
                    formType,
                    newsletter,
                    paypalKey,
                    stripeKey,
                  }),
                })
                  // eslint-disable-next-line no-unused-vars
                  .then((result) => {
                    setLoading(false);
                    setStep('thankyou-page');
                  })
                  // eslint-disable-next-line sonarjs/no-identical-functions
                  .catch((error) => {
                    // eslint-disable-next-line no-console
                    setLoading(false);
                    console.debug(`error: ${error}`);
                    // eslint-disable-next-line no-undef
                    Swal.fire({
                      title: locale[window.language].warningError,
                      text: locale[window.language].errorNetwork,
                      icon: 'error',
                      confirmButtonText: 'OK',
                      confirmButtonColor: '#b91521',
                    });
                  });
              }}
              onCancel={function (data) {
                console.debug('onCancel');
                console.debug(data);
              }}
              onError={function (error) {
                console.debug('onError');
                console.debug(error);
              }}
            />
          </PayPalScriptProvider>
          {loading && (
            <div className="text-center">
              <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status" />
            </div>
          )}
        </div>
      </div>
      <div className={`donate-btn row gx-0 justify-content-center ${selection !== 2 ? 'd-none' : ''}`}>
        <div className="col option-container">
          {clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm
                setStep={setStep}
                singleDonation={singleDonation}
                donation={donation}
                askText={askText}
                name={name}
                surname={surname}
                email={email}
                campaignTag={campaignTag}
                idDirectChannel={idDirectChannel}
                subscriptionId={subscriptionId}
                env={env}
                formType={formType}
                newsletter={newsletter}
                paypalKey={paypalKey}
                stripeKey={stripeKey}
                customerId={customerId}
              />
            </Elements>
          )}
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="notes-text" dangerouslySetInnerHTML={{ __html: locale[window.language].privacyText }} />
        </div>
      </div>
      <div className="donate-cards row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="card-container">
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/amex.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/maestro.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/mastercard.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/visa.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/logo-satispay.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line no-unused-vars, object-curly-newline
const ThankyouPage = ({ index, singleDonation, thankYouUrl, formType }) => {
  useEffect(() => {
    const formElement = document.querySelector(`#modal-place-${index}`);
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  if (thankYouUrl) {
    window.location.href = thankYouUrl;
    return <></>;
  }

  return (
    <>
      <div className="donate-menu row gx-0">
        {formType !== 'recurring' && (
          <>
            <div className="col-6">
              <span className={`text-menu ${singleDonation ? 'selected' : ''}`}>{locale[window.language].single}</span>
            </div>
            <div className={`text-menu ${formType !== 'recurring' ? 'col-6' : 'col-12'}`}>
              <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>
                {locale[window.language].monthly}
              </span>
            </div>
          </>
        )}
        {formType === 'recurring' && (
          <div className={`text-menu ${formType !== 'recurring' ? 'col-6' : 'col-12'}`}>
            <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>
              {locale[window.language].monthlyRegular}
            </span>
          </div>
        )}
      </div>
      <div className="donate-selected row gx-0">
        <div className="col-12 text-container">
          <div>
            <div className="text-thanks">{locale[window.language].thanks}</div>
          </div>
        </div>
        <div className="col-12 text-container">
          <div>
            <div className="text-thanks-summary">{locale[window.language].thanksSummary}</div>
          </div>
        </div>
      </div>
      <div className={`donate-btn row gx-0 justify-content-center `}>
        <div className="col option-container">
          <button
            type="button"
            className="btn btn-donate btn-rounded btn-block btn-primary"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            {locale[window.language]['go-to-site']}
          </button>
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="notes-text" dangerouslySetInnerHTML={{ __html: locale[window.language].privacyText }} />
        </div>
      </div>
      <div className="donate-cards row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="card-container">
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/amex.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/maestro.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/mastercard.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/visa.svg"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png"
              alt="icon"
            />
            <img
              className="card-icon"
              src="/wp-content/themes/pro-terra-sancta-fixed/assets/images/logo-satispay.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line no-unused-vars, object-curly-newline
const ThankyouPageNewsletter = ({ thankYouUrl, index }) => {
  useEffect(() => {
    const formElement = document.querySelector(`#modal-place-${index}`);
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  if (thankYouUrl) {
    window.location.href = thankYouUrl;
    return <></>;
  }

  return (
    <>
      <div className="donate-menu row gx-0">
        <div className="text-menu col-12">
          <span className={`text-menu`}>{locale[window.language].newsletter}</span>
        </div>
      </div>
      <div className="donate-selected row gx-0">
        <div className="col-12 text-container">
          <div>
            <div className="text-thanks">{locale[window.language].thanksNewsletter}</div>
          </div>
        </div>
        <div className="col-12 text-container">
          <div>
            <div className="text-thanks-summary">{locale[window.language].thanksSummaryNewsletter}</div>
          </div>
        </div>
      </div>
      <div className={`donate-btn row gx-0 justify-content-center `}>
        <div className="col option-container">
          <button
            type="button"
            className="btn btn-donate btn-rounded btn-block btn-primary"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            {locale[window.language]['go-to-site']}
          </button>
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="notes-text" dangerouslySetInnerHTML={{ __html: locale[window.language].privacyText }} />
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line no-unused-vars, object-curly-newline
const ThankyouPageGeneric = ({ thankYouUrl, index, formType }) => {
  useEffect(() => {
    const formElement = document.querySelector(`#modal-place-${index}`);
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  if (thankYouUrl) {
    window.location.href = thankYouUrl;
    return <></>;
  }

  return (
    <>
      <div className="donate-menu row gx-0">
        <div className="text-menu col-12"></div>
      </div>
      <div className="donate-selected row gx-0">
        <div className="col-12 text-container">
          <div>
            {formType === 'newsletter-fiscale' && (
              <div className="text-thanks">{locale[window.language].thanksCodiceFiscale}</div>
            )}
            {formType === 'newsletter-residence' && (
              <div className="text-thanks">{locale[window.language].thanksResidence}</div>
            )}
          </div>
        </div>
        <div className="col-12 text-container">
          <div>
            <div className="text-thanks-summary">{locale[window.language].thanksSummaryNewsletter}</div>
          </div>
        </div>
      </div>
      <div className={`donate-btn row gx-0 justify-content-center `}>
        <div className="col option-container">
          <button
            type="button"
            className="btn btn-donate btn-rounded btn-block btn-primary"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            {locale[window.language]['go-to-site']}
          </button>
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="notes-text" dangerouslySetInnerHTML={{ __html: locale[window.language].privacyText }} />
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line object-curly-newline
const FormAnagrafica = ({
  index,
  icon1,
  icon2,
  icon3,
  ask1,
  ask1Text,
  ask2,
  ask2Text,
  ask3,
  ask3Text,
  campaignTag,
  paypalKey,
  stripeKey,
  env,
  thankYouUrl,
  formType,
  formShape,
}) => {
  const [step, setStep] = useState('donation');
  const [iconSelected, setIconSelected] = useState(icon1);
  const [selection, setSelection] = useState(1);
  const [selectionRegular, setSelectionRegular] = useState(1);
  const [singleDonation, setSingleDonation] = useState(true);
  const [donation, setDonation] = useState(ask1);
  const [askText, setAskText] = useState(ask1Text);
  const [name, setMainName] = useState('');
  const [newsletter, setMainNewsletter] = useState(false);
  const [surname, setMainSurname] = useState('');
  const [email, setMainEmail] = useState('');
  const [address, setMainAddress] = useState('');
  const [memoryPerson, setMainMemoryPerson] = useState('');
  const [idDirectChannel, setIdDirectChannel] = useState('');
  const [paypalPlanID, setPaypalPlanID] = useState('');

  useScript('https://www.google.com/recaptcha/api.js?render=6LdxET4dAAAAAE4ZyQHdePjS0kCAzRdDPPXCJexw');

  if (typeof gtag !== 'undefined') {
    // eslint-disable-next-line no-undef
    gtag('event', 'view_item', {
      currency: window.language === 'en' ? 'USD' : 'EUR',
      value: donation,
      items: [
        {
          id: campaignTag,
          name: campaignTag,
          quantity: 1,
          price: donation,
        },
      ],
    });
  }

  if (formShape === 'button') {
    return (
      <>
        <button
          type="button"
          className="btn btn-donate-basic btn-rounded btn-block btn-primary"
          data-mdb-toggle="modal"
          data-mdb-target={`#modal-form-${index}`}
        >
          {locale[window.language].donate}
        </button>

        <div
          className="modal fade"
          id={`modal-form-${index}`}
          tabIndex="-1"
          aria-labelledby="modal-form-label"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ maxWidth: '500px' }}>
              <div className="d-flex">
                <i
                  className="fas fa-window-close ml-auto"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                  style={{ fontSize: '30px', color: '#D31418' }}
                />
              </div>
              <div className="modal-body">
                <>
                  {step === 'donation' && (
                    <ChooseDonation
                      campaignTag={campaignTag}
                      env={env}
                      setStep={setStep}
                      icon1={icon1}
                      icon2={icon2}
                      icon3={icon3}
                      ask1={ask1}
                      ask1Text={ask1Text}
                      ask2={ask2}
                      ask2Text={ask2Text}
                      ask3={ask3}
                      ask3Text={ask3Text}
                      mainSelection={selection}
                      mainSelectionRegular={selectionRegular}
                      mainSingleDonation={true}
                      mainDonation={donation}
                      mainAskText={askText}
                      mainIcon={iconSelected}
                      setMainSelection={setSelection}
                      setMainSelectionRegular={setSelectionRegular}
                      setMainSingleDonation={setSingleDonation}
                      setMainDonation={setDonation}
                      setMainAsk={setAskText}
                      setMainIcon={setIconSelected}
                      formType={formType}
                    />
                  )}
                  {step === 'personal-data' && (
                    <SavePersonalData
                      index={index}
                      icon={iconSelected}
                      setStep={setStep}
                      singleDonation={singleDonation}
                      selectionRegular={selectionRegular}
                      donation={donation}
                      askText={askText}
                      mainName={name}
                      mainSurname={surname}
                      mainEmail={email}
                      mainAddress={address}
                      mainMemoryPerson={memoryPerson}
                      setMainName={setMainName}
                      setMainSurname={setMainSurname}
                      setMainEmail={setMainEmail}
                      setMainAddress={setMainAddress}
                      setMainMemoryPerson={setMainMemoryPerson}
                      setMainNewsletter={setMainNewsletter}
                      campaignTag={campaignTag}
                      env={env}
                      setIdDirectChannel={setIdDirectChannel}
                      paypalKey={paypalKey}
                      stripeKey={stripeKey}
                      setPaypalPlanID={setPaypalPlanID}
                      formType={formType}
                    />
                  )}
                  {step === 'pay-step' && (
                    <PayStep
                      index={index}
                      icon={iconSelected}
                      setStep={setStep}
                      singleDonation={singleDonation}
                      selectionRegular={selectionRegular}
                      donation={donation}
                      askText={askText}
                      name={name}
                      surname={surname}
                      email={email}
                      address={address}
                      memoryPerson={memoryPerson}
                      campaignTag={campaignTag}
                      paypalKey={paypalKey}
                      stripeKey={stripeKey}
                      idDirectChannel={idDirectChannel}
                      paypalPlanID={paypalPlanID}
                      env={env}
                      formType={formType}
                      newsletter={newsletter}
                    />
                  )}
                  {step === 'thankyou-page' && (
                    <ThankyouPage
                      index={index}
                      icon={iconSelected}
                      setStep={setStep}
                      singleDonation={singleDonation}
                      donation={donation}
                      askText={askText}
                      campaignTag={campaignTag}
                      thankYouUrl={thankYouUrl}
                      formType={formType}
                    />
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (formType === 'newsletter' || formType === 'newsletter-message') {
    return (
      <>
        {step === 'donation' && (
          <SaveNewsletter
            index={index}
            setStep={setStep}
            mainName={name}
            mainSurname={surname}
            mainEmail={email}
            setMainName={setMainName}
            setMainSurname={setMainSurname}
            setMainEmail={setMainEmail}
            campaignTag={campaignTag}
            env={env}
            setIdDirectChannel={setIdDirectChannel}
            formType={formType}
          />
        )}
        {step === 'thankyou-page-newsletter' && (
          <ThankyouPageNewsletter
            index={index}
            icon={iconSelected}
            setStep={setStep}
            singleDonation={singleDonation}
            donation={donation}
            askText={askText}
            campaignTag={campaignTag}
            thankYouUrl={thankYouUrl}
            formType={formType}
          />
        )}
      </>
    );
  }
  if (formType === 'newsletter-residence') {
    return (
      <>
        {step === 'donation' && (
          <SaveNewsletter
            index={index}
            setStep={setStep}
            mainName={name}
            mainSurname={surname}
            mainEmail={email}
            setMainName={setMainName}
            setMainSurname={setMainSurname}
            setMainEmail={setMainEmail}
            campaignTag={campaignTag}
            env={env}
            setIdDirectChannel={setIdDirectChannel}
            formType={formType}
          />
        )}
        {step === 'thankyou-page-newsletter' && (
          <ThankyouPageGeneric
            index={index}
            icon={iconSelected}
            setStep={setStep}
            singleDonation={singleDonation}
            donation={donation}
            askText={askText}
            campaignTag={campaignTag}
            thankYouUrl={thankYouUrl}
            formType={formType}
          />
        )}
      </>
    );
  }
  if (formType === 'newsletter-fiscale') {
    return (
      <>
        {step === 'donation' && (
          <SaveNewsletter
            index={index}
            setStep={setStep}
            mainName={name}
            mainSurname={surname}
            mainEmail={email}
            setMainName={setMainName}
            setMainSurname={setMainSurname}
            setMainEmail={setMainEmail}
            campaignTag={campaignTag}
            env={env}
            setIdDirectChannel={setIdDirectChannel}
            formType={formType}
          />
        )}
        {step === 'thankyou-page-newsletter' && (
          <ThankyouPageGeneric
            index={index}
            icon={iconSelected}
            setStep={setStep}
            singleDonation={singleDonation}
            donation={donation}
            askText={askText}
            campaignTag={campaignTag}
            thankYouUrl={thankYouUrl}
            formType={formType}
          />
        )}
      </>
    );
  }

  return (
    <>
      {step === 'donation' && (
        <ChooseDonation
          campaignTag={campaignTag}
          env={env}
          index={index}
          setStep={setStep}
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          ask1={ask1}
          ask1Text={ask1Text}
          ask2={ask2}
          ask2Text={ask2Text}
          ask3={ask3}
          ask3Text={ask3Text}
          mainSelection={selection}
          mainSelectionRegular={selectionRegular}
          mainSingleDonation={true}
          mainDonation={donation}
          mainAskText={askText}
          mainIcon={iconSelected}
          setMainSelection={setSelection}
          setMainSelectionRegular={setSelectionRegular}
          setMainSingleDonation={setSingleDonation}
          setMainDonation={setDonation}
          setMainAsk={setAskText}
          setMainIcon={setIconSelected}
          formType={formType}
        />
      )}
      {step === 'personal-data' && (
        <SavePersonalData
          index={index}
          icon={iconSelected}
          setStep={setStep}
          singleDonation={singleDonation}
          selectionRegular={selectionRegular}
          donation={donation}
          askText={askText}
          mainName={name}
          mainSurname={surname}
          mainEmail={email}
          mainAddress={address}
          mainMemoryPerson={memoryPerson}
          setMainName={setMainName}
          setMainSurname={setMainSurname}
          setMainEmail={setMainEmail}
          setMainAddress={setMainAddress}
          setMainMemoryPerson={setMainMemoryPerson}
          setMainNewsletter={setMainNewsletter}
          campaignTag={campaignTag}
          env={env}
          setIdDirectChannel={setIdDirectChannel}
          paypalKey={paypalKey}
          stripeKey={stripeKey}
          setPaypalPlanID={setPaypalPlanID}
          formType={formType}
        />
      )}
      {step === 'pay-step' && (
        <PayStep
          index={index}
          icon={iconSelected}
          setStep={setStep}
          singleDonation={singleDonation}
          selectionRegular={selectionRegular}
          donation={donation}
          askText={askText}
          name={name}
          surname={surname}
          email={email}
          address={address}
          memoryPerson={memoryPerson}
          campaignTag={campaignTag}
          paypalKey={paypalKey}
          stripeKey={stripeKey}
          idDirectChannel={idDirectChannel}
          paypalPlanID={paypalPlanID}
          env={env}
          formType={formType}
          newsletter={newsletter}
        />
      )}
      {step === 'thankyou-page' && (
        <ThankyouPage
          index={index}
          icon={iconSelected}
          setStep={setStep}
          singleDonation={singleDonation}
          donation={donation}
          askText={askText}
          campaignTag={campaignTag}
          thankYouUrl={thankYouUrl}
          formType={formType}
        />
      )}
    </>
  );
};

export default FormAnagrafica;
