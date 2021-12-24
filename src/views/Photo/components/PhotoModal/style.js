import styled from 'styled-components'

export const PhotoModalContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;
    position: fixed;
    z-index: 4000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.white};
    overflow: auto;
    transition: transform .4s ease;
    transform: ${({ modalActive }) => modalActive ? 'translateY(0)' : 'translateY(-100%)'};
`

export const CloseButtonWrapper = styled.div`
    width: 92%;
    text-align: right;
`

export const CloseButton = styled.button.attrs({ ariaLabel: 'Close Menu' })`
    color: ${({ theme }) => theme.palette.black};
`

export const Photo = styled.img`
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`