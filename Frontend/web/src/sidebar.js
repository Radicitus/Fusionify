import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu right>
            <a className="menu-item" href="/">
                Notifications
            </a>

            <a className="menu-item" href="/contact-us">
                Contact Us
            </a>

            <a className="menu-item" href="/about-us">
                About Us
            </a>

            <a className="menu-item" href="https://www.facebook.com/fusionuci/">
                Facebook Page
            </a>
        </Menu>
);
};