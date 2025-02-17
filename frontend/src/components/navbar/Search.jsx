import React, { useCallback, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { search } from "../../redux/slices/search/search.slice";

const Search = () => {
    const dispatch = useDispatch();
    const searchRef = useRef("");

    const handleSearch = useCallback(() => {
        const searchTerm = searchRef.current.value.trim();
        if (searchTerm) dispatch(search(searchTerm));
        else dispatch(search(""));
    }, [dispatch]);

    return (
        <div className="w-full max-w-[90vw] md:max-w-[50vw] p-3 sm:p-4 shadow-md transition cursor-pointer bg-[#FAEDCD] rounded-xl border border-neutral-300">
            <div className="flex items-center justify-between gap-2">
                {/* Search Input */}
                <input
                    type="text"
                    ref={searchRef}
                    className="w-full bg-[#FAEDCD] p-2 text-sm md:text-base outline-none placeholder-gray-600"
                    placeholder="Search anything, anywhere..."
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />

                {/* Search Button */}
                <button
                    className="p-2 sm:p-3 bg-[#D4A373] rounded-full text-white flex items-center justify-center transition-transform duration-300 hover:scale-105"
                    onClick={handleSearch}
                    aria-label="Search"
                >
                    <BiSearch size={24} />
                </button>
            </div>
        </div>
    );
};

export default Search;
