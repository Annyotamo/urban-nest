import React from 'react'
import { BiSearch } from "react-icons/bi"

const Search = () => {
    return (
        <div className='border=[1px] w-full md:w-[50vw] p-4 shadow-md transition cursor-pointer bg-[#FAEDCD] rounded-xl'>
            <div className='text-sm text-brown-700 flex flex-row items-center justify-between gap-2'>
                <input type='text' className='bg-[#FAEDCD] p-2 w-[100%] outline-0' placeholder='Search anything, anywhere....' />
                <div className='p-2 bg-[#D4A373] rounded-full text-white'>
                    <BiSearch size={30} />
                </div>
            </div>
        </div>
    )
}

export default Search
