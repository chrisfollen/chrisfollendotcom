import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function PhotoCarousel() {


  return (
    <Carousel showThumbs={false} showArrows={false} showStatus={false}>
        <div>
            <img src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/cwf%20about%20photos%2Fabout-3.jpg?alt=media&token=28194f73-0a88-498c-a511-15894ff7268e' alt='chris headshot' />
        </div>
        <div>
            <img src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/cwf%20about%20photos%2Fabout-2.jpg?alt=media&token=22364953-ab7d-4dcc-8082-be5b9986b255' alt='chris headshot 2'/>
        </div>
        <div>
            <img src='https://firebasestorage.googleapis.com/v0/b/chrisfollendotcom.appspot.com/o/cwf%20about%20photos%2Fabout-1.jpg?alt=media&token=00ef7a92-a0f6-4b36-93e4-bea954de9396' alt='chris headshot 3' />
        </div>
    </Carousel>

  );
}