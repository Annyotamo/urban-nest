import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import HeroBanner from '../elements/HeroBanner';

const RentAd = ({ toggle }) => {
    const images = [
        'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1709744873177-714d7ab0fe02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1691677749553-1b6c76821339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1663091336993-f565da28dd03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
    ];

    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                await controls.start({
                    x: '-100%',
                    transition: { duration: 30, ease: 'linear' },
                });
                controls.set({ x: '0%' });
            }
        };

        sequence();
    }, [controls]);

    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{
                fontFamily: "'Poppins', sans-serif",
                backgroundColor: '#FAEDCD',
                background: 'linear-gradient(45deg, #FAEDCD, #E9EDC9, #D4A373, #CCD5AE)',
                animation: 'gradientBackground 15s ease infinite',
            }}
        >
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

                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Dancing+Script:wght@500&display=swap');
            `}</style>

            <div className="w-full mt-10 px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden w-full mb-6">
                    <motion.div
                        className="flex gap-4 items-center w-full"
                        animate={controls}
                        style={{
                            display: 'flex',
                        }}
                    >
                        {images.concat(images).map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Property ${index + 1}`}
                                className="rounded-lg shadow-md object-cover h-48 md:h-64 w-64 md:w-80 flex-shrink-0"
                                loading="lazy"
                            />
                        ))}
                    </motion.div>
                </div>

                <HeroBanner action={toggle} />
            </div>
        </div>
    );
};

export default RentAd;