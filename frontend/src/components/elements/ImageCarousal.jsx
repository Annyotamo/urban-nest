import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const ImageCarousal = ({ images, height = 56 }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className={`w-full h-${height}`}
        >
            {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                    <img src={img} alt={`Property ${idx}`} className="w-full h-56 object-cover" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ImageCarousal
