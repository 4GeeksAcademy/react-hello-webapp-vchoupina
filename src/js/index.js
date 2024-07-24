//import react into the bundle
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js';
import { ContextProvider } from './store/appContext';

//
const root = createRoot(document.querySelector("#app"));

//render your react application
root.render(
    <ContextProvider>
        <Router>
            <Layout />
        </Router>
    </ContextProvider>
);
