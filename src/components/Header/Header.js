import { useState } from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ shouldTransition, updateParentBookmark }) {

  function onClickHeader() {
    updateParentBookmark(false);
  }

  let isLandscape = window.innerHeight < window.innerWidth;


  return (
    <>
      {
        isLandscape ?
          <div>
            <Link to={''} onClick={onClickHeader} className={shouldTransition ? "header-black visible" : "header-black"}>PENGUIN BULLETIN</Link>
            <Link to={''} onClick={onClickHeader} className="header">PENGUIN BULLETIN</Link>
          </div>
          :
          <div>
            <Link to={''} onClick={onClickHeader} className={shouldTransition ? "header-black visible" : "header-black"}>PENGUIN</Link>
            <Link to={''} onClick={onClickHeader} className="header">PENGUIN</Link>
            <Link to={''} onClick={onClickHeader} className={shouldTransition ? "header-black visible lower" : "header-black lower"}>BULLETIN</Link>
            <Link to={''} onClick={onClickHeader} className="header lower">BULLETIN</Link>
          </div>
      }



    </>
  );
}

export default Header;
