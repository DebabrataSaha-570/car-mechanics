import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../img/Banner/banner-1.jpg'
import Banner10 from '../../../img/Banner/banner-1.png'


const Banner = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        // if I want to change the width of slider width and also want the slider to width 100% then I have to crop the image 
                        className="d-block w-100"

                        src={Banner10}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={Banner10}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner10}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;