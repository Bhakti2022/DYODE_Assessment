import React from "react";
import "./newArrival.css";
import NewArrivalHero from "../newArrivalHero/NewArrivalHero";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const NEW_ARRIVALS = [
  {
    title: "Product Title",
    description: "WOMEN’S T-SHIRT",
    price: "19.99",
    img: "productImage1",
  },
  {
    title: "Product Title",
    description: "WOMEN’S T-SHIRT",
    price: "19.99",
    img: "productImage1",
  },
  {
    title: "Product Title",
    description: "WOMEN’S T-SHIRT",
    price: "19.99",
    img: "productImage1",
  },
  {
    title: "Product Title",
    description: "WOMEN’S T-SHIRT",
    price: "19.99",
    img: "productImage1",
  },
];

const NewArrival = () => {
  return (
    <div className="newArrival">
      <h1>New Arrivals</h1>
      <div className="newArrival_items">
        <Swiper
          breakpoints={{
            800: { slidesPerView: 4,
            spaceBetween: 10 },
          }}
          slidesPerView={2}
          spaceBetween={1}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {NEW_ARRIVALS.map((newArrival) => (
            <SwiperSlide>
              <NewArrivalHero newArrival={newArrival} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrival;
