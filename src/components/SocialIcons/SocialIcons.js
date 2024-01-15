import './SocialIcons.css';
import { ReactComponent as MailSVG } from './icon-mail.svg';
import { ReactComponent as DiscordSVG } from './icon-discord.svg';
import { ReactComponent as SteamSVG } from './icon-steam.svg';
import { ReactComponent as LinkedInSVG } from './icon-linkedin.svg';
import { ReactComponent as YoutubeSVG } from './icon-youtube.svg';

const backgroundColor = "#282c34";
const strokeColor= "white";

function SocialIcons() {
  return (
    <div className="social-bar">
      <a href="google.com">
        <svg className="social-icon"><MailSVG stroke={strokeColor} fill={backgroundColor}> </MailSVG></svg>
      </a>
      <a href="google.com">
        <svg className="social-icon"><YoutubeSVG stroke={strokeColor} fill={backgroundColor}> </YoutubeSVG></svg>
      </a>
      <a href="google.com">
        <svg className="social-icon"><LinkedInSVG stroke={strokeColor} fill={backgroundColor}> </LinkedInSVG></svg>
      </a>
      <a href="google.com">
        <svg className="social-icon"><DiscordSVG stroke={strokeColor} fill={backgroundColor}> </DiscordSVG></svg>
      </a>
      {/* <a href="google.com">
        <svg className="social-icon"><SteamSVG stroke={strokeColor} fill={backgroundColor}> </SteamSVG></svg>
      </a> */}
    </div>
  );
}

export default SocialIcons;
