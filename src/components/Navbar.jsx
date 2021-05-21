// import React, { useState } from 'react'
import { GiStripedSun } from "react-icons/gi";

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <div className="left">
                <GiStripedSun className="Logo" />
                <h2 className="siteName">CapStone Weather</h2>
                </div>
                <input type="search" name="Search" id="" placeholder="Search Location"/> 
            </ul>
        </nav>
    )
}

export default Navbar
