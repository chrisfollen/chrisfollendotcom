import styled, { keyframes, css } from 'styled-components'
import { Heading2 } from '../../Typography'

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

  const slideInUp = keyframes `
    from {
      margin-bottom: -100%;
      opacity: 0;
    }
  
    to {
      margin-bottom: 0%;
      opacity: 1;
    }
  `

export const MenuContainer = styled.nav`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.grey};
    transition: transform .6s ease;
    transform: ${({ menuActive }) => menuActive ? 'translateX(0)' : 'translateX(100%)'};
`

export const CloseButtonContainer = styled.div`
    width: 92%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    }
`

export const InternalLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    }
`

export const ExternalLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 2rem;
    }
`

export const CloseButton = styled.button.attrs({ ariaLabel: 'Close Menu' })`
    color: ${({ theme }) => theme.palette.black};
`

export const InternalLinkBase = styled(Heading2)`
    letter-spacing: 0.9rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        letter-spacing: 0.6rem;
        
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        letter-spacing: 0.3rem;
        
    }
`

export const InternalLink1 = styled(InternalLinkBase)`
    opacity: ${({ menuItemsVisable }) => menuItemsVisable ? 1 : 0};
    animation: ${({ menuActive }) => menuActive &&
    css`
        ${slideInLeft} .8s ease .3s
    `};
    animation-fill-mode: forwards; 
`

export const InternalLink2 = styled(InternalLinkBase)`
    opacity: ${({ menuItemsVisable }) => menuItemsVisable ? 1 : 0};
    animation: ${({ menuActive }) => menuActive &&
    css`
        ${slideInLeft} .8s ease .5s
    `};
    animation-fill-mode: forwards; 
`

export const InternalLink3 = styled(InternalLinkBase)`
opacity: ${({ menuItemsVisable }) => menuItemsVisable ? 1 : 0};
    animation: ${({ menuActive }) => menuActive &&
    css`
        ${slideInLeft} .8s ease .7s
    `};
    animation-fill-mode: forwards; 
`

export const ExternalLink = styled.img`
    width: 30px;
    height: 30px;
    padding: 12px;
    opacity: ${({ menuItemsVisable }) => menuItemsVisable ? 1 : 0};
    animation: ${({ menuActive }) => menuActive &&
    css`
        ${slideInUp} .8s ease .9s
    `};
    animation-fill-mode: forwards;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {

    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    }
`
