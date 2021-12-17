import styled from 'styled-components'

export const StyledCursor = styled.div`
    width: 3rem;
    height: 3rem;
    border: 2px solid  ${({ theme }) => theme.palette.green};
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    z-index: 200000;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        border: none;
    };
`

