import React from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import { SliderData } from "../data/Data";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

function Slides(slide) {
  return (
    <SliderCard
      key={slide.id}
      image={slide.image}
      title={slide.title}
      content={slide.content}
    />
  );
}

export default function SliderSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="slider-section">
      <div className="slider-container">
        <h1>Testimonials</h1>
        <div className="slider-card-container">
          <Slider {...settings}>
            <div>{SliderData.map(Slides)}</div>
            <div>{SliderData.map(Slides)}</div>
            <div>{SliderData.map(Slides)}</div>
            <div>{SliderData.map(Slides)}</div>
            <div>{SliderData.map(Slides)}</div>
            <div>{SliderData.map(Slides)}</div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
