import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './XOStyle.css';
import Home from './Home.js';
import MainGame from './MainGame.js';
import LoaderHandler from './LoaderHandler.js';
import swDev from './swDev.js';

function START() {
    return (
        <>
            <div id="Loader"><span id = "AppName">TIC</span><span id = "AppName2">TAC</span><span id = "AppName3">TOE</span></div>
            <LoaderHandler />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/MainGame" element={<MainGame />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START />);

