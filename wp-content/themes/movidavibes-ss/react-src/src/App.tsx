/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Heade from "./components/heade";

import HomePage from "./pages/home-page";

import "./App.css";
import SignIn from "./pages/sign-in";


function App() {
    return (
        <div className="App">
        <Heade />
        </div>
    );
}

export default App;
