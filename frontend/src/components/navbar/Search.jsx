import React, { useCallback } from 'react'
import { BiSearch } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { search } from '../../redux/slices/search/search.slice'

const Search = () => {

    const dispatch = useDispatch();
    const handleSearchCallback = useCallback(function handleSearchChange(e) {
        dispatch(search(e.target.value));
    }, [])


    return (
        <div className='border=[1px] w-full md:w-[50vw] p-4 shadow-md transition cursor-pointer bg-[#FAEDCD] rounded-xl'>
            <div className='text-sm text-brown-700 flex flex-row items-center justify-between gap-2'>
                <input type='text' onChange={handleSearchCallback} className='bg-[#FAEDCD] p-2 w-[100%] outline-0' placeholder='Search anything, anywhere....' />
                <div className='p-2 bg-[#D4A373] rounded-full text-white'>
                    <BiSearch size={30} />
                </div>
            </div>
        </div>
    )
}

export default Search
