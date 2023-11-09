import { useState } from 'react';
import React, { __ } from '@wordpress/i18n';
import LogoMovidavibes from "./logo-movidavibes";

import './components.css';
import { InspectorControls } from '@wordpress/block-editor';
import {SelectControl} from "@wordpress/components";

export const editHeade = ({ attributes, setAttributes }) => {
    const onChangeFormType = (value) => {
        setAttributes({
            formType: value,
        });
    };
  return (
      <>
          <InspectorControls>
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
                      value: 'search',
                      label: 'Con il filtro',
                  },
              ]}
          />
              </InspectorControls>
    <div className="heade" >
        <LogoMovidavibes />
        <div className="search-input">
            <input className="search-input-text"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#959595" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
        <div className="button-menu">
        <button className="button-menu-content">
            
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#959595" className="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#959595" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path className="icon-profile" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path className="icon-profile2" fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        </button>
        
        </div>
        
       </div>
      </>
  );
};

export const saveHeade = ({ attributes }) => (
      <div
        id="movidavibes-header-block"
        data-form-type={attributes.formType}
        />
      
);
