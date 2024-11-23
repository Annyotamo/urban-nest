import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const ImageNavigationArrows = ({ uploadedImages, currentIndex, handleNext, handlePrev }) => {
    return (
        <>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
                onClick={handlePrev}
                disabled={currentIndex === 0}
            >
                <FaArrowLeft />
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
                onClick={handleNext}
                disabled={currentIndex >= uploadedImages.length - 2}
            >
                <FaArrowRight />
            </button>
        </>
    )
}

export default ImageNavigationArrows
