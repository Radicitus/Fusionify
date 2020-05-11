import React from 'react';
import SideBar from "../sidebar";
import logo from "../assets/fusion_logo.png";

const Contact = () => {
    return (
        <div id="Contact">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div id="page-wrap">
                <h1>conFUSION</h1>
            </div>

            <div>
                <h1>Contact US</h1>
                <p>Contact US page body content</p>
            </div>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>


        </div>
);
}

export default Contact;