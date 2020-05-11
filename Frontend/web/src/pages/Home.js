import React from 'react';
import SideBar from "../sidebar";
import logo from "../assets/fusion_logo.png";

const home = () => {
    return (
        <div id="App">

            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

            <div id="page-wrap">
                <h1>conFUSION</h1>
            </div>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

        </div>
    );
}

export default home;