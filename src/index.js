import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import PhaseTwo from './components/PhaseTwo';

render(
  <BrowserRouter>
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="phaseTwo" element={<PhaseTwo />} />
       </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
