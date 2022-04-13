import React, { useEffect } from 'react'
import { HeroText, StyledText, NotFoundContainer, StyledLink, InnerNotFoundPageContainer } from './style'
import { getCopy } from './copy';

export default function NotFound({ handlePageLoad }) {

useEffect(() => {
    document.title = getCopy.pageTitle
 }, []);

 const handleLinkClick = () => {
  handlePageLoad();
}

  return (
    <NotFoundContainer>
      <InnerNotFoundPageContainer>
        <HeroText>{getCopy.header}</HeroText>
        <StyledText>{getCopy.bodyCopy} <StyledLink onClick={handleLinkClick} to="/">{getCopy.bodyLinkText}</StyledLink> </StyledText>
      </InnerNotFoundPageContainer>
    </NotFoundContainer>
  );
}