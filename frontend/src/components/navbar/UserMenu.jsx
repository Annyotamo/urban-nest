import React, { useCallback, useState, useEffect, useRef } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from '../Avatar';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative" ref={menuRef}>
            <div className="flex flex-row items-center gap-3">
                <Link to="/list">
                    <div className="hidden md:flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-full transition duration-300 cursor-pointer bg-[#D4A373] text-white shadow-lg hover:bg-[#ad7a4b] hover:shadow-xl transform hover:scale-105">
                        <FaHome />
                        Rent Your Home
                    </div>
                </Link>

                <div
                    onClick={toggleOpen}
                    className="p-3 border border-neutral-300 gap-3 rounded-full cursor-pointer shadow-sm bg-white hover:shadow-md"
                >
                    <AiOutlineMenu className="text-[#8B5A2B] text-xl" />
                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[80vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm z-50">
                    <div className="flex flex-col cursor-pointer">
                        <MenuItems closeModal={setIsOpen} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
