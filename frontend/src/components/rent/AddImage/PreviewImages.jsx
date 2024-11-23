import React from 'react'
import PreviewImage from './PreviewImage'
import ImageNavigation from './ImageNavigationArrows'

export default function PreviewImages({ uploadedImages, handleNext, handlePrev, currentIndex, handleRemoveImage }) {
    return (
        <div className="mt-8">
            {uploadedImages.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>No images uploaded yet.</p>
                    <p>Upload your images to view them here.</p>
                </div>
            ) : (
                <div className="relative overflow-hidden">
                    {/* Carousel */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 50}%)`,
                        }}
                    >
                        {uploadedImages.map((image, index) => (
                            <PreviewImage key={index} index={index} image={image} handleRemoveImage={handleRemoveImage} currentIndex={currentIndex} />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    {uploadedImages.length > 2 && (
                        <ImageNavigation handleNext={handleNext} handlePrev={handlePrev} currentIndex={currentIndex} uploadedImages={uploadedImages} />
                    )}
                </div>
            )}
        </div>
    )
}
