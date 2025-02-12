import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { category } from '../../redux/slices/search/search.slice';
const Option = ({ label, description, Icon }) => {

    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    function handleClick() {
        setSelected(prev => !prev);
        dispatch(category(label.toLowerCase()));
    }


    return (
        <div title={description} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral-800' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}
            onClick={handleClick}>
            <Icon size={26} className="text-brown-700" />
            <div className='font-medium text-sm'>{label}</div>
        </div>
    )
}

export default Option
