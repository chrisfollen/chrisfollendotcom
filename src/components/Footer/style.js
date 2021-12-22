import styled from 'styled-components'
import { Body2 } from '../../Typography/style'

export const FooterContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
`

export const FooterText = styled(Body2)`
    color: ${({ theme }) => theme.palette.darkgrey};
    letter-spacing: 0.2rem
`