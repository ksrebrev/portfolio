import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay, Pagination } from "swiper";

import "./styles.scss";

SwiperCore.use([Autoplay, Pagination]);

const Carousel = (slides) => {
  const [autoplay, handleAutoplay] = useState(true);
  const [swiperRef, setSwiperRef] = useState(null);

  // this is ugly like death
  if (swiperRef) {
    swiperRef.pagination.el.onclick = () => {
      handleAutoplay();
      swiperRef.autoplay.stop();
    };
  }

  return (
    <Swiper
      cssMode={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      className={autoplay ? "carousel" : "carousel autoplay-disabled"}
      runCallbacksOnInit={true}
      onSwiper={setSwiperRef}
    >
      {slides.slides.map((slide, i) => {
        return <SwiperSlide key={i}>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Carousel;
