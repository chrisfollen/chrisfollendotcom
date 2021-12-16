// import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { HomeContainer, HomeHeading1, HomeHeading1Link, TextContainer } from './style';

function Home(props) {

  useEffect(() => {
    document.title = "CHRIS FOLLEN"
 }, []);

  return (
    <HomeContainer>
        <TextContainer>
            <HomeHeading1>FRONTEND <HomeHeading1Link href='#'>DEV</HomeHeading1Link>ELOPER</HomeHeading1>
            <HomeHeading1><HomeHeading1Link href='#'>PHOTO</HomeHeading1Link>GRAPHER</HomeHeading1>
            <HomeHeading1>BASED IN COLO<HomeHeading1Link href='#'>RAD</HomeHeading1Link>O</HomeHeading1>
        </TextContainer>
    </HomeContainer>
  );
}

export default Home;