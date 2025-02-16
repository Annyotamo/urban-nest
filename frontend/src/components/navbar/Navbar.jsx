import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const Navbar = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#edd9a6] to-[#FAF3E0]">
            <div className="p-4">
                <div className="flex md:flex-row flex-col items-center justify-evenly gap-3 md:gap-0">
                    <div className='flex flex-row justify-center items-center'>
                        <Logo />
                        <h1 className="text-3xl max-w-[300px] md:hidden font-bold text-center text-[#5F4B32]/50 font-poppins">
                            List Your Home & Start Earning
                        </h1>
                    </div>
                    <div className='flex flex-row gap-5 md:gap-10 md:w-[75%] w-full justify-center items-center'>
                        <Search />
                        <UserMenu />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar
