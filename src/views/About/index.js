import React, { useEffect } from 'react'
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { CaroselContainer, HeroText, HeroTextContainer, PrimaryContentContainer, PrimaryContentTextContainer } from './style';

export default function About() {

  useEffect(() => {
    document.title = "About - CHRIS FOLLEN"
 }, []);

  return (
    <OuterPageContainer>
    <InnerPageContainer>
      <HeroTextContainer>
        <HeroText>Hi there, I'm Chris!</HeroText>
        <HeroText>Developer & photographer</HeroText>
      </HeroTextContainer>
      <PrimaryContentContainer>
        <CaroselContainer>

        </CaroselContainer>
        <PrimaryContentTextContainer>
          
        </PrimaryContentTextContainer>
      </PrimaryContentContainer>
    </InnerPageContainer>
  </OuterPageContainer>
  );
}