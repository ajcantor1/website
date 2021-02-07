import React from "react"
import Robot from "../../images/serviceD.png"
import {
    NotFoundOuterContainer,
    NotFoundContainer,
    ImageBox,
    HeadingBox,
    GoBackHome
} from './NotFoundElements';
import {ArrowBackCircle} from '@styled-icons/ionicons-solid'

const NotFound = () => {
  return(
    <>
      <NotFoundOuterContainer>
        <NotFoundContainer>
          <ImageBox>
            <img src={Robot} alt="robot head 404"/>
          </ImageBox>
          <HeadingBox>
            <h1>
              404
            </h1>
            <h2>
              Page Not Found
            </h2>
            <p>
              It appears that you have walked into the wrong side of town. Your expectations to find anything on this page should roughly be between a 4 and a 4.
            </p>
            <GoBackHome to="/"><ArrowBackCircle size="24"/>Take me home</GoBackHome>
          </HeadingBox>
        </NotFoundContainer>
        <GoBackHome/>
      </NotFoundOuterContainer>
    </>
  );
}
export default NotFound;