import React from 'react'
import { Link } from "react-router-dom"

const MenuItem = ({ onClick, label, endpoint }) => {
    return (
        <Link to={endpoint}>
            <div onClick={onClick} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                {label}
            </div>
        </Link>

    )
}

export default MenuItem
