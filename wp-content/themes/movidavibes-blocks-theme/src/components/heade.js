/* eslint-disable */
import React from "react";
import Button, { useState, useEffect } from "react";
import LogoMovidavibes from "./logo-movidavibes";
import "./components.css";


function Heade() {
const [viewMenuProfile, setViewMenuProfile] = useState(false);
function viewMenuProfileFunction (){
    if(viewMenuProfile===false)
    {
    setViewMenuProfile(true);
    }
    else{
        setViewMenuProfile(false);
    }
}
    return (
       <div className="heade" >
        <LogoMovidavibes />
        <div className="search-input">
            <input className="search-input-text"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#959595" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
        <div className="button-menu">
        <button className="button-menu-content" onClick={viewMenuProfileFunction}>
            
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#959595" className="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#959595" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path className="icon-profile" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path className="icon-profile2" fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        </button> 
        {viewMenuProfile === true  && (
            <div className="menu-profile-list">
                    <div className="menu-profile-list-content"><a href={window. location + "/tesst"}>Accedi</a></div>
                    <div className="menu-profile-list-content"><p>Registrati</p></div>
                    <div style={{height:'15px'}}></div>
            </div>
        )}
        
        </div>
        
       </div> 
    );
}

export default Heade;