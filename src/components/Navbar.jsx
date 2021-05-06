// import React, { useState } from 'react'
import tempLogo from '../Images/tempLogo.png'

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <img src={tempLogo} alt=""/>
                <input type="search" name="Search" id="" placeholder="   Search City, ZIP, or Location"/>
            </ul>
        </nav>
    )
}

export default Navbar
