import React from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import GitHubIcon from "../assets/github.svg";
import ResumeIcon from "../assets/file.svg";
import "./intro.css"

const Intro = () => {
  return (
    <div id="Intro">
      <div id="Name">Jackson Pan</div>
      <p id="Bio">
        I'm a sophomore Computer Science student at University of Rochester with
        a passion for web development, artificial intelligence, and software
        engineering.
      </p>
      <div className="IntroButtonsContainer">
        <div id="ContactButton">
          <button>Contact Me</button>
        </div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jackson-pan-165038261/">
                <img src={LinkedInIcon} alt="LinkedIn Icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jacksonpan0">
                <img src={GitHubIcon} alt="GitHub Icon" />
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1Yg_OLXY-JS7l2PKo9gDeqsacgCMU6D9thWcpn_jb36c/view">
                <img src={ResumeIcon} alt="Resume Icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
