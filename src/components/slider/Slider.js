import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

import { Autoplay, Pagination } from "swiper";
import SliderHero from "../sliderHero/SliderHero";

const SLIDER_DATA = [
  {
    heading: "Shop New Arrivals",
    description: "Our coolest new items are waiting for you!",
    text_color: "#10504F",
    img_name: "heroImage1",
  },
  {
    heading: "Our Fave Tees",
    description: "Shop all of our favorites.",
    text_color: "#FFF",
    img_name: "heroImage2",
  },
  {
    heading: "Men’s Tees",
    description: "Find the perfect shirt.",
    text_color: "#FFF",
    img_name: "heroImage3",
  },
];
const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {SLIDER_DATA.map((data) => (
          <SwiperSlide>
            <SliderHero data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider_Text">
        <h1
          className="slide_heading"
        >
          Shop New Arrivals
        </h1>
        <p>Our coolest new items are waiting for you!</p>
        <button className="slide_button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Slider;
