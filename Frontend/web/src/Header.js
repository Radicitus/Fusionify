import React from 'react';
import SideBar from "./sidebar";
import logo from "./assets/fusion_logo.png";

function Header(){
    return (
        <div>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            <div class = "Header">
                <img class="Logo" src= {logo} alt="My logo" align="left"/>
                <span class="Title">confusion</span>
            </div>
        </div>
    )
}

export default Header