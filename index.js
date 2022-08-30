import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> // using strict mode renders components twice for finding bugs
    <App/>    // only in devolpmental process 
  //</React.StrictMode>
);

/*const roottwo = ReactDOM.createRoot(document.getElementById('roottwo'));
roottwo.render(
  <React.StrictMode>
    <Searching />
  </React.StrictMode>
);*/



