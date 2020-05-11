import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide  as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu right>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <a className="menu-item" href="https://www.facebook.com/fusionuci/">
                Facebook
            </a>
        </Menu>
);
};