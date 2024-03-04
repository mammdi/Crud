import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import profile from '../../assest/profile.jpg'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

export default function Section6() {
  return (
    <div className="py-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div
            style={{
              minHeight: "200px",
              width: "90%",
              background: "white",
              padding:'30px',
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 6px 16px;", 
            }}
            className="shadow-2xl"
          >
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
            id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
            <div className="flex justify-center mt-6">
                <img src={profile} alt="profile" />
            </div>
            <div className="my-2">Abraham Linkon , Themefisher.com</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              minHeight: "200px",
              width: "90%",
              background: "white",
              padding:'30px',
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 6px 16px;", 
            }}
            className="shadow-2xl"
          >
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
            id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
            <div className="flex justify-center mt-6">
                <img src={profile} alt="profile" />
            </div>
            <div className="my-2">Abraham Linkon , Themefisher.com</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              minHeight: "200px",
              width: "90%",
              background: "white",
              padding:'30px',
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 6px 16px", 
            }}
            className="shadow-2xl"
          >
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
            id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
            <div className="flex justify-center mt-6">
                <img src={profile} alt="profile" />
            </div>
            <div className="my-2">Abraham Linkon , Themefisher.com</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              minHeight: "200px",
              width: "90%",
              background: "white",
              padding:'30px',
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 6px 16px;", 
            }}
            className="shadow-2xl"
          >
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
            id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
            <div className="flex justify-center mt-6">
                <img src={profile} alt="profile" />
            </div>
            <div className="my-2">Abraham Linkon , Themefisher.com</div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
