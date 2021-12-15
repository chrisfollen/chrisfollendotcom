import styled, { css } from 'styled-components'
import { Theme } from '../Theme/'

export const base = css`
    font-family: 'Libre Caslon Text', serif;
    font-style: normal;
    font-weight: 400;
    color: ${Theme.palette.black};
`

export const heading = css`
    font-family: 'Fjalla One', sans-serif;
`

export const Heading1 = styled.h1`
    ${heading};
    font-size: 5.5rem;
`