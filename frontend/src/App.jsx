import React from 'react';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


      </Routes>

    </BrowserRouter>
  );
}