import React, { useEffect } from 'react'
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { CarouselContainer, HeroText1, HeroText2, HeroTextContainer, HeroTextR, PrimaryContentBodyText, PrimaryContentContainer, PrimaryContentHeadingText, PrimaryContentTextContainer, PrimaryContentTextInnerContainer, QouteContainer } from './style';
import PhotoCarousel from './components/PhotoCarosel';
import { Quote1, Quote2 } from '../../Typography/style';

export default function About() {

  useEffect(() => {
    document.title = "About - CHRIS FOLLEN"
 }, []);

  return (
    <OuterPageContainer>
    <InnerPageContainer>
      <HeroTextContainer>
        <HeroText1>Hi there, I'm Chris!</HeroText1>
        <HeroText2>Developer & photographe<HeroTextR>r</HeroTextR></HeroText2>
      </HeroTextContainer>
      <PrimaryContentContainer>
        <CarouselContainer>
          <PhotoCarousel/>
        </CarouselContainer>
        <PrimaryContentTextContainer>
          <PrimaryContentTextInnerContainer>
            <PrimaryContentHeadingText>
              Stoicism. Bikes. Architecture.
            </PrimaryContentHeadingText>
            <PrimaryContentHeadingText>
              Woodworking. Tattoos. Rioja.
            </PrimaryContentHeadingText>
          </PrimaryContentTextInnerContainer>
          <PrimaryContentTextInnerContainer>
            <PrimaryContentBodyText>
              I’m so glad you found your way to my website, and I hope my work puts a smile on your face.
            </PrimaryContentBodyText>
            <PrimaryContentBodyText>
              I'm a frontend developer and freelance photographer based in Boulder, Colorado. 
              I like thinking, creating, problem solving, and learning. I’m passionate 
              about everything I do, and am particularly intrigued by work that marries an aesthetic component 
              with a technical one.
            </PrimaryContentBodyText>
          </PrimaryContentTextInnerContainer>
        </PrimaryContentTextContainer>
      </PrimaryContentContainer>
      <QouteContainer>
        <Quote1 style={{marginBottom: '1.6rem'}}>"Simplicity is the ultimate sophistication."</Quote1>
        <Quote2>- Leonardo Da Vinci</Quote2>
      </QouteContainer>
    </InnerPageContainer>
  </OuterPageContainer>
  );
}