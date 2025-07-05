import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ALogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/adopter/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      navigate('/adopterhome');
    } catch (error: any) {
      console.error('Login failed:', error.response?.data || error.message);
      setErrorMsg(error.response?.data?.message || 'Login failed');
    }
  };

  const handleForgetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/adopter/forgotpassword', {
        email: resetEmail,
      });
      setResetMessage('✅ Password reset link sent! Please check your email or console.');
      console.log('🔗 Reset link:', response.data.resetUrl);
    } catch (error: any) {
      setResetMessage(error.response?.data?.message || '❌ Failed to send reset link.');
    }
  };

  return (
    <div className="min-h-screen relative bg-white px-4 py-10 flex items-center justify-center">
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-[#A7522A] hover:text-orange-600 text-xl font-bold"
        style={{ fontFamily: "'Bowlby One SC', cursive" }}
      >
        ← Back
      </button>

      {/* 🔒 Forget Password Modal */}
      {showForgetPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(5, 5, 5, 0.6)' }}>
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-xl border-2 border-[#A7522A] relative">
            <button
              onClick={() => {
                setShowForgetPassword(false);
                setResetMessage('');
              }}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl text-center text-[#A7522A] mb-4 font-bold" style={{ fontFamily: "'Abhaya Libre', serif" }}>
              Forgot Password?
            </h2>
            <p className="text-center text-sm text-gray-600 mb-4">Enter your email to receive a reset link 🐾</p>
            <form onSubmit={handleForgetPassword} className="space-y-4">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#A7522A] text-white py-2 rounded-xl hover:bg-orange-700 transition"
              >
                Send Reset Link
              </button>
              {resetMessage && (
                <p className="text-center text-sm text-green-700 mt-2">{resetMessage}</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Main Login Page */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full max-w-6xl">
        <div className="md:w-1/2 text-left relative">
          <h2
            className="text-gray-800 absolute top-6 left-0 right-0 px-2 z-10"
            style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 1000, fontSize: 50 }}
          >
            “Let’s dive into the world of pet adoption.”
          </h2>
          <img
            src="src/assets/images/LoginLogo.png"
            alt="Pet Icon"
            className="w-full h-[500px] object-contain mt-28"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center mt-15 ml-10">
          <div
            className="w-110 rounded-4xl p-10 pb-0 shadow-md"
            style={{
              backgroundColor: '#FFFDFB',
              border: '2px solid #A7522A',
            }}
          >
            <h3 className="text-center text-3xl mb-6" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 600 }}>
              Sign In
            </h3>

            <form onSubmit={handleLogin}>
              <div className="mb-5 relative mt-8 ">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 6.75L12 11.25L7.5 6.75M3.75 6.75V17.25H20.25V6.75H3.75Z" />
                  </svg>
                </span>

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 px-5 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
              </div>

              <div className="mb-10 relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="5" y="11" width="14" height="10" rx="2" ry="2" strokeWidth="1.5" />
                    <path d="M8 11V7a4 4 0 018 0v4" strokeWidth="1.5" />
                  </svg>
                </span>

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 px-5 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
              </div>

              {errorMsg && <p className="text-red-600 text-sm mb-4">{errorMsg}</p>}

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-lg text-gray-700" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                  <input
                    type="checkbox"
                    className="mr-2 accent-orange-700 w-4 h-4"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  Show Password
                </label>

                <button
                  type="submit"
                  className="py-3 px-6 rounded transition text-lg rounded-full"
                  style={{
                    backgroundColor: '#A7522A',
                    color: '#E7DAD1',
                    fontFamily: "'Bowlby One SC', cursive",
                  }}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 text-center text-2xl text-gray-700 w-full" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
            <p className="mb-2">
              Don’t have an account? <br />
              <a href="#" className="text-blue-600 hover:underline">Sign up</a>
            </p>
            <p>
              Forget password?{' '}
              <button onClick={() => setShowForgetPassword(true)} className="text-blue-600 hover:underline">
                Click Here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ALogin;
