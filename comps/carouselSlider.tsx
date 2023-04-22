import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css/navigation";
import Image from 'next/image';
import profileImage from "../assets/images/windows.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation]);

const CarouselSlider = () => {
    return (

        <div className='' >
            <Swiper navigation={true} className="mySwiper">
                <SwiperSlide><div className=' w-full h-96 bg-gray-400'><Image layout='fill' objectFit='cover' src={profileImage} alt="Forest" /></div></SwiperSlide>
                <SwiperSlide><div className=' w-full h-96 '><Image layout='fill' objectFit='cover' src={profileImage} alt="Forest" /></div></SwiperSlide>
                


            </Swiper>

        </div>


    );

}

export default CarouselSlider;