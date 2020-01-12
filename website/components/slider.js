
import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";
import image1 from "../../data/images/home/bus1.jpg";
import image2 from "../../data/images/home/bus2.jpg";
import image3 from "../../data/images/home/bus3.jpg";


const Slide = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    
  );
}

export default Slide;