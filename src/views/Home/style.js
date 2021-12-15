import styled from 'styled-components'
import { Heading1 } from '../../Typography'
import { Link } from 'react-router-dom'

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
    padding-left: 40px;
    padding-bottom: 40px;
`

export const HomeHeading1 = styled(Heading1)`
    letter-spacing: 0.9rem;
    line-height: 7rem;
    color: ${({ theme }) => theme.palette.white};
`

export const HomeHeading1Link = styled(Link)`
    letter-spacing: 0.9rem;
    line-height: 7rem;
    color: ${({ theme }) => theme.palette.red};
`

