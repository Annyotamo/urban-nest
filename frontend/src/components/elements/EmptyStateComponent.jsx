import React from 'react';

const EmptyStateComponent = ({ primary = "No listings found.", secondary = "Try adjusting your search or check back later." }) => {

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
            <h2 className="text-gray-700 font-semibold text-2xl mb-2">{primary}</h2>
            <p className="text-gray-500">{secondary}</p>
        </div>
    );
};

export default EmptyStateComponent;
