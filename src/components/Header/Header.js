import { useState } from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ shouldTransition, updateParentBookmark }) {

  function onClickHeader(){
    updateParentBookmark(false);
  }


  return (
    <>
      {/* <div
        className={shouldTransition ? "header-black visible" : "header-black"}
      >
        PENGUIN BULLETIN
      </div>
      <div className="header">
        PENGUIN BULLETIN
      </div>  */}
      <Link to={''} onClick={onClickHeader} className={shouldTransition ? "header-black visible" : "header-black"}>PENGUIN BULLETIN</Link>
      <Link to={''} onClick={onClickHeader} className="header">PENGUIN BULLETIN</Link>


    </>
  );
}

export default Header;
