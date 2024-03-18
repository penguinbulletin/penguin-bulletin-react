import './GlitchText.css';
import React from 'react';
import { useState, useEffect } from 'react';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}


function doGlitch(paramLoadingText, paramFinalLoadingText, paramTimeOver, paramRandomLetters, paramSetLoadingText) {
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

function GlitchText({ inputLoadingText, finalLoadingText }) {
    let [loadingText, setLoadingText] = useState(inputLoadingText);
    let [timeOver, setTimeOver] = useState(false);
    const randomLetters = ['T', 'H', 'E', 'B', 'U', 'L', 'I', 'N', 'O', 'A', 'R', 'D', 'F', 'S', 'P', 'J', 'C', 'W', 'M', 'G', '-', ' ', '█', '□', '■', '▒', '-'];

    console.log('Running');
    useEffect(() => {
        setTimeout(() => {
            setTimeOver(true);
        }, 1800);

        const interval = doGlitch(loadingText, finalLoadingText, timeOver, randomLetters, setLoadingText);
        return () => { clearInterval(interval) };
    }, [loadingText, finalLoadingText, randomLetters]);

    return <>
        {loadingText}
    </>

}

export default GlitchText;
