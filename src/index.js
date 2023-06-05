import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);

// to use routes, simply run npm start to open a live server, then at the end of the URL:
// type "/" for the default route which in this case takes you to App.js page
// Or "/profile" which takes you to the Profile.js page
// Or "/channel" which takes you to the Channel.js page
// Or "/stream" which takes you to the Stream.js page