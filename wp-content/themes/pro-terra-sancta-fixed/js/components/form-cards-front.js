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
  env,
  setStep,
  ask1,
  ask1Text,
  mainSelection,
  mainSingleDonation,
  mainDonation,
  mainAskText,
  mainIcon,
  setMainDonation,
  cardDate,
  setMainCardDate,
  formType,
  image,
  iconText,
}) => {
  const [icon, setIcon] = useState(mainIcon);
  const [donation, setDonation] = useState(
    new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(mainDonation),
  );
  const [valueDate, setValueDate] = useState(cardDate);

  const nextStep = () => {
    if (env === 'prod' && Number.parseFloat(donation) < ask1) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        title: locale[window.language].warningError,
        text: locale[window.language].minDonationMIN + ask1,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#b91521',
      });
    } else {
      setStep('personal-data');
    }
  };

  const changeDonation = (event) => {
    setDonation(new Intl.NumberFormat(window.language, { minimumFractionDigits: 2 }).format(event.target.value));
    setMainDonation(event.target.value);
  };

  const changeCardDate = (event) => {
    setValueDate(event.target.value);
    setMainCardDate(event.target.value);
  };

  return (
    <>
      <div className="donate-menu row gx-0">
        <div className={`text-menu  col-12`}>
          <span className={`text-menu selected`}>{`e-card ${ask1Text}`}</span>
        </div>
      </div>
      {formType !== 'in-memory' && (
        <div className="donate-selected-small row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto d-flex">
              <div className="m-auto">
                <img
                  className="donate-icon"
                  src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/e-cards/${icon}.png`}
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
              <div className="icon-ask">{iconText}</div>
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
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container" style={{ paddingTop: 0 }}>
          <div className="input-container selected" style={{ paddingTop: 0 }}>
            <div className="md-form">
              <i
                className={`fas input-prefix font-weight-bold ${
                  window.language === 'en' ? 'fa-dollar-sign' : 'fa-euro-sign'
                }`}
              />
              <input
                type="number"
                id="reddito"
                min={ask1}
                step="1"
                className="form-control font-weight-bold with-icon"
                placeholder={locale[window.language].selectOtherAmount}
                onChange={changeDonation}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container" style={{ paddingTop: 0 }}>
          <div className="input-container selected" style={{ paddingTop: 0 }}>
            <div className="sender-text-small">{locale[window.language].insertDate}</div>
            <div className="md-form">
              <input
                type="date"
                id="date-card"
                value={valueDate}
                className="form-control font-weight-bold"
                onChange={changeCardDate}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-0">
        <div className="col-12">
          <div className="m-auto d-flex">
            <div className="m-auto">
              <img className="ecard-image" src={image} alt="icon-campaign" />
            </div>
          </div>
        </div>
      </div>
      <div className="donate-btn row gx-0 justify-content-center">
        <div className="col option-container">
          <button type="button" className="btn btn-donate btn-rounded btn-block btn-primary" onClick={() => nextStep()}>
            {locale[window.language].forward}
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
  setStep,
  icon,
  donation,
  askText,
  singleDonation,
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
  iconText,
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
    const formElement = document.querySelector('.form-cards-root');
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
              setStep('receiver');
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
        <div className={`text-menu  col-12`}>
          <span className={`text-menu selected`}>{`e-card ${askText}`}</span>
        </div>
      </div>
      {formType !== 'in-memory' && (
        <div className="donate-selected row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto d-flex">
              <div className="m-auto">
                <img
                  className="donate-icon"
                  src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/e-cards/${icon}.png`}
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
              <div className="icon-ask">{iconText}</div>
            </div>
          </div>
        </div>
      )}
      <div className="donate-data row gx-0 justify-content-center">
        <div className="sender-text">{locale[window.language].sender}</div>
        <div className="sender-text-small">{locale[window.language].senderSmall}</div>
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
              {locale[window.language].forward}
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

