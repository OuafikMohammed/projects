// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';  

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import App from "./App";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById('root'));
root.render(<App />);
