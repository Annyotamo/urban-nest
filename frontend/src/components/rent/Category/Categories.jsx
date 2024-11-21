import React from 'react'
import { options } from '../../navbar/Categories'
import Category from './Category'

const Categories = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {options.map((option) => (
                <Category option={option} key={option.label} />
            ))}
        </div>
    )
}

export default Categories
