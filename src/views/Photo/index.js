import React, { useEffect, useState } from 'react'
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { Quote1, Quote2 } from '../../Typography/style';
import PhotoModal from './components/PhotoModal';
import { GalleryColumnLeft, GalleryColumnRight, GalleryContainer, QuoteContainer, QuoteOuterWrapper, GalleryPhoto } from './style';

export default function Photo() {

  useEffect(() => {
    document.title = "Photo - CHRIS FOLLEN"
 }, []);

 const [modalActive, setModalActive] = useState(false)
 const [currentPhoto, setCurrentPhoto] = useState('https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-1.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8')

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
            <Quote1>What is this life if, full of care,</Quote1>
            <Quote1 style={{marginBottom: '1.6rem'}}>We have no time to stand and stare.</Quote1>
            <Quote2>- W.H. Davies</Quote2>
          </QuoteContainer>
        </QuoteOuterWrapper>
        <GalleryContainer>
          <GalleryColumnLeft>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-1.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-3.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-5.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-7.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-9.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-11.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-13.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-15.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-17.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-19.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-21.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-23.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-25.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-27.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-33.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-29.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-31.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-35.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-37.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-39.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-41.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-43.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-45.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-47.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-53.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-51.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-65.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-55.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-57.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-59.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-61.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-63.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-73.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-67.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-69.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-71.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-49.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-75.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-77.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-81.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
          </GalleryColumnLeft>
          <GalleryColumnRight>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-2.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-4.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-6.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-8.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-10.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-12.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-14.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-16.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-18.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-20.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-24.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-26.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-28.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-30.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-32.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-34.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-36.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-38.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-40.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-42.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-44.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-46.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-48.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-50.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-52.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-54.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-56.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-58.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-60.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-62.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-64.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-68.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-66.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-22.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-70.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-72.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-74.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-76.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-78.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-79.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
            <GalleryPhoto className='clickable' onClick={handlePhotoClick} src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/portfolio%2Fportfolio-80.jpg?alt=media&token=1297057b-b625-4b38-a97a-d5c7d7f6f3b8' alt='rad'/>
          </GalleryColumnRight>
        </GalleryContainer>
      </OuterPageContainer>
  );
}