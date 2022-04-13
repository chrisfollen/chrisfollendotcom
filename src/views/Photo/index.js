import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { Quote1, Quote2 } from '../../Typography/style';
import PhotoModal from './components/PhotoModal';
import { GalleryColumnLeft, GalleryColumnRight, GalleryContainer, QuoteContainer, QuoteOuterWrapper, GalleryPhoto } from './style';
import { getCopy, photos } from './copy';

export default function Photo() {

  useEffect(() => {
    document.title = getCopy.pageTitle
 }, []);

 const [modalActive, setModalActive] = useState(false)
 const [currentPhoto, setCurrentPhoto] = useState(photos.leftColumn[1])

 const togglePhotoModal = () => {
     if (modalActive) {
       setModalActive(false)
     } else {
       setModalActive(true)
     }
 }

 const handlePhotoClick = (event) => {
     const photoURL = event.target.src
     setCurrentPhoto(photoURL)
     togglePhotoModal()
 }

  return (
      <OuterPageContainer>
      <PhotoModal togglePhotoModal={togglePhotoModal} currentPhoto={currentPhoto} modalActive={modalActive}/>
        <QuoteOuterWrapper>
          <QuoteContainer>
            <Quote1>{getCopy.quoteFirstLine}</Quote1>
            <Quote1 style={{marginBottom: '1.6rem'}}>{getCopy.quoteSecondLine}</Quote1>
            <Quote2>{getCopy.quoteAuthor}</Quote2>
          </QuoteContainer>
        </QuoteOuterWrapper>
        <GalleryContainer>
          <GalleryColumnLeft>
            {photos.leftColumn.map(
              photo => (
                <GalleryPhoto className='clickable' onClick={handlePhotoClick} src={photo} key={photo} alt='rad photo'/>
              )
            )}
          </GalleryColumnLeft>
          <GalleryColumnRight>
          {photos.rightColumn.map(
              photo => (
                <GalleryPhoto className='clickable' onClick={handlePhotoClick} src={photo} key={photo} alt='rad photo'/>
              )
            )}
          </GalleryColumnRight>
        </GalleryContainer>
        <Footer/>
      </OuterPageContainer>
  );
}