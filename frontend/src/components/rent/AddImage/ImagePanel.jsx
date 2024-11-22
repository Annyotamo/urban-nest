import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const ImageUploadPanel = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onDrop = (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const newImages = acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );
            setUploadedImages((prevImages) => [...prevImages, ...newImages]);

            // Trigger toast notification
            toast.success(`${acceptedFiles.length} image(s) uploaded successfully!`);
        } else {
            toast.error('No valid image files uploaded.');
        }
    };

    const handleRemoveImage = (indexToRemove) => {
        setUploadedImages((prevImages) =>
            prevImages.filter((_, index) => index !== indexToRemove)
        );
        toast.success('Image removed successfully!');
    };

    const handleNext = () => {
        if (currentIndex < uploadedImages.length - 2) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: true,
    });

    return (
        <div className="h-full overflow-y-auto p-6">
            <Toaster position="top-center" reverseOrder={false} />
            <h2 className="text-xl mb-2">Upload Property Images</h2>
            <p className="text-md text-gray-500 mb-6">Make your property look more stunning</p>

            {/* Dropzone */}
            <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer"
            >
                <input {...getInputProps()} />
                <p className="text-gray-500">
                    Drag & drop images here, or <span className="text-blue-500 underline">browse</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">Accepted file types: JPG, PNG</p>
            </div>

            {/* Uploaded Images Section */}
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
                                <div
                                    key={index}
                                    className="relative flex-none w-1/2 px-2 opacity-0 transition-opacity duration-500 ease-in-out"
                                    style={{
                                        opacity: index >= currentIndex && index < currentIndex + 2 ? 1 : 0,
                                    }}
                                >
                                    {/* Image */}
                                    <img
                                        src={image.preview}
                                        alt={`Uploaded ${index}`}
                                        className="rounded-lg shadow-md object-cover w-full h-40"
                                    />

                                    {/* Remove Button */}
                                    <button
                                        className="absolute top-2 right-3 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 shadow-md transition-transform transform hover:scale-105"
                                        onClick={() => handleRemoveImage(index)}
                                        aria-label="Remove Image"
                                    >
                                        <FaTimes size={10} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        {uploadedImages.length > 2 && (
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
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUploadPanel;


