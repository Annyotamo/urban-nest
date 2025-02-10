import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const ImageCarousel = ({ images }) => {
    return (
        <Swiper
            pagination={{ type: "fraction" }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full h-44"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image}
                        alt={`Listing Image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ImageCarousel;