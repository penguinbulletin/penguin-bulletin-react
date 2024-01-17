import { useState } from 'react';
import './SideBar.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams
} from 'react-router-dom';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group"
import About from "../../pages/About/About";

// aka Layout
function SideBar() {
    const [bookmarkOpen, setBookmarkOpen] = useState(false);

    function onClickBookmark() {
        setBookmarkOpen(!bookmarkOpen);
    };


    let location = useLocation();

    return (
        <>
            <Header shouldTransition={bookmarkOpen} updateParentBookmark={setBookmarkOpen}></Header>
            {<div className={bookmarkOpen ? "side-bar-header expanded" : "side-bar-header"}>
            </div>}
            <div className={bookmarkOpen ? "bookmark expanded" : "bookmark"} onClick={onClickBookmark}>
                <img className="small-icon" src={require('../../assets/penguinBulletinIconWhiteCompact.png')}></img>
            </div>
            <div className={bookmarkOpen ? "side-bar expanded" : "side-bar"}>
                <div className="header-whitespace"></div>
                <div className="side-bar-item">
                    <Link to="https://www.fiverr.com/penguin_reno/create-ai-artwork-in-any-style-character-or-setting-with-your-feedback" target="_blank" onClick={onClickBookmark} className="side-bar-item text">AI IMAGE REQUESTS</Link>
                    {/* <img src={require('./images/under-construction.jpg')}></img> */}
                </div>
                <div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">
                    <Link to={'sticker-generator'} onClick={onClickBookmark} className="side-bar-item text">STICKER GENERATOR</Link>
                    {/* <img src={require('./images/under-construction.jpg')}></img> */}
                </div>
                <div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">
                    <Link to={'text-based-game'} onClick={onClickBookmark} className="side-bar-item text">TEXT-BASED GAME</Link>
                    {/* <img src={require('./images/under-construction.jpg')}></img> */}
                </div>
                <div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">
                    <Link to={'about'} onClick={onClickBookmark} className="side-bar-item text">ABOUT</Link>
                    {/* <img src={require('./images/under-construction.jpg')}></img> */}
                </div>
                <div><hr aria-hidden="true" className="border-skin-line"></hr></div>
            </div>

            <Outlet></Outlet>

            {/* <div className="side-bar-item">Loading screen</div><div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">Loading screen with warning</div><div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">R-18 button</div><div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">Email GSuite</div><div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">Chatbot</div><div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">Fix shaky screen, maybe images too big for the thingo</div><div><hr aria-hidden="true" className="border-skin-line"></hr></div>
                <div className="side-bar-item">On click pop up modal with info</div><div><hr aria-hidden="true" className="border-skin-line"></hr></div> */}
        </>
    );
}

export default SideBar;
