import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import Header from './Header';
import Contact from './Tabs/Contact';
import Reviews from './Tabs/Reviews';
import Photos from './Tabs/Photos';
import About from './Tabs/About';
import Home from './Tabs/Hotel';
import Location from './Tabs/Location';
function App() {
  return (
    <HttpsRedirect>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </HttpsRedirect>
  );
}

export default App;
