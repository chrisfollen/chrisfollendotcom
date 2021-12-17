import React, { useEffect } from 'react'
import { HomeContainer, HomeHeading1, HomeHeading2, HomeHeading3, HomeHeadingLink, TextContainer } from './style';

export default function Home({ homeAnimationHasRun, handlePageLoad }) {

  useEffect(() => {
    document.title = "CHRIS FOLLEN"
 }, []);

  return (
    <HomeContainer>
        <TextContainer>
            <HomeHeading1 homeAnimationHasRun={homeAnimationHasRun}>FRONTEND <HomeHeadingLink onClick={()=> handlePageLoad()} to='/dev'>DEV</HomeHeadingLink>ELOPER</HomeHeading1>
            <HomeHeading2 homeAnimationHasRun={homeAnimationHasRun}><HomeHeadingLink onClick={()=> handlePageLoad()} to='/photo'>PHOTO</HomeHeadingLink>GRAPHER</HomeHeading2>
            <HomeHeading3 homeAnimationHasRun={homeAnimationHasRun}>BASED IN COLO<HomeHeadingLink onClick={()=> handlePageLoad()} to='/about'>RAD</HomeHeadingLink>O</HomeHeading3>
        </TextContainer>
    </HomeContainer>
  );
}