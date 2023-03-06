import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Land from './components/Land';
import Crypto from './components/crypto/Crypto';
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/land" element={<Land />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </div>
  );
}

export default App;
