import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper";

export default function App({
  isNavigation,
  isAutoplay,
  isBreakdown,
  data = [],
}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={
          isAutoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        breakpoints={
          isBreakdown
            ? {
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }
            : false
        }
        navigation={isNavigation ? true : false}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.length ? (
          data.map((img) => <SwiperSlide key={img}><img src={img} alt="events" /></SwiperSlide>)
        ) : (
          <>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </>
        )}
      </Swiper>
    </>
  );
}
