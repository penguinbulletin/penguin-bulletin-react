import './LoadingScreen.css';
import React from 'react';
import { useState, useEffect } from 'react';
import GlitchText from '../GlitchText/GlitchText';

function IsHomePage() {
    return window.location.pathname == "/";
}

function LoadingScreen() {
    return (
        <>
            {IsHomePage() ?
                <>
                    <div className="loading">
                    </div>
                    <div className="loading-text">
                        <GlitchText inputLoadingText="▒█□■ █□□█▒█□█ ■■□█▒ █▒ □▒■█ ▒█□ □█▒█■□▒█■" finalLoadingText="-THE BULLETIN BOARD OF ARTS AND PROJECTS-"></GlitchText>
                        <br></br>
                        <GlitchText inputLoadingText="▒██▒▒□■ █□ ▒□█▒ □□▒■█▒█ ▒■█□▒□▒" finalLoadingText="WELCOME TO THE PENGUIN BULLETIN"></GlitchText>
                    </div>
                </>
                :
                <></>
            }
        </>
    );
}

export default LoadingScreen;
