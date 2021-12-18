import styled from 'styled-components'
import { Heading2 } from '../../Typography/style'

export const HeroTextContainer = styled.div`
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    width: auto;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-bottom: 600px;
    }
`

export const HeroText = styled(Heading2)`
    letter-spacing: 0.7rem;
    line-height: 6rem;

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

export const PrimaryContentContainer = styled.div`
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    margin: auto;
`

export const CaroselContainer = styled.div`
    width: 48%;
    height: 200px;
    display: flex;
    position: relative;
    margin: auto;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.green}
`

export const PrimaryContentTextContainer = styled.div`
    width: 48%;
    height: 200px;
    display: flex;
    position: relative;
    margin: auto;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.red}
`




