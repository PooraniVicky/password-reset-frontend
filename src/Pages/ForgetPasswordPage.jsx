import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await axios.post('https://password-reset-backend-ud2r.onrender.com/auth/forgot-password', { email });
      alert('Password reset link sent to your email');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('User not registered');
      } else {
        setError('Error sending password reset link');
      }
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="container-fluid">
      <div className='row d-flex justify-content-center'>
        <div className='col-sm-12 col-md-8 col-lg-6 col-xl-6'>
          <div className='container mt-5 px-4 py-4 forgot-password-form'>
            <h3 className='text-center'>Forgot Password</h3>
            <p className='text-center mb-1'>Enter your email address and we'll send you an email with instructions to reset your password.</p>
            <div className='row d-flex justify-content-center'>
              <div className='col-sm-10 col-md-8 col-lg-8 col-xl-8'>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control email-input" 
                      placeholder='Enter your Email...' 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      disabled={loading}
                    />
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className='d-flex justify-content-center gap-3'>
                    <button 
                      type="button" 
                      className="btn btn-primary" 
                      onClick={handleForgotPassword} 
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                    <Link to={'/login'}>
                      <button type="button" className="btn btn-secondary" disabled={loading}>Back to Login</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ForgotPasswordPage;
