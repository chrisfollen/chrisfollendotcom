import styled, { keyframes } from 'styled-components'
import { Body1, Heading2, Heading4 } from '../../Typography/style'

const slideInLeft = keyframes `
    from {
      margin-left: -100%;
      opacity: 0;
    }
  
    to {
      margin-left: 0%;
      opacity: 1;
    }
  `

  const slideInRight = keyframes `
    from {
      margin-right: -100%;
      opacity: 0;
    }
  
    to {
      margin-right: 0%;
      opacity: 1;
    }
  `

  const slideInDown = keyframes `
    from {
      margin-top: -100%;
      opacity: 0;
    }
  
    to {
      margin-top: 0%;
      opacity: 1;
    }
  `

  const rotateLetter = keyframes `
  from {
    transform: rotate(0deg) translateY(0) translateX(0)
  }

  to {
    transform: rotate(45deg) translateY(.7rem) translateX(.7rem)
  }
`

export const HeroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    margin: auto;
    margin-bottom: 100px;
    min-height: 400px

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 60px;
        min-height: 80px;
    }
`

export const HeroTextBase = styled(Heading2)`
    letter-spacing: 0.7rem;
    line-height: 6rem;
    opacity: 0;
    color: ${({ theme }) => theme.palette.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        letter-spacing: 0.6rem;
        line-height: 5rem;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        letter-spacing: 0.3rem;
        line-height: 2.3rem;
    }
`

export const HeroText1 = styled(HeroTextBase)`
    animation: ${slideInDown} 2s ease 
    };
    animation-fill-mode: forwards;
`

export const HeroText2 = styled(HeroTextBase)`
    animation: ${slideInDown} 2s ease 1s
    };
    animation-fill-mode: forwards;
`

export const HeroTextR = styled.div`
    display: inline-block;    
    animation: ${rotateLetter} 1s ease-in 3s
    };
    animation-fill-mode: forwards;
`

export const PrimaryContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    min-height: 500px;
    margin: auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
    }
`

export const CarouselContainer = styled.div`
    width: 48%;
    display: flex;
    margin: auto;
    opacity: 0;
    align-items: center;
    justify-content: center;
    animation: ${slideInLeft} 1s ease 4s
    };
    animation-fill-mode: forwards;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
        margin-bottom: 32px;
    }
`

export const PrimaryContentTextContainer = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    opacity: 0;
    animation: ${slideInRight} 1s ease 5s
    };
    animation-fill-mode: forwards;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
    }
`

export const PrimaryContentTextInnerContainer = styled.div`
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
`

export const PrimaryContentHeadingText = styled(Heading4)`
    color: ${({ theme }) => theme.palette.green};
    line-height: 3rem;
    letter-spacing: 0.2rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        line-height: 2rem;
    }
`

export const PrimaryContentBodyText = styled(Body1)`
    line-height: 2rem;
    letter-spacing: 0.1rem;
    padding-bottom: 1.5rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        line-height: 1.4rem;
        padding-bottom: 1rem;
    }
`

export const QuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 30rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 10rem;
  }
`

export const ContactContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rem;
  margin-bottom: 15rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-top: 10rem;
      margin-bottom: 6rem;
  }
`

export const ContactHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ContactHeading = styled(Heading2)`
  letter-spacing: 0.5rem;
  margin-bottom: 200px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 100px;
  }
`

export const ContactText = styled(Heading4)`
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  line-height: 3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    letter-spacing: 0.1rem;
  }
`

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.palette.green}
`

// export const LinksContainer = styled.div`
//   width: 60%;
//   margin: auto;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   margin-top: 10rem;
//   @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
//       margin-top: 4rem;
//   }
// `

// export const ExternalLink = styled.img`
//     width: 40px;
//     height: 40px;
//     padding: 40px;
// `





