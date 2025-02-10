import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import Avatar from '../Avatar'
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    })

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <Link to="/list">
                    <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer bg-rose-500 text-white hover:text-black'>
                        Rent your home
                    </div></Link>
                <div onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm z-50'>
                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <MenuItem label='login' endpoint="/user/login" styles="border-t" />
                            <MenuItem label='Register' endpoint="/user/register" />
                            <MenuItem label='Your bookings' endpoint="/user/bookings" />
                            <MenuItem label='Favourites' endpoint="/user/favourites" />
                            <MenuItem label='logout' endpoint="/user/login" styles="border-t text-red-400" />
                            <MenuItem label='test' endpoint="/test" styles="border-t text-red-400" />
                        </>
                    </div>
                </div>)}
        </div>
    )
}

export default UserMenu
