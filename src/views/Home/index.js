// import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { HomeContainer, HomeHeading1, HomeHeading1Link, TextContainer } from './style';

export default function Home() {

  useEffect(() => {
    document.title = "CHRIS FOLLEN"
 }, []);

  return (
    <HomeContainer>
        <TextContainer>
            <HomeHeading1>FRONTEND <HomeHeading1Link to='/dev'>DEV</HomeHeading1Link>ELOPER</HomeHeading1>
            <HomeHeading1><HomeHeading1Link to='/photo'>PHOTO</HomeHeading1Link>GRAPHER</HomeHeading1>
            <HomeHeading1>BASED IN COLO<HomeHeading1Link to='/about'>RAD</HomeHeading1Link>O</HomeHeading1>
        </TextContainer>
    </HomeContainer>
  );
}