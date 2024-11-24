import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const ImageNavigationArrows = ({ uploadedImages, imageCount, setImageCount }) => {

    function handleNext() {
        if (imageCount < uploadedImages.length - 2) {
            setImageCount((prev) => prev + 1);
        }
    }

    function handlePrev() {
        if (imageCount > 0) {
            setImageCount((prev) => prev - 1);
        }
    }

    return (
        <>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 disabled:hidden"
                onClick={handlePrev}
                disabled={imageCount === 0}
            >
                <FaArrowLeft />
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 disabled:hidden"
                onClick={handleNext}
                disabled={imageCount >= uploadedImages.length - 2}
            >
                <FaArrowRight />
            </button>
        </>
    )
}

export default ImageNavigationArrows
