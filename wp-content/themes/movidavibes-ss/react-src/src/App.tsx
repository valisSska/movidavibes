/* eslint-disable */
import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Heade from "./components/heade";

import HomePage from "./pages/home-page";

import "./App.css";
import SignIn from "./pages/sign-in";

declare global {
    interface Window {
        homeurl: any; // Puoi specificare il tipo corretto qui, ad esempio 'any', 'string[]', ecc.
    }
}

function App() {
    const [url, setUrl] = useState("/");
    useEffect(() => {
        // l'accesso ai dati dalla variabile globale
        setUrl(window.homeurl);
    }, []);

    return (
        <div className="App">
        <Heade />
        </div>
    );
}

export default App;
