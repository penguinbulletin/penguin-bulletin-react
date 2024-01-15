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
          Information regarding this website, it's author and such can be found by asking little Mayo here.
          <br></br>
          Try asking questions such as:
          <ul>
            <li>Who are you?</li>
            <li>Who created this website?</li>
            <li>Why was this site created?</li>
            <li>How can I get in touch with the author?</li>
            <li>Headpats</li>
          </ul>
          Projects that are currently in progress:
          <ul>
            <li>Chatbot - Python API, design, hooking up in React</li>
            <li>Separate server for SD generation</li>
            <li>Email GSuite</li>
            <li>Fiverr site</li>
            <li>Socials hyperlinks</li>
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
            <li>Want to emulate a specific artist's style or a mix of multiple, unlike simply using Midjourney/Dalle</li>
            <li>Clean up and re-generation of AI image artifacts</li>
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
