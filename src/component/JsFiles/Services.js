import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="Image1" />
          <p className="legend">FULL STACK DEVELOPER</p>
        </div>
        <div>
          <img src={img2} alt="Image2" />
          <p className="legend">PEER TO PEER SUPPORT</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
