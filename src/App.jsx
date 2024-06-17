import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ForgotPasswordPage from './Pages/ForgetPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import HomePage from './Pages/HomePage';


const App = () => {
  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
          <Route path="/home" element={<HomePage />}  />
        </Routes>
      </div>
    </Router>
  );
};

export default App;