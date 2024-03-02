import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Landing from './pages/Landing/Landing'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import SideBar from './components/SideBar/SideBar';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LoadingScreen></LoadingScreen>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Landing />} />
          {/* <Route path="ai-asset-requests" element={<UnderConstruction />} /> */}
          <Route path="sticker-generator" element={<UnderConstruction />} />
          <Route path="text-based-game" element={<UnderConstruction />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
