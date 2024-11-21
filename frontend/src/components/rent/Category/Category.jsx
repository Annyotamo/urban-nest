import React, { useState } from 'react'

const Category = ({ option }) => {
    const [select, setSelect] = useState(false);
    return (
        <div
            key={option.label}
            className={` flex flex-col items-center justify-center p-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer`}
            style={{
                backgroundColor: `${!select ? "#d4a373" : "black"}`,
                color: '#fefae0',
            }}
            onClick={() => setSelect(prev => !prev)}
        >
            <option.icon className="text-3xl mb-2" />
            <h3 className="text-sm font-medium">{option.label}</h3>
        </div>
    )
}

export default Category
