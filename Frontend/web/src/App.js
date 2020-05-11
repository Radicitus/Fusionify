import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js'
import Contact from './pages/Contact.js'

import './App.css';
import "./sidebar.css";

function App() {
    return (
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
}




export default App;
