import React from 'react'

const Option = ({ label, description, Icon, selected = false }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral-800' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}>

            <Icon size={26} />
            <div className='font-medium text-sm'>{label}</div>
        </div>
    )
}

export default Option
