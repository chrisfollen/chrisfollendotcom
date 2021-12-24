import React from 'react'
import PropTypes from 'prop-types'
import { CloseButton, PhotoModalContainer, CloseButtonWrapper, Photo } from './style'
import { Heading3 } from '../../../../Typography/style';

export default function PhotoModal({ togglePhotoModal, currentPhoto, modalActive }) {

    const handleCloseButtonClick = () => {
        togglePhotoModal();
    }

    console.log('modalActive', modalActive)

    return (
        <PhotoModalContainer modalActive={modalActive}>
            <CloseButtonWrapper>
                <CloseButton onClick={handleCloseButtonClick}><Heading3>&times;</Heading3></CloseButton>
            </CloseButtonWrapper>
            <Photo src={currentPhoto} alt="rad" />
        </PhotoModalContainer>
    )
}

PhotoModal.propTypes = {
    togglePhotoModal: PropTypes.func.isRequired,
    currentPhoto: PropTypes.string.isRequired,
    modalActive: PropTypes.bool.isRequired
}