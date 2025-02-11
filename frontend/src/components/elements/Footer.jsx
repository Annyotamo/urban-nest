// components/footer/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center py-4 mt-6 ">
            <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Urban-Nest. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
