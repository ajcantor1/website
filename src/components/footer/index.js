import React, {useState, useEffect } from "react";
import styled from 'styled-components'
import {GitRepoForked, Star} from '@styled-icons/boxicons-regular'


import {
  OuterFooterContainer,
  FooterContainer,
  GithubStats,
  GithubStat
} from './FooterElements';

const Footer = ({id}) => {
  

  const WhiteStar = styled(Star)`
    color: white;

  `

  const WhiteGit = styled(GitRepoForked)`
    color: white;

  `

  const [githubInfo, setGitHubInfo] = useState({
    stars: -1,
    forks: -1,
  });

  useEffect(() => {

 

    fetch('https://api.github.com/repos/ajcantor1/website')
      .then(response => response.json())
      .then(json => {
        console.log("hello")
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });

      })
      .catch(error => console.error(error));
    
    }, []);
      
    return(
      <>
        <OuterFooterContainer>

        
        <FooterContainer href="https://github.com/ajcantor1/website">
          <div>Designed &amp; Built by Jeremy Cantor</div>
          
          {githubInfo.stars !==-1 && githubInfo.forks !== -1 && (
            <GithubStats>
              <GithubStat>
                <WhiteStar size="12"/>
                <span>{githubInfo.stars.toLocaleString()}</span>
              </GithubStat>
              <GithubStat>
                <WhiteGit size="12"/>
             
                <span>{githubInfo.forks.toLocaleString()}</span>
              </GithubStat>
            </GithubStats>
          )}
        </FooterContainer>
        </OuterFooterContainer>
      </>
        
    );
    
  }
  
export default Footer