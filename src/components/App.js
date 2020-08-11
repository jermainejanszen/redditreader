import React from 'react';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import { Provider as BumbagProvider, PageWithHeader } from 'bumbag';
import Nav from './Nav';
import Body from './Body';

const theme = {
    palette: {
        primary: "#fe3e17",
    }
}

function App() {
    return (
        <Router>
            <BumbagProvider theme={theme}>
                <PageWithHeader
                    header={ <Nav /> }
                    border="default"
                >
                    <Body />
                </PageWithHeader>
            </BumbagProvider>
        </Router>
    );
}

export default App;
