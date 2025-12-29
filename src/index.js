// src/index.js
// Add these lines at the very top of src/index.js
import process from 'process';
window.process = process;

// ... your other imports like React, ReactDOM, etc.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);