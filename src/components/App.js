import React from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import { Provider as BumbagProvider, PageWithHeader } from 'bumbag';
import Nav from './Nav';
import PostList from './PostList';

function App() {
    return (
        <Router>
            <BumbagProvider>
                <PageWithHeader
                    header={ <Nav /> }
                    border="default"
                >
                    <PostList />
                </PageWithHeader>
            </BumbagProvider>
        </Router>
    );
}

export default App;
