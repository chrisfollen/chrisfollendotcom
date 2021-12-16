import styled from 'styled-components'
import { Heading2 } from '../../Typography'

export const MenuContainer = styled.div`
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
    transition: all .6s ease;
`

export const CloseButtonContainer = styled.div`
    width: 92%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {

    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    }
`

export const InternalLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {

    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    }
`

export const ExternalLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
 
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    }
`

export const InternalLink = styled(Heading2)`
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

export const ExternalLink = styled.img`
    width: 30px;
    height: 30px;
    padding: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {

    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {

    }
`
