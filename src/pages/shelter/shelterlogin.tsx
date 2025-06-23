import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/shelter/login', {
        email,
        password,
      });

      console.log('Shelter Login Success:', response.data);

      // Optionally store token
      // localStorage.setItem("token", response.data.token);

      navigate('/shelter-dashboard'); // redirect after successful login
    } catch (error: any) {
      console.error('Login failed:', error.response?.data || error.message);
      setErrorMsg(error.response?.data?.message || 'Login failed');
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

      <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full max-w-6xl">
        <div className="md:w-1/2 text-left relative">
          <h2
            className="text-gray-800 absolute top-4 left-0 right-0 px-2 z-10"
            style={{
              fontFamily: "'Abhaya Libre', serif",
              fontWeight: 1000,
              fontSize: 40,
            }}
          >
            "Let’s open our hearts to those who need it most – welcome to the world of pet shelter."
          </h2>
          <img
            src="src/assets/images/LoginLogo.png"
            alt="Pet Icon"
            className="w-full h-[500px] object-contain mt-34"
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
            <h3
              className="text-center text-3xl mb-6"
              style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 600 }}
            >
              Sign In
            </h3>

            <form onSubmit={handleLogin}>
              <div className="mb-5 relative mt-8">

                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <rect
                      x="5"
                      y="11"
                      width="14"
                      height="10"
                      rx="2"
                      ry="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 11V7a4 4 0 018 0v4"
                    />
                  </svg>
                </span>

                {/* Password input */}
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 px-5 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
              </div>

              {errorMsg && (
                <p className="text-red-600 text-sm mb-4">{errorMsg}</p>
              )}

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

          <div
            className="mt-10 text-center text-2xl text-gray-700 w-full"
            style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}
          >
            <p className="mb-2">
              Don’t have an account? <br />
              <a href="#" className="text-blue-600 hover:underline">Sign up</a>
            </p>
            <p>
              Forget password?{' '}
              <a href="#" className="text-blue-600 hover:underline">Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SLogin;
