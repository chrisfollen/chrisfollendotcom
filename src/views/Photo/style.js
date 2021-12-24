import styled from 'styled-components'

export const QuoteOuterWrapper = styled.div`
  width: 100%;
  margin-top: 160px;
  background-color: ${({ theme }) => theme.palette.grey};
`

export const QuoteContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  text-align: center;
  padding: 6rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 1.5rem;
  }
`

export const GalleryContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    margin: auto;
    overflow: auto;
    margin-top: 100px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
    }
`

export const GalleryColumnBase = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0;
    border: 0;
    padding: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
    }
`

export const GalleryColumnLeft = styled(GalleryColumnBase)`
    padding-right: 0.4rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-right: 0;
    }
`

export const GalleryColumnRight = styled(GalleryColumnBase)`
    padding-left: 0.4rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding-left: 0;
    }
`

export const GalleryPhoto = styled.img`
    max-width: 100%;
    height: auto;
    padding-bottom: .8rem;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
`