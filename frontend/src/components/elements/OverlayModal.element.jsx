import React, { useEffect } from 'react';

const OverlayModal = ({ close, children, heading, subHeading }) => {
    useEffect(() => {
        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';

        // Cleanup: Re-enable scrolling when the modal is closed
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
                {/* Header Section */}
                <div className="border-b text-[#d4a373] mx-5 text-xl font-semibold rounded-t-lg px-4 py-3 flex justify-between items-center">
                    <h2 className="text-center w-[100%]">{heading}</h2>
                    <button
                        className="text-white hover:bg-red-600 px-2 flex items-center justify-center rounded-full transition-transform transform hover:scale-110"
                        onClick={() => close(false)}
                        aria-label="Close Modal"
                    >
                        &times;
                    </button>
                </div>

                {/* Content Section */}
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {/* Subheading */}
                    {subHeading && <div className="text-lg mb-4">{subHeading}</div>}
                    {/* Children */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default OverlayModal;
