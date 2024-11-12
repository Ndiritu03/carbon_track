// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LogIn';
import SingUp from './pages/SingUp';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/singup' element={<SingUp/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;