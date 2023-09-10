import { useState } from 'react';
import React, { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload, PanelColorSettings } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import paletteProterrasancta from './palette-proterrasancta';

export const editFormCards = ({ className, attributes, setAttributes }) => {
  const { mediaID, mediaURL, pdfID, pdfURL } = attributes;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [donation] = useState('4,80');

  const onChangeAsk1 = (value) => {
    setAttributes({ ask1: value });
  };

  const onChangeAsk1Text = (value) => {
    setAttributes({ ask1Text: value });
  };

  const onChangeIconText = (value) => {
    setAttributes({ iconText: value });
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

  const onSelectImage = (media) => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
    });
  };

  const onSelectPdf = (media) => {
    setAttributes({
      pdfURL: media.url,
      pdfID: media.id,
    });
  };

  const icons = [
    {
      value: 'natale',
      label: 'natale',
    },
    {
      value: 'educazione',
      label: 'educazione',
    },
    {
      value: 'compleanno',
      label: 'compleanno',
    },
    {
      value: 'battesimo',
      label: 'battesimo',
    },
    {
      value: 'comunione',
      label: 'comunione',
    },
    {
      value: 'cresima',
      label: 'cresima',
    },
    {
      value: 'matrimonio',
      label: 'matrimonio',
    },
    {
      value: 'anniversario',
      label: 'anniversario',
    },
    {
      value: 'mamma',
      label: 'festa della mamma',
    },
    {
      value: 'papa',
      label: 'festa del papa',
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
        <SelectControl onChange={onChangeIcon1} value={attributes.icon1} label={__('Evenienza')} options={icons} />
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
            <TextControl label="cifra" value={attributes.ask1} onChange={onChangeAsk1} />
          </PanelRow>
          <PanelRow>
            <TextControl label="testo evenienza" value={attributes.ask1Text} onChange={onChangeAsk1Text} />
          </PanelRow>
          <PanelRow>
            <TextControl label="testo icona" value={attributes.iconText} onChange={onChangeIconText} />
          </PanelRow>
          <PanelRow>
            <TextControl label="url thank you" value={attributes.thankYouUrl} onChange={onChangeThankYouUrl} />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <>
        <div className="donate-menu row gx-0">
          <div className="col-12">
            <span className="text-menu selected">CARTOLINA</span>
          </div>
        </div>
        <div className="donate-selected row gx-0">
          <div className="col-4">
            <div className="icon-container m-auto">
              <img
                className="donate-icon"
                src={`/wp-content/themes/pro-terra-sancta-fixed/assets/images/e-cards/${attributes.icon1}.png`}
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
        <div className="donate-input row gx-0 justify-content-center">
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
            render={({ open }) => (
              <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                {!mediaID ? (
                  __('Upload Image', 'rovagnati-us')
                ) : (
                  <img src={mediaURL} alt={__('Icon Image', 'rovagnati-us')} />
                )}
              </Button>
            )}
          />
        </div>
        <div className="donate-input row gx-0 justify-content-center">
          <MediaUpload
            onSelect={onSelectPdf}
            allowedTypes="pdf"
            value={pdfID}
            render={({ open }) => (
              <Button className={pdfID ? 'image-button' : 'button button-large'} onClick={open}>
                {!pdfID ? __('Upload PDF', 'rovagnati-us') : <span>{pdfURL}</span>}
              </Button>
            )}
          />
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

export const saveFormCards = ({ attributes }) => (
  <div style={{ backgroundColor: 'transparent' }}>
    <div className="container px-0">
      <div
        className="form-cards-root"
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
        data-image={attributes.mediaURL}
        data-pdf={attributes.pdfURL}
        data-icon-text={attributes.iconText}
      />
    </div>
  </div>
);
