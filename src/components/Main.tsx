import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from "../assets/images/sultan_logo.jpeg";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/akimaliiev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sultan-akimaliyev/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Akimaliyev Sultan</h1>
          <p>Flutter Developer & Research Assistant @MBZUAI</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/akimaliiev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sultan-akimaliyev/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;