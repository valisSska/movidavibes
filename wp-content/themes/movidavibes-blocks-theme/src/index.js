import './styles/main.scss';
import Heade from './components/heade';
import React from 'react';
import ReactDOM from 'react-dom';
import MoviLogin from './components/movidavibes-login-form-front';
import MoviSignUp from './components/movidavibes-signup-form-front';

const moviHeader=document.querySelector('#movidavibes-header-block');

if(moviHeader){
    ReactDOM.render(<Heade />,moviHeader)
};


const moviLogin=document.querySelector('#movidavibes-login-form');

if(moviLogin){
    ReactDOM.render(<MoviLogin />,moviLogin)
};
const moviSignUp=document.querySelector('#movidavibes-signup-form');

if(moviSignUp){
    ReactDOM.render(<MoviSignUp />,moviSignUp)
};
