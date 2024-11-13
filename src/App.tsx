// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/LogIn';
import SingUp from './pages/SingUp';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ReviewPage from './pages/ReviewPage';
import LearnMore from './pages/LearnMore';
import GetInvolved from './pages/GetInvolved';
import IndustriesOverview from './pages/IndustriesOverview';
import GovernmentContributions from './pages/Goverment';
import PrivateSectorContributions from './pages/PrivateSectors';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/singup' element={<SingUp/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path="/reviews" element={<ReviewPage />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/industies-overview" element={<IndustriesOverview />} />
      <Route path="/goverment" element={<GovernmentContributions />} />
      <Route path="/private" element={<PrivateSectorContributions />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
