import styled from 'styled-components';


export const OuterFooterContainer = styled.div`
  min-height: 150px;
  width: 100%;
  text-align: center;
  background-image: linear-gradient(to bottom, var(--cyan), var(--navy));
`

export const FooterContainer = styled.a`
  text-decoration: none;
  margin: 0 auto;
  color: var(--white);
  font-family: Tahoma, sans-serif;
  font-size: 14px;
  font-weight: 500;

  @media screen and (min-width: 1400px) {
    font-size: 18px;
  }
`

export const GithubStats = styled.div`
`

export const GithubStat = styled.span`
  margin: 0px 5px;
`

