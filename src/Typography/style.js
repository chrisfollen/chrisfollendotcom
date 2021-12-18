import styled, { css } from 'styled-components'

export const base = css`
    font-family: 'Libre Caslon Text', serif;
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.black};
`

export const heading = css`
    font-family: 'Fjalla One', sans-serif;
`

export const Heading1 = styled.h1`
    ${heading};
    font-size: 5.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 4rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.6rem;
    }
`

export const Heading2 = styled.h2`
    ${heading};
    font-size: 3.8rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: 3.2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.8rem;
    }
`

export const Heading3 = styled.h3`
    ${heading};
    font-size: 3rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 2rem;
    }
`

export const Heading4 = styled.h4`
    ${heading};
    font-size: 2.2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.3rem;
    }
`

export const Heading5 = styled.h5`
    ${heading};
    font-size: 1.4rem;
    letter-spacing: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 0.9rem;
    }
`

export const Body1 = styled.p`
    ${base};
    font-size: 1.4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1rem;
    }
`