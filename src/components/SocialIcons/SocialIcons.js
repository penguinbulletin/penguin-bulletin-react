import './SocialIcons.css';
import { ReactComponent as MailSVG } from './icon-mail.svg';
import { ReactComponent as DiscordSVG } from './icon-discord.svg';
import { ReactComponent as SteamSVG } from './icon-steam.svg';
import { ReactComponent as LinkedInSVG } from './icon-linkedin.svg';
import { ReactComponent as YoutubeSVG } from './icon-youtube.svg';
import { ReactComponent as GithubSVG } from './icon-github.svg';
import { ReactComponent as KofiSVG } from './icon-kofi.svg';

const backgroundColor = "#282c34";
const strokeColor= "white";

function SocialIcons() {
  return (
    <div className="social-bar">
      <a href="mailto:reno@penguinbulletin.com" target="_blank">
        <svg className="social-icon"><MailSVG stroke={strokeColor} fill={backgroundColor}> </MailSVG></svg>
      </a>
      <a href="https://discord.gg/wDMrCQRn" target="_blank">
        <svg className="social-icon"><DiscordSVG stroke={strokeColor} fill={backgroundColor}> </DiscordSVG></svg>
      </a>
      <a href="https://github.com/penguinbulletin" target="_blank">
        <svg className="social-icon"><GithubSVG stroke={strokeColor} fill={backgroundColor}> </GithubSVG></svg>
      </a>
      <a href="https://www.youtube.com/channel/UC1rBXReOE_l75YliTRfKMfg" target="_blank">
        <svg className="social-icon"><YoutubeSVG stroke={strokeColor} fill={backgroundColor}> </YoutubeSVG></svg>
      </a>
      <a href="https://www.linkedin.com/in/jarren-ong/" target="_blank">
        <svg className="social-icon"><LinkedInSVG stroke={strokeColor} fill={backgroundColor}> </LinkedInSVG></svg>
      </a>
      <a href="https://ko-fi.com/penguinbulletin" target="_blank">
        <svg className="social-icon"><KofiSVG stroke={strokeColor} fill={backgroundColor}> </KofiSVG></svg>
      </a>
      {/* <a href="google.com">
        <svg className="social-icon"><SteamSVG stroke={strokeColor} fill={backgroundColor}> </SteamSVG></svg>
      </a> */}
    </div>
  );
}

export default SocialIcons;
