import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Channel from "./Channel";
import Stream from "./Stream";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/channel" element={<Channel />} />
                <Route path="/stream" element={<Stream />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;

// to use routes, simply run npm start to open a live server, then at the end of the URL:
// type "/" for the default route which in this case takes you to App.js page
// Or "/profile" which takes you to the Profile.js page
// Or "/channel" which takes you to the Channel.js page
// Or "/stream" which takes you to the Stream.js page