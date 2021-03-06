import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Events from './pages/Events.js'

import Header from './Header';
import './App.css';
import "./sidebar.css";




function App() {
    return (
        <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/events" component={Events}/>
            </Switch>

        </div>
        </BrowserRouter>
    );
}


export default App;
