import React from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import { Provider as BumbagProvider, PageWithHeader } from 'bumbag';
import Nav from './Nav';
import Body from './Body';
import { theme } from '../styles';

var content = {
    post: {
        text: "The post.",
        user: "u/poster",
        upvotes: 22100,
        editMode: false,
    },
    comments: [
        {
            id: 1,
            text: "First Comment",
            user: "u/first",
            upvotes: 2100,
            editMode: false,
            replies: []
        },
        {
            id: 2,
            text: "Second Comment",
            user: "u/second",
            upvotes: 743,
            editMode: false,
            replies: []
        }
    ]
}

function App() {
    return (
        <Router>
            <BumbagProvider theme={theme}>
                <PageWithHeader
                    header={ <Nav /> }
                    border="default"
                >
                    <Body content= {content} />
                </PageWithHeader>
            </BumbagProvider>
        </Router>
    );
}

export default App;
