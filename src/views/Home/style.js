import { Link } from 'react-router-dom'
import styled, { keyframes, css } from 'styled-components'
import { Heading1 } from '../../Typography'

const slideIn = keyframes `
    from {
      margin-left: 100%;
      width: 300%;
      opacity: 0;
    }
  
    65% {
      font-size: 900%;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
      opacity: 1;
    }
  `

  const slideInSmall = keyframes `
    from {
      margin-left: 100%;
      width: 300%;
      opacity: 0;
    }
  
    65% {
      font-size: 500%;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
      opacity: 1;
    }
  `


export const HomeContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/art-6.jpg?alt=media&token=1e086696-0bb8-43fb-b2a0-47a47c3984fb");
    width: 100%;
    height: 100%;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const TextContainer = styled.div`
    padding-left: 2.5rem;
    padding-bottom: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-left: 2rem;
        padding-bottom: 1.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-left: 1rem;
        padding-bottom: 1rem;
    }
`

export const HomeHeadingBase = styled(Heading1).attrs({ as: 'h2' })`
    letter-spacing: 0.9rem;
    line-height: 8rem;
    color: ${({ theme }) => theme.palette.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        letter-spacing: 0.6rem;
        line-height: 7rem;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        letter-spacing: 0.3rem;
        line-height: 4rem;
    }
`

export const HomeHeading1 = styled(HomeHeadingBase)`
    opacity: ${({ homeAnimationHasRun }) => homeAnimationHasRun ? 1 : 0};
    animation: ${({ homeAnimationHasRun }) => !homeAnimationHasRun &&
        css`
            ${slideIn} 3s ease 3s
        `};
    };
    animation-fill-mode: forwards;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        animation: ${({ homeAnimationHasRun }) => !homeAnimationHasRun &&
        css`
            ${slideInSmall} 3s ease 3s
        `};
        animation-fill-mode: forwards;
    };
    }
`

export const HomeHeading2 = styled(HomeHeadingBase)`
    opacity: ${({ homeAnimationHasRun }) => homeAnimationHasRun ? 1 : 0};
    animation: ${({ homeAnimationHasRun }) => !homeAnimationHasRun &&
    css`
        ${slideIn} 3s ease 4s
    `};
    animation-fill-mode: forwards;
};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        animation: ${({ homeAnimationHasRun }) => !homeAnimationHasRun &&
        css`
            ${slideInSmall} 3s ease 4s
        `};
        animation-fill-mode: forwards;
    }
`

export const HomeHeading3 = styled(HomeHeadingBase)`
    opacity: ${({ homeAnimationHasRun }) => homeAnimationHasRun ? 1 : 0};
    color: ${({ theme }) => theme.palette.white};
    animation: ${({ homeAnimationHasRun }) => !homeAnimationHasRun &&
    css`
        ${slideIn} 3s ease 5s
    `};
    animation-fill-mode: forwards;
};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        animation: ${({ homeAnimationHasRun }) => !homeAnimationHasRun &&
        css`
            ${slideInSmall} 3s ease 5s
        `};
        animation-fill-mode: forwards;
    }
`

export const HomeHeadingLink = styled(Link)`
    line-height: 7rem;
    color: ${({ theme }) => theme.palette.green};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        letter-spacing: 0.6rem;
        line-height: 7rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        letter-spacing: 0.3rem;
        line-height: 4rem;
    }
`

