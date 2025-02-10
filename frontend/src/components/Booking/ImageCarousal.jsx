import React from 'react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

const ImageCarousel = ({ images }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8"
        >
            {images.length > 2 ? (
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={2} // Display 2 images at a time
                    navigation
                    loop={true} // Enable infinite looping
                    breakpoints={{
                        320: { slidesPerView: 1 }, // On small screens, show 1 image
                        768: { slidesPerView: 2 }, // On medium screens, show 2 images
                    }}
                    className="rounded-lg"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Listing Image ${index + 1}`}
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Listing Image ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                    ))}
                </div>
            )}
        </motion.section>
    );
};

export default ImageCarousel;
