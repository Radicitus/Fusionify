import React from 'react';
import SideBar from "../sidebar";
import logo from "../assets/fusion_logo.png";

const About = () => {
    return (
        <div id="About">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div id="page-wrap">
                <h1>conFUSION</h1>
            </div>

            <div>
                <h1>About US</h1>
                <p>About US page body content</p>
            </div>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>


        </div>
);
}

export default About;