import React, { useState, useEffect } from 'react';
import "./components.css";

function MoviAllert(elems) {
    const [Moviallert, setMoviallert] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        setMoviallert(elems.moviAllert);
        setText(elems.text);
    }, [elems.moviAllert, elems.text]);

    function pressOk() {
        setMoviallert(false);
    }

    return (
        <>
            {Moviallert === true ? (
                <div>
                    <p>{text}</p>
                    <button onClick={pressOk}>OK</button>
                </div>
            ) : null}
        </>
    );
}

export default MoviAllert;
