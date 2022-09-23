import React from 'react';
import { Carousel } from 'react-bootstrap';


const HomeSlider = () => {
    return(
        <>
 <Carousel>
      <Carousel.Item interval={1000}>
        <img height='500px'
          className="d-block w-100"
          src="https://gurulex.com/wp-content/uploads/2021/09/Marvel-Movies.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img height='500px'
          className="d-block w-100"
          src="https://bookriot.com/wp-content/uploads/2021/08/marvel-comics-1280x720.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height='500px'
          className="d-block w-100"
          src="https://staticg.sportskeeda.com/editor/2022/04/ab73a-16513252938249-1920.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        </>
    )
}

export default HomeSlider;