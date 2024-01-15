import './Landing.css';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import { register } from 'swiper/element/bundle';
import { useEffect } from 'react';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import SideBar from '../../components/SideBar/SideBar';

function Landing() {
  useEffect(() => {
    register();
  })

  return (
    <>
      <div className="landing">
        {/* <LoadingScreen></LoadingScreen> */}
        <div className="landing-body">
          {/* <SideBar></SideBar> */}
          <Carousel version={1}></Carousel>
          <Carousel version={2}></Carousel>
          {/* <div><hr aria-hidden="true" className="border-skin-line"></hr></div> */}
          {/* <div className='landing-free-text'>
            <p>THINGS TO DO</p>
            <p>- Side bar with projects</p>
            <p>- Text-based game like forge saga</p>
            <p>- Loading screen</p>
            <p>- Loading screen with warning</p>
            <p>- R-18 button</p>
            <p>- Email GSuite</p>
            <p>- Chatbot</p>
            <p>- Fix shaky screen, maybe images too big</p>
            <p>- On click pop up modal with info</p>
          </div> */}

          {/* <div className="top-right">
            <SocialIcons></SocialIcons>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Landing;
