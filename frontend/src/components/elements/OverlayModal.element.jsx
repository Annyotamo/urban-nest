import React from 'react'

const OverlayModal = ({ close, children, heading }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
                {/* Header Section */}
                <div className="bg-rose-500 text-white text-lg font-semibold rounded-t-lg px-4 py-3 flex justify-between items-center">
                    <h2>{heading}</h2>
                    <button
                        className="text-white hover:bg-red-600 px-2 flex items-center justify-center rounded-full transition-transform transform hover:scale-110"
                        onClick={() => close(false)}
                        aria-label="Close Modal"
                    >
                        &times;
                    </button>
                </div>

                {/* Content Section */}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default OverlayModal
