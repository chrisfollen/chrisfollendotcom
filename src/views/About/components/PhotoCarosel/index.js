import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { headshots } from './copy';

export default function PhotoCarousel() {


  return (
    <Carousel showThumbs={false} showArrows={false} showStatus={false}>
        {headshots.map(
              photo => (
                 <img src={photo} key={photo} alt='chris headshot' />
              )
            )}

    </Carousel>

  );
}