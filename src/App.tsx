import React from 'react';
import "./App.css";
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";



export const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    )
}

export default App;