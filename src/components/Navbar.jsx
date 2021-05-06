// import React, { useState } from 'react'
import tempLogo from '../Images/tempLogo.png'
import { GiStripedSun } from "react-icons/gi";

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <div className="left">
                <GiStripedSun className="Logo" />
                <h2 className="siteName">Placeholder Name</h2>
                </div>
                
                    <input type="search" name="Search" id="" placeholder="   Search City, ZIP, or Location"/>
                    
            </ul>
        </nav>
    )
}

export default Navbar
