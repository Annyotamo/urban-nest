import React, { useEffect, useState } from 'react';

const OverlayModal = ({ close, children, heading, subHeading, showPrev = true, showNext = true, setSlide, slide }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the modal with animation
        setIsVisible(true);

        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = "17px";

        // Cleanup: Re-enable scrolling when the modal is closed
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = "0px";
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false); // Trigger exit animation
        setTimeout(() => close(false), 300); // Wait for animation to complete
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
                className={`bg-white rounded-lg shadow-lg max-w-md w-full relative transform transition-all duration-300 ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'}`}
            >
                {/* Header Section */}
                <div className="border-b text-[#d4a373] text-xl font-semibold rounded-t-lg p-4 flex justify-between items-center">
                    <h2 className="text-center w-[100%]">{heading}</h2>
                    <button
                        className="text-[#d4a373] text-3xl font-semibold pr-2 flex items-center justify-center rounded-full transition-transform transform hover:scale-110"
                        onClick={handleClose}
                        aria-label="Close Modal"
                    >
                        &times;
                    </button>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4a373] scrollbar-track-[#f3f3f3]">
                    {subHeading && <div className="text-lg mb-4">{subHeading}</div>}
                    {children}
                </div>

                {/* Footer Section with Navigation Buttons */}
                <div className="flex justify-between items-center border-t p-4 ">
                    {showPrev && (
                        <button
                            className="bg-[#d4a373] text-[#fefae0] py-2 px-4 rounded-lg shadow-md hover:bg-[#b08968] transition-transform transform hover:scale-105"
                            onClick={() => setSlide(prev => --prev)}
                        >
                            Previous
                        </button>
                    )}
                    {showNext && (
                        <button
                            className="bg-[#d4a373] text-[#fefae0] py-2 px-4 rounded-lg shadow-md hover:bg-[#b08968] transition-transform transform hover:scale-105 ml-auto"
                            onClick={() => setSlide(prev => ++prev)}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OverlayModal;
