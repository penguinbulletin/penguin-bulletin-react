import './LoadingScreen.css';
import React from 'react';
import { useState, useEffect } from 'react';

function IsHomePage() {
    return window.location.pathname == "/";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}


function glitchText(paramLoadingText, paramFinalLoadingText, paramTimeOver, paramRandomLetters, paramSetLoadingText) {
    const updateLoadingText = () => {
        if (paramLoadingText === paramFinalLoadingText) return;

        let tempLoadingText = paramLoadingText;
        for (let i = 0; i < paramLoadingText.length; i++) {
            if (paramLoadingText[i] === paramFinalLoadingText[i]) continue;
            if (paramTimeOver == true) tempLoadingText = setCharAt(tempLoadingText, i, paramFinalLoadingText[i]);
            else tempLoadingText = setCharAt(tempLoadingText, i, paramRandomLetters[getRandomInt(paramRandomLetters.length)]);
        }

        paramSetLoadingText(tempLoadingText);
    };

    const interval = setInterval(updateLoadingText, 30);
    return interval;
}


function LoadingScreen() {
    let [loadingText, setLoadingText] = useState('▒██▒▒□■ █□ ▒□█▒ □□▒■█▒█ ▒■█□▒□▒');
    let [loadingText2, setLoadingText2] = useState('▒█□■ █□□█▒█□█ ■■□█▒ █▒ □▒■█ ▒█□ □█▒█■□▒█■');
    let [timeOver, setTimeOver] = useState(false);
    const finalLoadingText = 'WELCOME TO THE PENGUIN BULLETIN';
    const finalLoadingText2 = '-THE BULLETIN BOARD OF ARTS AND PROJECTS-';
    const randomLetters = ['T', 'H', 'E', 'B', 'U', 'L', 'I', 'N', 'O', 'A', 'R', 'D', 'F', 'S', 'P', 'J', 'C', 'W', 'M', 'G', '-', ' ', '█', '□', '■', '▒', '-'];


    useEffect(() => {
        setTimeout(() => {
            setTimeOver(true);
        }, 1800);

        const interval = glitchText(loadingText, finalLoadingText, timeOver, randomLetters, setLoadingText);
        const interval2 = glitchText(loadingText2, finalLoadingText2, timeOver, randomLetters, setLoadingText2);
        return () => { clearInterval(interval); clearInterval(interval2) };
    }, [loadingText, finalLoadingText, randomLetters]);


    return (
        <>
            {IsHomePage() ?
                <>
                    <div className="loading">
                    </div>
                    <div className="loading-text">
                        {loadingText2}
                        <br></br>
                        {loadingText}
                        {/* WELCOME TO THE PENGUIN BULLETIN */}
                    </div>
                </>
                :
                <></>
            }
        </>
    );
}

export default LoadingScreen;

