import React from 'react';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import logo from '../../assets/logo.png';
import './MainNavigation.css';

const MainNavigation = (props) => {
    return (
        <React.Fragment>
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span />
                    <span />
                    <span />
                </button>
                <img style={{marginBottom:"7px"}} src={logo} className="main-navigation__title" />
                <nav className="main-navigation__header-nav">
                   <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;
