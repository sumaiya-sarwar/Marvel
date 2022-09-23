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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img height='500px'
          className="d-block w-100"
          src="https://bookriot.com/wp-content/uploads/2021/08/marvel-comics-1280x720.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height='500px'
          className="d-block w-100"
          src="https://staticg.sportskeeda.com/editor/2022/04/ab73a-16513252938249-1920.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        </>
    )
}

export default HomeSlider;