import React from 'react'
import reactdom from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootid = document.getElementById('root');

const root = reactdom.createRoot(rootid);

root.render(
  <React.StrictMode>
    <App />
  </ React.StrictMode>,
)
