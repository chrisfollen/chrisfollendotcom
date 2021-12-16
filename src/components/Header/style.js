import styled from 'styled-components'
import { Heading4 } from '../../Typography'

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    z-index: 1000;
`

export const HeaderWrapper = styled.div`
    width: 92%;
    position: relative;
    padding: 0;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


export const HeaderText = styled(Heading4).attrs({ as: 'h1' })`
    letter-spacing: 0.6rem;
    line-height: 4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        letter-spacing: 0.3rem;
        line-height: 2rem;
    }
`

export const HeaderMenuContainer = styled.div`
    display: flex;
    position: absolute;
    right: 0;
`