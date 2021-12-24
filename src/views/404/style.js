import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Heading1, Heading4 } from '../../Typography/style'

export const NotFoundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4000;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/404.jpg?alt=media&token=cb26ae3a-19d4-4336-ac83-d865815856f7');
    width: 100%;
    height: 100%;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const InnerNotFoundPageContainer = styled.div`
    width: 65%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 85%;
        }
`

export const HeroText = styled(Heading1)`
  margin-top: 8%;
  text-align: center;
  letter-spacing: 0.3rem;
  color: ${({ theme }) => theme.palette.green};
`

export const StyledText = styled(Heading4)`
  margin-top: 2%;
  text-align: center;
  color: ${({ theme }) => theme.palette.black};
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  line-height: 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: 2rem;
    margin-top: 8%;
    }
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.palette.green};
`
