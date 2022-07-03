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
        <SwiperSlide> <Image src="https://uidesign.gbtcdn.com/GB/image/8823/VIP_1190x420_EN.jpg" /> </SwiperSlide>
        <SwiperSlide> <Image src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg" /></SwiperSlide>
        <SwiperSlide> <Image src="https://uidesign.gbtcdn.com/GB/image/8823/ATOMSTACK+_PC_En.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <Image src="https://imgaz.staticbg.com/banggood/os/202206/20220623215104_319.jpg" alt="" /> </SwiperSlide>
      </Swiper>
    </>
  );
}
