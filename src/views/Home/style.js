import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Heading1 } from '../../Typography'

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

export const HomeHeading1 = styled(Heading1).attrs({ as: 'h2' })`
    letter-spacing: 0.9rem;
    line-height: 8rem;
    color: ${({ theme }) => theme.palette.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        letter-spacing: 0.6rem;
        line-height: 7rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        letter-spacing: 0.3rem;
        line-height: 4rem;
    }
`

export const HomeHeading1Link = styled(Link)`
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

