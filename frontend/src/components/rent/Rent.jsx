import React, { useEffect, useRef } from 'react';

const RentPropertyAd = () => {
    const images = [
        'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1709744873177-714d7ab0fe02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1691677749553-1b6c76821339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1663091336993-f565da28dd03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
    ];

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollElement = scrollRef.current;

        let scrollInterval;
        if (scrollElement) {
            scrollInterval = setInterval(() => {
                if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.offsetWidth) {
                    scrollElement.scrollLeft = 0;
                } else {
                    scrollElement.scrollLeft += 2; // Increased speed for faster scrolling
                }
            }, 10); // Faster scroll interval
        }

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div
            className="min-h-screen p-8 md:p-16"
            style={{
                backgroundColor: '#FAEDCD',
                background: 'linear-gradient(45deg, #FAEDCD, #E9EDC9, #D4A373, #CCD5AE)',
                animation: 'gradientBackground 10s ease infinite',
            }}
        >
            {/* Infinite Gradient Animation */}
            <style>{`
        @keyframes gradientBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

            <div
                className="bg-white p-8 rounded-lg shadow-xl max-w-5xl mx-auto"
                style={{ backgroundColor: '#E9EDC9' }}
            >
                {/* Heading */}
                <h1
                    className="text-4xl md:text-6xl font-extrabold text-center mb-6"
                    style={{ color: '#D4A373' }}
                >
                    Your Dream Stay Awaits
                </h1>

                {/* Carousel */}
                <div className="overflow-hidden w-full mb-8">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 items-center w-full"
                        style={{
                            overflowX: 'scroll',
                            whiteSpace: 'nowrap',
                            scrollBehavior: 'smooth',
                            scrollbarWidth: 'none', // For Firefox
                        }}
                    >
                        {images.concat(images).map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Property ${index + 1}`}
                                className="rounded-lg shadow-md object-cover h-60 w-96 flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                {/* Advertisement Content */}
                <div className="text-center">
                    <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#CCD5AE' }}>
                        Escape to a beautiful, fully equipped property where every detail is crafted to provide
                        comfort and elegance. Enjoy the perfect mix of style and convenience for your next
                        getaway.
                    </p>
                    <ul className="text-left text-lg md:text-xl space-y-3 mb-8">
                        <li className="flex items-center">
                            <span className="text-yellow-500 mr-2">✔</span> Stunning Interiors with Modern
                            Furnishings
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-500 mr-2">✔</span> Prime Location Close to Attractions
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-500 mr-2">✔</span> High-Speed Wi-Fi & Smart Features
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-500 mr-2">✔</span> Perfect for Vacations or Business
                            Trips
                        </li>
                    </ul>
                    <button
                        className="bg-D4A373 text-white font-bold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 hover:bg-D4A373-light transition duration-300 ease-in-out"
                        style={{ backgroundColor: '#D4A373' }}
                        onClick={() => window.location.href = '/rent-options'}
                    >
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RentPropertyAd;
