import React from 'react'
import logo from "../../assets/urbanNestLogo.png"

const Logo = () => {
    return (
        <div>
            <img src={logo} alt="logo" className="hidden md:block cursor-pointer" height="100" width="100" />
        </div>
    )
}

export default Logo
