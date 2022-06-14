import React from 'react'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     ,
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const root =createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
