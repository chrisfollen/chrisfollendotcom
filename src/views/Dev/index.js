import React, { useEffect } from 'react'
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';

export default function Dev() {

  useEffect(() => {
    document.title = "Dev - CHRIS FOLLEN"
 }, []);

  return (
    <OuterPageContainer>
      <InnerPageContainer>

          <h1>DEV</h1>
      </InnerPageContainer>
    </OuterPageContainer>
    
  );
}