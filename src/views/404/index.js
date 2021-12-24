import React, { useEffect } from 'react'
import { HeroText, StyledText, NotFoundContainer, StyledLink, InnerNotFoundPageContainer } from './style'

export default function NotFound() {

  useEffect(() => {
    document.title = "404 - CHRIS FOLLEN"
 }, []);

  return (
    <NotFoundContainer>
      <InnerNotFoundPageContainer>
        <HeroText>4L04A</HeroText>
        <StyledText>It looks like you’ve arrived in the middle of nowhere.  It’s usually a good place to be, but in this case, it isn’t. Best head back <StyledLink to="/">home.</StyledLink> </StyledText>
      </InnerNotFoundPageContainer>
    </NotFoundContainer>
  );
}