import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">Home</Link>
                <br/>
                <Link to="/play">Play</Link>
            </div>
        )
    }
}
