import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/feed">Eureka 4.0 Feed</NavLink>
            </li>
            <li>
                <NavLink to="/eureka3">Eureka 3.0</NavLink>
            </li>
            <li>
                <NavLink to="/eureka2">Eureka 2.0</NavLink>
            </li>
            <li>
                <NavLink to="/eureka1">Eureka 1.0</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Login</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
