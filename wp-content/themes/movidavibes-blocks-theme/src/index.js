import React from 'react';
import ReactDOM from 'react-dom';


import './styles/main.scss';
import Heade from './components/heade';
import MoviLogin from './components/movidavibes-login-form-front';
import MoviSignUp from './components/movidavibes-signup-form-front';

const moviHeader=document.querySelector('#movidavibes-header-block');

if(moviHeader){
    const formType=moviHeader.getAttribute('data-form-type');
    const menuTags=moviHeader.getAttribute('data-tags-menu');
    ReactDOM.render(<Heade formType={formType} menuTags={JSON.parse(menuTags)} />,moviHeader)
};


const moviLogin=document.querySelector('#movidavibes-login-form');

if(moviLogin){
    ReactDOM.render(<MoviLogin />,moviLogin)
};
const moviSignUp=document.querySelector('#movidavibes-signup-form');

if(moviSignUp){
    ReactDOM.render(<MoviSignUp />,moviSignUp)
};
