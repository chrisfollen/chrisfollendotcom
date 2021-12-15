// import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { HomeContainer, HomeHeading1, TextContainer } from './style';

function Home(props) {

  useEffect(() => {
    document.title = "CHRIS FOLLEN"
 }, []);

  return (
    <HomeContainer>
        <TextContainer>
            <HomeHeading1>FRONTEND DEVELOPER</HomeHeading1>
        </TextContainer>
    </HomeContainer>
  );
}

export default Home;