import styled from 'styled-components'

export const InnerPageContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: auto;
    overflow: auto;
    margin-top: 200px;
    background-color: ${({ theme }) => theme.palette.white}

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-top: 160px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 120px;
    }
`
