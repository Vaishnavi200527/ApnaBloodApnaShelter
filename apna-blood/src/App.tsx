import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Register from './pages/Register';
import Login from './pages/Login';
import BloodBanks from './pages/BloodBanks';
import DonateBlood from './pages/DonateBlood';
import RequestBlood from './pages/RequestBlood';
import Campaigns from './pages/Campaigns';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';
import DonorCertificate from './pages/DonorCertificate';
import OrganizeCamp from './pages/OrganizeCamp';
import Statistics from './pages/Statistics';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {!isAuthenticated && <Header />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blood-banks" element={<BloodBanks />} />
            <Route path="/donate-blood" element={<DonateBlood />} />
            <Route path="/request-blood" element={<RequestBlood />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/donor-certificate" element={<DonorCertificate />} />
            <Route path="/organize-camp" element={<OrganizeCamp />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        {!isAuthenticated && <Footer />}
      </div>
    </Router>
  );
};

export default App;
