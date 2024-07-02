import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./slide.css";
import data from "./data";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);
    return () => clearInterval(intervalId);
  }, [slide]);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.slides.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.slides.map((item, index) => {
          return (
            <button
              key={index}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(index)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
