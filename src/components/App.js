import React from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Nav from './Nav'; 

import '../styles/App.css';

function App() {
    return (
        <Router>
            <Nav />
        </Router>
    );
}

export default App;
