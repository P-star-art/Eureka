import React, { useState } from 'react';

import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIElements/BackDrop';
import NavLinks from './NavLinks';
import logo from '../../assets/logo.png';
import './MainNavigation.css';

const MainNavigation = (props) => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
            {
                drawerIsOpen && <BackDrop onClick={closeDrawer} />
            }
            <SideDrawer onClick={closeDrawer} show={drawerIsOpen} >
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>
            
            <MainHeader>
                <button onClick={openDrawer} className="main-navigation__menu-btn">
                    <span />
                    <span />
                    <span />
                </button>
                <img style={{ marginBottom: "7px" }} src={logo} className="main-navigation__title" />
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;
