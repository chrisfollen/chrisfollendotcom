import styled, { keyframes } from 'styled-components'
import { Heading2 } from '../../Typography/style'


const letterAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const PreloaderContainer = styled.div`
    z-index: 300000;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s linear;
    background-color: ${({ theme }) => theme.palette.white};
    animation: ${fadeOut} 1.5s ease 3s;
`

export const PreloadText = styled(Heading2)`
    color: ${({ theme }) => theme.palette.black};
    opacity: 0.8;
    letter-spacing: 0.6rem;
`

export const Letter1 = styled.span`
    animation: ${letterAnimation} 2s ease .2s;
`

export const Letter2 = styled.span`
    animation: ${letterAnimation} 2s ease .4s;
`

export const Letter3 = styled.span`
    animation: ${letterAnimation} 2s ease .6s;
`

export const Letter4 = styled.span`
    animation: ${letterAnimation} 2s ease .8s;
`

export const Letter5 = styled.span`
    animation: ${letterAnimation} 2s ease 1s;
`

export const Letter6 = styled.span`
    animation: ${letterAnimation} 2s ease 1.2s;
`

export const Letter7 = styled.span`
    animation: ${letterAnimation} 2s ease 1.4s;
`

export const Letter8 = styled.span`
    animation: ${letterAnimation} 2s ease 1.6s;
`

export const Letter9 = styled.span`
    animation: l${letterAnimation} 2s ease 1.8s;
`

export const Letter10 = styled.span`
    animation: ${letterAnimation} 2s ease 2s;
`

export const Letter11 = styled.span`
    animation: ${letterAnimation} 2s ease 2.2s;
`