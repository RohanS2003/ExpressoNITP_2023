import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Image from "./assets/images.jpg";
import dogImage from "./assets/dog.jpg";
import "./AutomaticSlideshow.css";

export default function AutomaticSlideshow() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: Image,
    },
    {
      url: dogImage,
    },
    // Add more images if needed
  ];

  return (
    <div className="display">
      <SimpleImageSlider
        width={getSliderWidth()}
        height={getSliderHeight()}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      />
    </div>
  );
}

function getSliderWidth() {
  if (window.innerWidth >= 768) {
    // Large screens like tablets and desktops
    return 800;
  } else {
    // For phone screens
    return window.innerWidth;
  }
}

function getSliderHeight() {
  if (window.innerWidth >= 768) {
    // Large screens like tablets and desktops
    return 450;
  } else {
    // For phone screens
    return window.innerHeight * 0.6; // Adjust the height as needed
  }
}
