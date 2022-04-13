import React, { useEffect } from 'react'
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { CarouselContainer, HeroText1, HeroText2, HeroTextContainer, HeroTextR, PrimaryContentBodyText, PrimaryContentContainer, PrimaryContentHeadingText, PrimaryContentTextContainer, PrimaryContentTextInnerContainer, QuoteContainer, ContactContainer, ContactText, ContactHeading, ContactHeadingContainer, StyledLink, LinksContainer, ExternalLink, QuoteOuterWrapper } from './style';
import PhotoCarousel from './components/PhotoCarosel';
import { Quote1, Quote2 } from '../../Typography/style';
import Footer from '../../components/Footer';
import { getCopy } from './copy';
import { EMAIL_ICON_SRC, GITHUB_ICON_SRC, LINKED_IN_ICON_SRC } from '../../constants';

export default function About() {

  useEffect(() => {
    document.title = getCopy.pageTitle
 }, []);

  return (
    <OuterPageContainer>
    <InnerPageContainer>
      <HeroTextContainer>
        <HeroText1>{getCopy.heroText1}</HeroText1>
        <HeroText2>{getCopy.heroText2}<HeroTextR>{getCopy.heroTextR}</HeroTextR></HeroText2>
      </HeroTextContainer>
      <PrimaryContentContainer>
        <CarouselContainer>
          <PhotoCarousel/>
        </CarouselContainer>
        <PrimaryContentTextContainer>
          <PrimaryContentTextInnerContainer>
            <PrimaryContentHeadingText>
              {getCopy.primaryContentHeading}
            </PrimaryContentHeadingText>
          </PrimaryContentTextInnerContainer>
          <PrimaryContentTextInnerContainer>
            <PrimaryContentBodyText>
            {getCopy.primaryBody}
            </PrimaryContentBodyText>
          </PrimaryContentTextInnerContainer>
        </PrimaryContentTextContainer>
      </PrimaryContentContainer>
    </InnerPageContainer>
    <QuoteOuterWrapper>
      <QuoteContainer>
        <Quote1 style={{marginBottom: '1.6rem'}}>{getCopy.quote}</Quote1>
        <Quote2>{getCopy.quoteAuthor}</Quote2>
      </QuoteContainer>
    </QuoteOuterWrapper>
    <InnerPageContainer style={{marginTop: "0"}}>
      <ContactContainer>
        <ContactHeadingContainer>
          <ContactHeading>
            {getCopy.contactHeading}
          </ContactHeading>
        </ContactHeadingContainer>
        <ContactText>
          {getCopy.contactText} <StyledLink href="mailto:chris@chrisfollen.com">{getCopy.contactLinkText}</StyledLink>
        </ContactText>
        <LinksContainer>
        <a href="mailto:chris@chrisfollen.com" target="_blank" rel="noreferrer"><ExternalLink src={EMAIL_ICON_SRC} alt='Email icon'/></a>
                <a href="https://www.linkedin.com/in/chrisfollen/" target="_blank" rel="noreferrer"><ExternalLink src={LINKED_IN_ICON_SRC} alt='LinkedIn logo'/></a>
                <a href="https://github.com/chrisfollen" target="_blank" rel="noreferrer"><ExternalLink src={GITHUB_ICON_SRC} alt='GitHub logo' /></a>
        </LinksContainer>
      </ContactContainer>
    </InnerPageContainer>
    <Footer/>
  </OuterPageContainer>
  );
}