import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// images
import Img1 from "@/public/assets/images/home/img1.jpg";
import Img2 from "@/public/assets/images/home/img2.jpg";
import Img3 from "@/public/assets/images/home/img3.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// components
import Button from "@/components/ui/button";

export default function SliderSwiper() {
  const sliderItems = [
    {
      title: "Italian Pizza",
      image: Img1,
      url: "",
    },
    {
      title: "Vegetable Food",
      image: Img2,
      url: "",
    },
    {
      title: "Lunch Time",
      image: Img3,
      url: "",
    },
  ];

  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        id="homeslider"
        className="w-full [&>swiper-button-prev]:!text-white"
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index + "homeSlider"}>
            <div
              className="w-full h-full flex items-center justify-center flex-col bg-cover bg-no-repeat relative before:absolute before:z-20 before:w-full before:h-full before:bg-gradient-to-b before:from-black before:opacity-70 gap-6"
              style={{ backgroundImage: `url(${item.image.src})` }}
            >
              <h3 className="md:text-6xl text-3xl md:font-semibold font-bold text-[#ffffff] z-20">{item.title}</h3>

              <Button link="/menu" className="max-w-[13rem] md:h-12 h-10 min-w-max z-20 font-semibold">
                Menu & Order Online
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
