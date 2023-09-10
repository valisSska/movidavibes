/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
// import { useState } from 'react';
import React, { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editFormCheckout = ({ className, attributes, setAttributes }) => {
  const donation = '4,80';

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

  const onChangeIcon1 = (value) => {
    setAttributes({
      icon1: value,
    });
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

  const onChangeAsk1Text = (value) => {
    setAttributes({ ask1Text: value });
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
        <PanelBody title={'Special Settings'} initialOpen={true}>
          <PanelRow>
            <TextControl label="Tag Line testo" value={attributes.ask1Text} onChange={onChangeAsk1Text} />
          </PanelRow>
          <PanelRow>
            <TextControl label="tag campagna" value={attributes.campaignTag} onChange={onChangeCampaignTag} />
          </PanelRow>
          <PanelRow>
            <TextControl label="url thank you" value={attributes.thankYouUrl} onChange={onChangeThankYouUrl} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <>
        <div className="donate-notmenu row gx-0">
          <div className="col-6">
            <span className={`text-menu`}>Contributo</span>
          </div>
        </div>
        <div className="donate-selected-checkout row gx-0">
          <div className="col-8 text-container row align-items-center">
            <div>
              <div className="icon-title">Checkout</div>
              <div className="icon-price">{donation}€</div>
            </div>
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

export const saveFormCheckout = ({ attributes }) => (
  <div style={{ backgroundColor: 'transparent' }}>
    <div className="container px-0">
      <div
        id="form-checkout-root"
        className="form-checkout-root"
        data-card-color={attributes.cardColor}
        data-lng={attributes.lang}
        data-icon1={attributes.icon1}
        data-ask1={attributes.ask1}
        data-ask1-text={attributes.ask1Text}
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
