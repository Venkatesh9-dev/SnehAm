import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // your global styles (with Tailwind)
import App from './App'; // ✅ make sure App.js has `export default App`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
