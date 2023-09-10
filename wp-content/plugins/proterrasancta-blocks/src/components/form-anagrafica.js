/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { useState } from 'react';
import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editFormAnagrafica = ({ className, attributes, setAttributes }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [singleDonation, setSingleDonation] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selection, setSelection] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [donation, setDonation] = useState('4,80');

  const changeButtonDonation = (number, button) => {
    setDonation(new Intl.NumberFormat('it-IT', { minimumFractionDigits: 2 }).format(Number.parseFloat(number)));
    setSelection(button);
  };

  const onChangeAsk1 = (value) => {
    setAttributes({ ask1: value });
  };

  const onChangeAsk1Text = (value) => {
    setAttributes({ ask1Text: value });
  };

  const onChangeAsk2 = (value) => {
    setAttributes({ ask2: value });
  };

  const onChangeAsk2Text = (value) => {
    setAttributes({ ask2Text: value });
  };

  const onChangeAsk3 = (value) => {
    setAttributes({ ask3: value });
  };

  const onChangeAsk3Text = (value) => {
    setAttributes({ ask3Text: value });
  };

  const onChangeThankYouUrl = (value) => {
    setAttributes({ thankYouUrl: value });
  };

  const onChangeCampaignTag = (value) => {
    setAttributes({ campaignTag: value });
  };

  const onChangeBackgroundColor = (color) => {
    setAttributes({ backgroundColor: color });
  };

  const onChangeTextColor = (color) => {
    setAttributes({ textColor: color });
  };

  const onChangeCardColor = (color) => {
    setAttributes({ cardColor: color });
  };

  const onChangeLang = (value) => {
    setAttributes({
      lang: value,
    });
  };

  const onChangeFormType = (value) => {
    setAttributes({
      formType: value,
    });
  };

  const onChangeFormShape = (value) => {
    setAttributes({
      formShape: value,
    });
  };

  const onChangePaypal = (value) => {
    setAttributes({
      paypalKey: value,
    });
  };

  const onChangeEnv = (value) => {
    setAttributes({
      env: value,
    });
  };

  const onChangeStripe = (value) => {
    setAttributes({
      stripeKey: value,
    });
  };

  const onChangeIcon1 = (value) => {
    setAttributes({
      icon1: value,
    });
  };

  const onChangeIcon2 = (value) => {
    setAttributes({
      icon2: value,
    });
  };

  const onChangeIcon3 = (value) => {
    setAttributes({
      icon3: value,
    });
  };

  const icons = [
    {
      value: 'assistenza',
      label: 'assistenza',
    },
    {
      value: 'attivita',
      label: 'attivita',
    },
    {
      value: 'conservazione2',
      label: 'conservazione',
    },
    {
      value: 'distribuzione',
      label: 'distribuzione',
    },
    {
      value: 'educazione2',
      label: 'educazione',
    },
    {
      value: 'formazione',
      label: 'formazione',
    },
    {
      value: 'ricostruzione',
      label: 'ricostruzione',
    },
    {
      value: 'supporto',
      label: 'supporto',
    },
    {
      value: 'luce',
      label: 'luce',
    },
    {
      value: 'acqua',
      label: 'acqua',
    },
    {
      value: 'famiglia',
      label: 'famiglia',
    },
    {
      value: 'conservazione-black',
      label: 'luoghi',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: attributes.backgroundColor,
      }}
      className={className}
    >
      <InspectorControls>
        <SelectControl
          onChange={onChangeLang}
          value={attributes.lang}
          label={__('Seleziona una Lingua')}
          options={[
            {
              value: 'it',
              label: 'Italiano',
            },
            {
              value: 'en',
              label: 'Inglese',
            },
            {
              value: 'fr',
              label: 'Francese',
            },
            {
              value: 'es',
              label: 'Spagnolo',
            },
            {
              value: 'de',
              label: 'Tedesco',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeFormType}
          value={attributes.formType}
          label={__('Seleziona il tipo form')}
          options={[
            {
              value: 'standard',
              label: 'Standard',
            },
            {
              value: 'recurring',
              label: 'Solo Mensili',
            },
            {
              value: 'newsletter',
              label: 'Solo Anagrafiche',
            },
            {
              value: 'newsletter-residence',
              label: 'Anagrafica con preghiera',
            },
            {
              value: 'newsletter-fiscale',
              label: 'Anagrafica con C.Fiscale',
            },
            {
              value: 'newsletter-message',
              label: 'Anagrafiche con messaggio',
            },
            {
              value: 'in-memory',
              label: 'In Memoria',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeFormShape}
          value={attributes.formShape}
          label={__('Seleziona la forma')}
          options={[
            {
              value: 'form',
              label: 'Standard',
            },
            {
              value: 'button',
              label: 'Pulsante',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeEnv}
          value={attributes.env}
          label={__('Ambiente Direct Channel')}
          options={[
            {
              value: 'test',
              label: 'Test',
            },
            {
              value: 'prod',
              label: 'Produzione',
            },
          ]}
        />
        <SelectControl
          onChange={onChangePaypal}
          value={attributes.paypalKey}
          label={__('Seleziona Conto Paypal')}
          options={[
            {
              value: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL',
              label: 'Paypal Live',
            },
            {
              value: 'AXlo5BqnfFZyW1uZxx5gkgYegrUCI86f7Q65TIABhmOq4Kt5JEb1zM1NdRUKDtV0obCFXmhjIC1tXxQ8',
              label: 'Paypal Network',
            },
            {
              value: 'AVdEgYKKXtkm_xhHmQJgVm2Hd-HPVvZUwHBEiTtXaxgJs-YZkK8WlW-loLeaaLBEMY-6GLyxsfS9DQa3',
              label: 'Paypal Test',
            },
          ]}
        />
        <SelectControl
          onChange={onChangeStripe}
          value={attributes.stripeKey}
          label={__('Seleziona Conto Stripe')}
          options={[
            {
              value: 'pk_live_qfQpAgn0ginBe73s04pdgodQ',
              label: 'Stripe Live',
            },
            {
              value:
                'pk_live_51HoUXjJhU1LmKSdSbkxGlrACRcf4LTv1RqqzDcqKytqJzbs1tzvrgsw5sRp5USAUGdCg8fHwNbTtvWCTlUno6gSB00fvqTKLzg',
              label: 'Stripe Network',
            },
            {
              value: 'pk_test_j3XSbxlNWkY2F8qdAYOmUEB1',
              label: 'Stripe Test',
            },
            {
              value: 'pk_test_XUIpXpyaGuuw0Dc9Ng80xFWs',
              label: 'Stripe Test Default',
            },
          ]}
        />
        <SelectControl onChange={onChangeIcon1} value={attributes.icon1} label={__('Icona 1')} options={icons} />
        <SelectControl onChange={onChangeIcon2} value={attributes.icon2} label={__('Icona 2')} options={icons} />
        <SelectControl onChange={onChangeIcon3} value={attributes.icon3} label={__('Icona 3')} options={icons} />
        <PanelColorSettings
          title={'Background Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.backgroundColor,
              onChange: onChangeBackgroundColor,
              label: __('Background Color'),
            },
          ]}
        />
        <PanelColorSettings
          title={'Title Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.textColor,
              onChange: onChangeTextColor,
              label: __('Title Color'),
            },
          ]}
        />
        <PanelColorSettings
          title={'Card Color'}
          colorSettings={[
            {
              colors: paletteProterrasancta,
              value: attributes.cardColor,
              onChange: onChangeCardColor,
              label: __('Card Color'),
            },
          ]}
        />
        <PanelBody title={'Special Settings'} initialOpen={false}>
          <PanelRow>
            <TextControl label="tag campagna" value={attributes.campaignTag} onChange={onChangeCampaignTag} />
          </PanelRow>
          <PanelRow>
            <TextControl label="ask1" value={attributes.ask1} onChange={onChangeAsk1} />
          </PanelRow>
          <PanelRow>
            <TextControl label="ask1 testo" value={attributes.ask1Text} onChange={onChangeAsk1Text} />
          </PanelRow>
          <PanelRow>
            <TextControl label="ask2" value={attributes.ask2} onChange={onChangeAsk2} />
          </PanelRow>
          <PanelRow>
            <TextControl label="ask2 testo" value={attributes.ask2Text} onChange={onChangeAsk2Text} />
          </PanelRow>
          <PanelRow>
            <TextControl label="ask3" value={attributes.ask3} onChange={onChangeAsk3} />
          </PanelRow>
          <PanelRow>
            <TextControl label="ask3 testo" value={attributes.ask3Text} onChange={onChangeAsk3Text} />
          </PanelRow>
          <PanelRow>
            <TextControl label="url thank you" value={attributes.thankYouUrl} onChange={onChangeThankYouUrl} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <>
        <div className="donate-menu row gx-0">
          <div className="col-6" onClick={() => setSingleDonation(true)}>
            <span className={`text-menu ${singleDonation ? 'selected' : ''}`}>Donazione singola</span>
          </div>
          <div className="col-6 text-menu" onClick={() => setSingleDonation(false)}>
            <span className={`text-menu ${!singleDonation ? 'selected' : ''}`}>Donazione mensile</span>
          </div>
        </div>
        <div className="donate-selected row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto">
              <img
                className="donate-icon"
                src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/${attributes.icon1}.svg`}
                alt="icon-campaign"
              />
              <div className="divider" />
            </div>
          </div>
          <div className="col-8 text-container row align-items-center">
            <div>
              <div className="icon-title">Donare</div>
              <div className="icon-price">{donation}€</div>
              <div className="icon-ask"> {attributes.ask1Text}</div>
            </div>
          </div>
        </div>
        <div className="donate-select row gx-0 justify-content-center">
          <div className="col option-container">
            <button
              type="button"
              className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 1 ? 'selected' : ''}`}
              onClick={() => changeButtonDonation(attributes.ask1, 1)}
            >
              {attributes.ask1}€
            </button>
          </div>
          <div className="col option-container">
            <button
              type="button"
              className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 2 ? 'selected' : ''}`}
              onClick={() => changeButtonDonation(attributes.ask2, 2)}
            >
              {attributes.ask2}€
            </button>
          </div>
          <div className="col option-container">
            <button
              type="button"
              className={`btn btn-options btn-rounded btn-block btn-primary ${selection === 3 ? 'selected' : ''}`}
              onClick={() => changeButtonDonation(attributes.ask3, 3)}
            >
              {attributes.ask3}€
            </button>
          </div>
        </div>
        <div className="donate-input row gx-0 justify-content-center">
          <div className="col option-container">
            <div className="notes-text">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
              I will give you a complete account of the system, and expound the actual teachings of the great explorer
              of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
            </div>
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
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export const saveFormAnagrafica = ({ attributes }) => (
  <div style={{ backgroundColor: 'transparent' }}>
    <div className="container px-0">
      <div
        id="form-anagrafica-root"
        className="form-anagrafica-root"
        data-card-color={attributes.cardColor}
        data-lng={attributes.lang}
        data-icon1={attributes.icon1}
        data-icon2={attributes.icon2}
        data-icon3={attributes.icon3}
        data-ask1={attributes.ask1}
        data-ask2={attributes.ask2}
        data-ask3={attributes.ask3}
        data-ask1-text={attributes.ask1Text}
        data-ask2-text={attributes.ask2Text}
        data-ask3-text={attributes.ask3Text}
        data-campaign-tag={attributes.campaignTag}
        data-paypal-key={attributes.paypalKey}
        data-stripe-key={attributes.stripeKey}
        data-env={attributes.env}
        data-thank-you-url={attributes.thankYouUrl}
        data-form-type={attributes.formType}
        data-form-shape={attributes.formShape}
      />
    </div>
  </div>
);
