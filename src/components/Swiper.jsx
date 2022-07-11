import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"



// import required modules
import { Pagination } from "swiper";
import { Autoplay } from "swiper";
export default function SwiperCom() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,  
        }}
        modules={[Pagination,Autoplay]}
        autoplay={{delay:1500}}
        className="mySwiper"
      >
        
        <SwiperSlide> <img src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg" layout='fill' /> </SwiperSlide>
        <SwiperSlide> <img src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg" layout='fill' /></SwiperSlide>
        <SwiperSlide> <img src="https://uidesign.gbtcdn.com/GB/image/8823/ATOMSTACK+_PC_En.jpg" alt="" layout='fill' /> </SwiperSlide>
        <SwiperSlide> <img src="https://imgaz.staticbg.com/banggood/os/202206/20220623215104_319.jpg" alt="" layout='fill' /> </SwiperSlide>
      </Swiper>
    </>
  );
}
