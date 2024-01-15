import './UnderConstruction.css';
import { register } from 'swiper/element/bundle';
import { useEffect } from 'react';

function UnderConstruction() {
  useEffect(() => {
    register();
  })

  return (
    <>
      <div className="under-construction">
        <div className='landing-free-text'>
          This page is under construction.
        </div>
        <br></br>
        <br></br>        
        <div><hr aria-hidden="true" className="under-construction-border-skin-line"></hr></div>
          <img className='big-single-image' src={require("./images/under-construction.png")}></img>
      </div>
    </>
  );
}

export default UnderConstruction;
