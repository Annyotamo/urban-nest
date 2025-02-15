import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Updated import
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles

const ImageCarousal = ({ images, height = 56 }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className={`w-full h-${height}`}
            lazy="true" // Enable lazy loading
        >
            {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                    <img
                        src={img} // Use a placeholder or low-res image here
                        data-src={img} // Actual image source
                        alt={`Property ${idx}`}
                        className="swiper-lazy w-full h-56 object-cover"
                        loading="lazy" // Native lazy loading
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageCarousal;