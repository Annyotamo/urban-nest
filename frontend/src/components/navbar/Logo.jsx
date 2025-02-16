import React from 'react'
import logo from "../../assets/urbanNestLogo.png"
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="logo" className="md:block cursor-pointer" height="200" width="200" />
            </Link>
        </div>
    )
}

export default Logo
