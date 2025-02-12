import React, { useCallback, useRef } from 'react'
import { BiSearch } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { search } from '../../redux/slices/search/search.slice'

const Search = () => {

    const dispatch = useDispatch();
    const searchRef = useRef("");

    const handleSearch = useCallback(() => {
        const searchTerm = searchRef.current.value; // Get the *current* value here
        dispatch(search(searchTerm));
    }, []);

    return (
        <div className='border=[1px] w-full md:w-[50vw] p-4 shadow-md transition cursor-pointer bg-[#FAEDCD] rounded-xl'>
            <div className='text-sm text-brown-700 flex flex-row items-center justify-between gap-2'>
                <input type='text' ref={searchRef} className='bg-[#FAEDCD] p-2 w-[100%] outline-0' placeholder='Search anything, anywhere....'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }} />
                <div className='p-2 bg-[#D4A373] rounded-full text-white' onClick={handleSearch}>
                    <BiSearch size={30} />
                </div>
            </div>
        </div>
    )
}

export default Search