// eslint-disable-next-line no-unused-vars
const CheckoutForm = ({
  icon,
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
  pdf,
  receiverName,
  receiverSurname,
  receiverEmail,
  dedicated,
  cardDate,
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

      if (gtag !== 'undefined') {
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

      fetch(`/wp-json/proterrasancta-api/v1/donation-e-card`, {
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
          pdf,
          receiverName,
          receiverSurname,
          receiverEmail,
          dedicated,
          icon,
          cardDate: DateTime.fromISO(cardDate).toFormat('yyyy-LL-dd'),
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
  pdf,
  receiverName,
  receiverSurname,
  receiverEmail,
  dedicated,
  iconText,
  cardDate,
}) => {
  const [selection, setSelection] = useState(1);
  const [clientSecret, setClientSecret] = useState();
  const [customerId, setCustomerId] = useState();
  const [stripePromise, setStripePromise] = useState();
  const [subscriptionId, setSubscriptionId] = useState('');
  const [loading, setLoading] = useState(false);
  const [satispayPaymentId, setSatispayPaymentId] = useState();

  useScript(
    // env === 'test' ? 'https://staging.online.satispay.com/web-button.js' : 'https://online.satispay.com/web-button.js',
    'https://online.satispay.com/web-button.js',
  );

  useEffect(() => {
    const formElement = document.querySelector('.form-cards-root');
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const changeButtonPayment = (button) => {
    setSelection(button);
    if (button === 3) {
      console.debug('satispay: init ');

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

          fetch(`/wp-json/proterrasancta-api/v1/donation-e-card`, {
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
              pdf,
              receiverName,
              receiverSurname,
              receiverEmail,
              dedicated,
              icon,
              cardDate: DateTime.fromISO(cardDate).toFormat('yyyy-LL-dd'),
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
        currency: window.language === 'en' ? 'USD' : 'EUR',
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
        <i className="fas fa-chevron-left arrow-back-button" onClick={() => setStep('receiver')} />
        <div className={`text-menu  col-12`}>
          <span className={`text-menu selected`}>{`e-card ${askText}`}</span>
        </div>
      </div>
      {formType !== 'in-memory' && (
        <div className="donate-selected row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto d-flex">
              <div className="m-auto">
                <img
                  className="donate-icon"
                  src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/e-cards/${icon}.png`}
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
              <div className="icon-ask">{iconText}</div>
            </div>
          </div>
        </div>
      )}
      <div className="donate-select row gx-0 justify-content-center">
        <div className="col-6 col-md-4 option-container">
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
        <div className="col-6 col-md-4 option-container">
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
        <div className="col-12 col-md-4 option-container">
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

                    fetch(`/wp-json/proterrasancta-api/v1/donation-e-card`, {
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
                        pdf,
                        receiverName,
                        receiverSurname,
                        receiverEmail,
                        dedicated,
                        icon,
                        cardDate: DateTime.fromISO(cardDate).toFormat('yyyy-LL-dd'),
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

                fetch(`/wp-json/proterrasancta-api/v1/donation-e-card`, {
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
                    pdf,
                    receiverName,
                    receiverSurname,
                    receiverEmail,
                    dedicated,
                    icon,
                    cardDate: DateTime.fromISO(cardDate).toFormat('yyyy-LL-dd'),
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
                icon={icon}
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
                pdf={pdf}
                receiverName={receiverName}
                receiverSurname={receiverSurname}
                receiverEmail={receiverEmail}
                dedicated={dedicated}
                cardDate={cardDate}
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

const SaveRecevier = ({
  setStep,
  campaignTag,
  icon,
  askText,
  donation,
  recevierSurname,
  receiverName,
  receiverEmail,
  setReceiverSurname,
  setReceiverName,
  setReceiverEmail,
  setDedicated,
  iconText,
}) => {
  const [name, setName] = useState(receiverName);
  const [surname, setSurname] = useState(recevierSurname);
  const [email, setEmail] = useState(receiverEmail);
  const [message, setMessage] = useState('');
  const [newsletter, _] = useState(true);
  const [campaign] = useState(campaignTag);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    // eslint-disable-next-line no-undef
    grecaptcha.ready(() => {
      // eslint-disable-next-line no-undef
      grecaptcha.execute('6LdxET4dAAAAAE4ZyQHdePjS0kCAzRdDPPXCJexw', { action: 'submit' }).then(async (token) => {
        setLoading(false);
        setStep('pay-step');

        setLoading(false);
        setStep('pay-step');

        return true;
      });
    });
  };

  return (
    <>
      <div className="donate-menu row gx-0">
        <i className="fas fa-chevron-left arrow-back-button" onClick={() => setStep('personal-data')} />
        <div className={`text-menu  col-12`}>
          <span className={`text-menu selected`}>{`e-card ${askText}`}</span>
        </div>
      </div>
      <div className="donate-selected row gx-0">
        <div className="col-4">
          <div className="icon-container m-auto d-flex">
            <div className="m-auto">
              <img
                className="donate-icon"
                src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/e-cards/${icon}.png`}
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
            <div className="icon-ask">{iconText}</div>
          </div>
        </div>
      </div>
      <div className="donate-data row gx-0 justify-content-center">
        <div className="sender-text">{locale[window.language].receiver}</div>
        <div className="sender-text-small">{locale[window.language].receiverSmall}</div>
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
                  setReceiverName(event.target.value);
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
                  setReceiverSurname(event.target.value);
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
                  setReceiverEmail(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 option-container">
          <div className="input-container selected">
            <div className="md-form">
              <textarea
                id="message"
                className="form-control font-weight-bold with-icon"
                placeholder={locale[window.language].dedicated}
                value={message}
                rows="4"
                onChange={(event) => {
                  setMessage(event.target.value);
                  setDedicated(event.target.value);
                }}
              />
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
              {locale[window.language].saveData}
            </button>
          )}
        </div>
      </div>
      <div className="donate-input row gx-0 justify-content-center">
        <div className="col option-container">
          <div className="notes-text" dangerouslySetInnerHTML={{ __html: locale[window.language].eCardText }} />
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line no-unused-vars, object-curly-newline
const ThankyouPage = ({ setStep, icon, donation, askText, singleDonation, campaignTag, thankYouUrl, formType }) => {
  useEffect(() => {
    const formElement = document.querySelector('.form-cards-root');
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  if (thankYouUrl) {
    window.location.href = thankYouUrl;
    return <></>;
  }

  return (
    <>
      <div className="donate-menu row gx-0">
        <div className={`text-menu  col-12`}>
          <span className={`text-menu selected`}>{`e-card ${askText}`}</span>
        </div>
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

// eslint-disable-next-line object-curly-newline
const FormCards = ({
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
  image,
  pdf,
  iconText,
}) => {
  const [step, setStep] = useState('donation');
  const [iconSelected, setIconSelected] = useState(icon1);
  const [selection, setSelection] = useState(1);
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
  const [receiverName, setReceiverName] = useState('');
  const [receiverSurname, setReceiverSurname] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [dedicated, setDedicated] = useState('');
  const [cardDate, setCardDate] = useState(DateTime.now().toFormat('yyyy-LL-dd'));

  useScript('https://www.google.com/recaptcha/api.js?render=6LdxET4dAAAAAE4ZyQHdePjS0kCAzRdDPPXCJexw');

  if (formShape === 'button') {
    return (
      <>
        <button
          type="button"
          className="btn btn-donate-basic btn-rounded btn-block btn-primary"
          data-mdb-toggle="modal"
          data-mdb-target={`#modal-form${ask1Text.replace(/ /g, '')}`}
        >
          {locale[window.language].donateSelect}
        </button>

        <div
          className="modal fade"
          id={`modal-form${ask1Text.replace(/ /g, '')}`}
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
                      mainSingleDonation={true}
                      mainDonation={donation}
                      mainAskText={askText}
                      mainIcon={iconSelected}
                      setMainSelection={setSelection}
                      setMainSingleDonation={setSingleDonation}
                      setMainDonation={setDonation}
                      setMainAsk={setAskText}
                      setMainIcon={setIconSelected}
                      formType={formType}
                      image={image}
                      iconText={iconText}
                      cardDate={cardDate}
                      setMainCardDate={setCardDate}
                    />
                  )}
                  {step === 'personal-data' && (
                    <SavePersonalData
                      icon={iconSelected}
                      setStep={setStep}
                      singleDonation={singleDonation}
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
                      iconText={iconText}
                    />
                  )}
                  {step === 'receiver' && (
                    <SaveRecevier
                      icon={iconSelected}
                      setStep={setStep}
                      receiverName={receiverName}
                      receiverSurname={receiverSurname}
                      receiverEmail={receiverEmail}
                      donation={donation}
                      askText={askText}
                      setReceiverName={setReceiverName}
                      setReceiverSurname={setReceiverSurname}
                      setReceiverEmail={setReceiverEmail}
                      setDedicated={setDedicated}
                      campaignTag={campaignTag}
                      env={env}
                      setIdDirectChannel={setIdDirectChannel}
                      formType={formType}
                      iconText={iconText}
                    />
                  )}
                  {step === 'pay-step' && (
                    <PayStep
                      icon={iconSelected}
                      setStep={setStep}
                      singleDonation={singleDonation}
                      donation={donation}
                      askText={askText}
                      name={name}
                      surname={surname}
                      email={email}
                      receiverName={receiverName}
                      receiverSurname={receiverSurname}
                      receiverEmail={receiverEmail}
                      dedicated={dedicated}
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
                      pdf={pdf}
                      iconText={iconText}
                      cardDate={cardDate}
                    />
                  )}
                  {step === 'thankyou-page' && (
                    <ThankyouPage
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

  return (
    <>
      {step === 'donation' && (
        <ChooseDonation
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
          mainSingleDonation={true}
          mainDonation={donation}
          mainAskText={askText}
          mainIcon={iconSelected}
          setMainSelection={setSelection}
          setMainSingleDonation={setSingleDonation}
          setMainDonation={setDonation}
          setMainAsk={setAskText}
          setMainIcon={setIconSelected}
          formType={formType}
          image={image}
          iconText={iconText}
          cardDate={cardDate}
          setMainCardDate={setCardDate}
        />
      )}
      {step === 'personal-data' && (
        <SavePersonalData
          icon={iconSelected}
          setStep={setStep}
          singleDonation={singleDonation}
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
          iconText={iconText}
        />
      )}
      {step === 'receiver' && (
        <SaveRecevier
          icon={iconSelected}
          donation={donation}
          askText={askText}
          setStep={setStep}
          receiverName={receiverName}
          receiverSurname={receiverSurname}
          receiverEmail={receiverEmail}
          setReceiverName={setReceiverName}
          setReceiverSurname={setReceiverSurname}
          setReceiverEmail={setReceiverEmail}
          setDedicated={setDedicated}
          campaignTag={campaignTag}
          env={env}
          setIdDirectChannel={setIdDirectChannel}
          formType={formType}
          iconText={iconText}
        />
      )}
      {step === 'pay-step' && (
        <PayStep
          icon={iconSelected}
          setStep={setStep}
          singleDonation={singleDonation}
          donation={donation}
          askText={askText}
          name={name}
          surname={surname}
          email={email}
          receiverName={receiverName}
          receiverSurname={receiverSurname}
          receiverEmail={receiverEmail}
          dedicated={dedicated}
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
          pdf={pdf}
          iconText={iconText}
          cardDate={cardDate}
        />
      )}
      {step === 'thankyou-page' && (
        <ThankyouPage
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

export default FormCards;
