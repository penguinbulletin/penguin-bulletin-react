import './About.css';
import { register } from 'swiper/element/bundle';
import { useEffect } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

function About() {
  useEffect(() => {
    register();
  })

  return (
    <>
      <div className="about">
        <div className='title'>ABOUT</div>
        <br></br>
        <div><hr aria-hidden="true" className="about-border-skin-line"></hr></div>
        <div className='landing-free-text'>
          <br></br>
          <br></br>
          Hey peeps, Penguin Reno here. This is the Penguin Bulletin where I'll be showcasing some AI work and side projects of mine. 
          If there's anything that you want to talk about, I'm free to chat on Discord or you can find my stuff on the socials below.
          <br></br>
          <br></br>
         
          Projects that are currently in progress:
          <ul>
            <li>Chatbot - Python API, design, hooking up in React</li>
          </ul>
          Projects that will be targeted for the future:
          <ul>
            <li>Graffiti sticker generator</li>
            <li>Text-based game</li>
            <li>Loading screen</li>
            <li>R-18 button</li>
          </ul>
          Why you should choose the Bulletin:
          <ul>
            <li>Require specific characters to be generated multiple times for assets, CGs, promos</li>
            <li>Emulate a specific artist's style or a mix of multiple, unlike simply using Midjourney/Dall-E</li>
            <li>Clean up and editing of AI image artifacts, or Photoshopping requirements</li>
            <li>Will work with you until you're satisfied</li>
          </ul>
        </div>
        <br></br>
        <br></br>
        <div><hr aria-hidden="true" className="about-border-skin-line"></hr></div>
        <br></br>
        <SocialIcons></SocialIcons>
        <br></br>
      </div>
    </>
  );
}

export default About;
