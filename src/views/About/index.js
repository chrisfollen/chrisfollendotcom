import React, { useEffect } from 'react'
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { CarouselContainer, HeroText1, HeroText2, HeroTextContainer, HeroTextR, PrimaryContentBodyText, PrimaryContentContainer, PrimaryContentHeadingText, PrimaryContentTextContainer, PrimaryContentTextInnerContainer, QuoteContainer, ContactContainer, ContactText, ContactHeading, ContactHeadingContainer, StyledLink, LinksContainer, ExternalLink, QuoteOuterWrapper } from './style';
import PhotoCarousel from './components/PhotoCarosel';
import { Quote1, Quote2 } from '../../Typography/style';
import Footer from '../../components/Footer';

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
              Stoicism. Bikes. Woodworking.
            </PrimaryContentHeadingText>
            <PrimaryContentHeadingText>
            Architecture. Guitar. Rioja.
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
    </InnerPageContainer>
    <QuoteOuterWrapper>
      <QuoteContainer>
        <Quote1 style={{marginBottom: '1.6rem'}}>Simplicity is the ultimate sophistication.</Quote1>
        <Quote2>- Leonardo Da Vinci</Quote2>
      </QuoteContainer>
    </QuoteOuterWrapper>
    <InnerPageContainer style={{marginTop: "0"}}>
      <ContactContainer>
        <ContactHeadingContainer>
          <ContactHeading>
            Contact
          </ContactHeading>
        </ContactHeadingContainer>
        <ContactText>
          Let's build something rad together! Drop me a <StyledLink href="mailto:chris@chrisfollen.com">line</StyledLink>
        </ContactText>
        <LinksContainer>
        <a href="mailto:chris@chrisfollen.com" target="_blank" rel="noreferrer"><ExternalLink src="https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/misc%2Femail_black.png?alt=media&token=91ce6438-26d6-471d-9ee0-8075563cd825" alt='Email icon'/></a>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><ExternalLink src="https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/misc%2Flinkedin_black.png?alt=media&token=f5bd7b11-268e-462b-8b43-7af471055857" alt='LinkedIn logo'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><ExternalLink src="https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/misc%2Fgithub_black.png?alt=media&token=7445978f-5ae8-4d15-b52a-1a25b03b5ff4" alt='GitHub logo' /></a>
        </LinksContainer>
      </ContactContainer>
    </InnerPageContainer>
    <Footer/>
  </OuterPageContainer>
  );
}