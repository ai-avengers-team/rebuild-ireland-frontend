import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-secondary">
            <div className="container mx-auto flex justify-between items-center my-3 py-3">
                <NavLink
                    to="/"
                    className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-black'} hover:text-customLightGreen`}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/officers"
                    className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-black'} hover:text-customLightGreen`}
                >
                    Officers
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => `text-lg font-semibold ${isActive ? 'text-customGreen' : 'text-black'} hover:text-customLightGreen`}
                >
                    Contact Us
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
