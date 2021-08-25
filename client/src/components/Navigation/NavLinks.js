import React, { useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import decode from 'jwt-decode';

import './NavLinks.css';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';

const NavLinks = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const logout = () => {
        dispatch({ type: LOGOUT })
        history.push('/');
        setUser(null);
    }

    useEffect(() => {

        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

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
            {!user?.result ? (
                <li>
                    <NavLink
                        to={{
                            pathname: "/auth",
                        }}
                    >
                        LOGIN
                    </NavLink>
                </li>
            ) : (
                <>
                    <li>
                        <NavLink to="/abstract/create">CREATE</NavLink>
                    </li>
                </>
            )}
            {user?.result && (
                <li>
                    <Button
                        style={{ fontWeight: "bold", font: "inherit" }}
                        onClick={logout}
                    >
                        LOGOUT
                    </Button>
                </li>
            )}
        </ul>
    )
}

export default NavLinks
