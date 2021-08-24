import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';

import './NavLinks.css';
import useStyles from './styles';

const NavLinks = () => {
    const classes = useStyles();
    const user = null;

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
            {
                user ? (
                    <div>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <li>
                            <NavLink>Logout</NavLink>
                        </li>
                    </div>
                ) : (
                    <li>
                        <NavLink to="/auth">Login</NavLink>
                    </li>
                )
            }
        </ul>
    )
}

export default NavLinks
