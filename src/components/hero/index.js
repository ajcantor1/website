import React, {useState, useEffect } from "react"
import {
  Main,
  NavBar,
  AvatarImage,
  Name,
  NameLine,
  ServiceContainer,
  ServiceBox,
  ServiceTitle,
  Description,
  ServiceImage,
  ServiceLine,
  Portfolio,
  PortfolioBox,
  PortfolioDescription,
  PortfolioImage,
  PortfolioTitle,
  PortfolioDetails,
  PortfolioSection
} from './HeroElements';
import profile from '../../images/Jprofile.png';
import brain from '../../images/brain.png';
import arduino from '../../images/arduino.png';
import devices from '../../images/devices.png';
import detection from '../../images/detection.png';
import seaquest from '../../images/seaquest.gif';
import thesis from '../../images/thesis.gif';
import wordle_bot from '../../images/wordle_bot.gif';
import switchgame from '../../images/switch.gif';
import robotpath from '../../images/robot_path.gif';
const Hero = () => {


  return(
    <Main>
      <NavBar>
        <AvatarImage src={profile}/>
      </NavBar>
      <Name>Jeremy Cantor</Name>
      <NameLine/>
      <Description>
      Hi there, I'm Jeremy. Electrical Engineer and Software Developer. I create things that live on the internet, from websites, applications, or anything in between. My interest are broad and cover a variety of bleeding-edge topics in computing.
      </Description> 
      <ServiceContainer>
        <ServiceBox>
          <ServiceTitle>AI & Machine Learning</ServiceTitle>
          <ServiceLine/>
          <ServiceImage src={brain}/>
        </ServiceBox>
        <ServiceBox>
          <ServiceTitle>Embedded & IoT</ServiceTitle>
          <ServiceLine/>
          <ServiceImage src={arduino}/>
        </ServiceBox>
        <ServiceBox>
          <ServiceTitle>Pixel-Perfect Experiences</ServiceTitle>
          <ServiceLine/>
          <ServiceImage src={devices}/>
        </ServiceBox>
      </ServiceContainer>
      <Portfolio>Portfolio</Portfolio>
      <NameLine/>
      <PortfolioSection>

      <PortfolioBox className="row-direction">
          <PortfolioImage src={thesis}/>
          <PortfolioDescription>
            <PortfolioTitle>
              Master's Thesis
            </PortfolioTitle>
            <PortfolioDetails>
              <li>A Lightweight Deep Recurrent Q-Learning Technique for Autonomous Wildfire Surveillance</li>
              <li>Paper submitted to the European Conference of Artificial Intelligence. <a href="https://www.overleaf.com/read/qqqhbcnvzbvn" rel="nofollow">View as PDF</a></li>
              <li>Source code: <a href="https://github.com/ajcantor1/wildfire_uav_surveillance_rl" rel="nofollow">https://github.com/ajcantor1/wildfire_uav_surveillance_rl</a></li>
            </PortfolioDetails>
          </PortfolioDescription>
        </PortfolioBox>

        <PortfolioBox className="reverse">
          <PortfolioImage src={detection}/>
          <PortfolioDescription>
            <PortfolioTitle>
              Image/Hair Segmentation
            </PortfolioTitle>
            <PortfolioDetails>
              <li>Trained a convolutional residual network for hair segmentation</li>
              <li>Perform an average over hair-pixels to determine hair color and/or recommend based on hair color</li>
              <li>Proposed Architecture Courtesy of: <a href="https://arxiv.org/pdf/1712.07168.pdf" rel="nofollow">Alex Levinshtein, Cheng Chang, Edmund Phung,Irina Kezele, Wenzhangzhi Guo, Parham Aarabi</a></li>
              <li>Source code: <a href="https://github.com/ajcantor1/hair_segmentation_cnn" rel="nofollow">https://github.com/ajcantor1/hair_segmentation_cnn</a></li>
            </PortfolioDetails>
          </PortfolioDescription>
        </PortfolioBox>

        <PortfolioBox>
        <PortfolioImage src={seaquest}/>
          <PortfolioDescription>
            <PortfolioTitle>
              King of Games Learning Environment
            </PortfolioTitle>
            <PortfolioDetails>
              <li>Main Contributor - Developed Atari 2600 Games for Reinforcement Learning Environment</li>
              <li>Project Creator & Author - Jacob Buckman MILA Ph.D - Please checkout his work!</li>
              <li>Source code: <a href="https://github.com/ajcantor1/kogle" rel="nofollow">https://github.com/ajcantor1/kogle</a></li>
            </PortfolioDetails>
          </PortfolioDescription>
        </PortfolioBox>

        <PortfolioBox className="reverse">
        <PortfolioImage src={wordle_bot}/>
          <PortfolioDescription>
            <PortfolioTitle>
              Browser Automation
            </PortfolioTitle>
            <PortfolioDetails>
              <li>Custom software to interact and grab data from webpages</li>
              <li>A small sample of what can be accomplished via browser automation</li>
              <li>Wordle Strategy/algorithm was directly inspired by Grant Sanderson <a href="https://www.youtube.com/watch?v=v68zYyaEmEA" rel="nofollow">https://www.youtube.com/watch?v=v68zYyaEmEA</a></li>
              <li>Source code: <a href="https://github.com/ajcantor1/wordle-bot" rel="nofollow">https://github.com/ajcantor1/wordle-bot</a></li>
            </PortfolioDetails>
          </PortfolioDescription>
        </PortfolioBox>

        <PortfolioBox>
        <PortfolioImage src={switchgame}/>
          <PortfolioDescription>
            <PortfolioTitle>
              Mobile Friendly React JS Switch UI Example
            </PortfolioTitle>
            <PortfolioDetails>
              <li>Not a switch emulator but a code example for making a single page with ReactJS</li>
              <li>Code and images used are not authorized nor endorsed by Nintendo or in anyway</li>
              <li>Demo: <a href="https://amiibo-selector.herokuapp.com/" rel="nofollow">https://amiibo-selector.herokuapp.com/</a></li>
              <li>Source code: <a href="https://github.com/ajcantor1/amiibo_selector" rel="nofollow">https://github.com/ajcantor1/amiibo_selector</a></li>
            </PortfolioDetails>
          </PortfolioDescription>
        </PortfolioBox>

        <PortfolioBox className="reverse">
        <PortfolioImage src={robotpath}/>
          <PortfolioDescription>
            <PortfolioTitle>
              Web Render of Robot Trajectory
            </PortfolioTitle>
            <PortfolioDetails>
            </PortfolioDetails>
          </PortfolioDescription>
        </PortfolioBox>

      </PortfolioSection>
    </Main>

  );
  
}

export default Hero