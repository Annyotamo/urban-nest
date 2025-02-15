import React from 'react'
import { Link } from "react-router-dom"

const MenuItem = ({ onClick, label, endpoint, styles, children }) => {

    return (
        <Link to={endpoint}>
            <div onClick={onClick} className={` ${styles} px-4 py-3 hover:bg-neutral-100 flex items-center transition font-semibold`}>
                {children}
                {label}
            </div>
        </Link>

    )
}

export default MenuItem
