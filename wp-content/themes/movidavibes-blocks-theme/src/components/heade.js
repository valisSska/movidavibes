import React, { useState, useEffect, useRef } from "react";
import LogoMovidavibes from "./logo-movidavibes";
import { useMediaQuery } from '@react-hook/media-query';

import logOut from "../requests/log-out";

import "./components.css";

function Heade(elems) {
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [viewMenuProfile, setViewMenuProfile] = useState(false);
  const [moviToken, setMoviToken] = useState(localStorage.getItem('movitoken'));
  const [savedIdUser, setsavedIdUser] = useState(localStorage.getItem('id_user'));

  //const [isMobile, setIsMobile] = useState(false);
  //setIsMobile(useMediaQuery('(max-width: 767px)'));

  const formType = elems.formType;
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const menuTags= elems.menuTags;

//////////////////////////////LOGGED?////////////////////////////////////////////////////

const handleLogoutClick = () => {
  if ((moviToken !== null && savedIdUser !== null) && (moviToken !== undefined && savedIdUser !== undefined)) {
    logOut();
    setMoviToken(localStorage.getItem('movitoken'));
  }
};

  useEffect(() => {
    if ((moviToken !== null && savedIdUser !== null) && (moviToken !== undefined && savedIdUser !== undefined)) {
      setLogged(true);
    }
  }, [moviToken]); // useEffect 

  console.log('movitokeeeeeeeeeeeeennnnnnn   ' + moviToken);



const isMobile = useMediaQuery('(max-width: 767px)');

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      (menuRef.current && !menuRef.current.contains(event.target)) &&
      (buttonRef.current && event.target !== buttonRef.current) &&
      (buttonRef.current && !buttonRef.current.contains(event.target))
    ) {
      setViewMenuProfile(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menuRef]);

  function viewMenuProfileFunction() {
    if (viewMenuProfile) {
      setViewMenuProfile(false);
    } else {
      setViewMenuProfile(true);
    }
  }
  if(isMobile){
    return <div>IS MOBILE</div>
  }

  return (
    <div className="heade">
      <LogoMovidavibes />
      {formType === "search" && (
        <div className="search-input">
          <input className="search-input-text" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#959595"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      )}
      <div className="button-menu">
        <button ref={buttonRef} className="button-menu-content" onClick={viewMenuProfileFunction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#959595"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#959595"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path className="icon-profile" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path className="icon-profile2" fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </button>
        {viewMenuProfile === true && logged === true && (
          <div className="menu-profile-list" ref={menuRef}>
            <div className="menu-profile-list-content">
              <a className="visual-href-text-nolink" href={window.location + "/tesst"}>Profilo</a>
            </div>
            {menuTags.map((tag, index) => (
              <div className="menu-profile-list-content">
              <a className="visual-href-text-nolink" href={tag.url}>{tag.name}</a>
              </div>
            ))}
            <div className="menu-profile-list-content" onClick={handleLogoutClick}>
              <a className="visual-href-text-nolink">Esci</a>
            </div>
            <div style={{ height: "15px" }}></div>
          </div>
        )}
        {viewMenuProfile === true && logged === false && (
          <div className="menu-profile-list" ref={menuRef}>
            <div className="menu-profile-list-content">
              <a className="visual-href-text-nolink" href={window.location + "/tesst"}>Accedi</a>
            </div>
            <div className="menu-profile-list-content">
              <p>Registrati</p>
            </div>
            {menuTags.map((tag, index) => (
              <div className="menu-profile-list-content">
              <a className="visual-href-text-nolink" href={tag.url}>{tag.name}</a>
              </div>
            ))}
            <div style={{ height: "15px" }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Heade;