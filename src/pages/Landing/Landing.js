import './Landing.css';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import { register } from 'swiper/element/bundle';
import { useEffect } from 'react';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import SideBar from '../../components/SideBar/SideBar';

function Landing() {
  useEffect(() => {
    register();
  })

  return (
    <>
      <div className="landing">
        <div className="landing-body">
          <Carousel version={1}></Carousel>
          <Carousel version={2}></Carousel>
        </div>
      </div>
    </>
  );
}

export default Landing;
