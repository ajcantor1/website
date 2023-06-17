import styled from 'styled-components';

export const Main = styled.div`
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  color:  var(--onyx);
  min-height: 100vh;
  width: 100%;
  background: #F6FFF8;
  position: relative;
`

export const NavBar = styled.nav`
  min-height: 50px;
  max-height: 50px;
  padding: 20px 0;
  transition: background .5s ease-in-out,padding .5s ease-in-out;
  background: var(--cyan);
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  top: 0;
  width: 100%;
  margin-bottom: 60px;
`

export const AvatarImage = styled.img`

  display: block;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 80%);
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

export const Name = styled.h1`

  color: #37393A;
  text-align: center;
  margin: 10px 0;
`

export const NameLine = styled.hr`
  border: none;
  height: 10px;
  background: #37393A;
  width: 100px;
  margin-bottom: 20px;
`

export const Description = styled.div`
  width: 60%;
  margin: auto;
  font-size: 18px;
  color:  var(--onyx);
  font-family: 'Times New Roman', serif;
  text-align: center;
`

export const ServiceContainer = styled.div`

  margin: auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 720px) {
    margin-top: 100px;
    margin-bottom: 150px;
    width: 70%;
    flex-direction: row;
  }

`
export const ServiceBox = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`

export const ServiceTitle = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700; 
  color: #37393A;
`

export const ServiceImageContainer = styled.div`

`

export const ServiceImage = styled.img`
  margin: auto;
`

export const ServiceLine = styled.hr`
  border: none;
  margin: 20px auto;
  width: 60px;
  border-top: 4px dashed var(--cyan);
`

export const Portfolio = styled.div`
  margin-top: 100px;
  color: #37393A;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`

export const PortfolioSection = styled.div`
  margin: auto;
`

export const PortfolioBox = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  @media (min-width: 720px) {
      flex-direction: row;
      width: 60%;
      height: 500px;
     
    }
  &.reverse {
    @media (min-width: 720px) {
      flex-direction: row-reverse;
    }
  }

`

export const PortfolioDescription = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 20px;
  background: #37393A;
  color: #F6FFF8;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`

export const PortfolioImage = styled.img`
`

export const PortfolioDetails = styled.ul`
  padding: 10px;
  font-size: 22px;
  margin: 0;
  text-align: left;
  max-width: 200px;

  a {
    color: var(--cyan);
    word-wrap:break-word;
  }
  li {
    margin: 20px ;
  }
`

export const PortfolioTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-weight:  600;
  max-width: 300px; 
  margin: 0 auto;
  border-bottom: 4px dashed #F6FFF8;

`