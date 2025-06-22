import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for routing

const SLogin: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate

  return (
    <div className="min-h-screen relative bg-white px-4 py-10 flex items-center justify-center">
      {/* 🔙 Back Button in Top Left */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 text-[#A7522A] hover:text-orange-600 text-xl font-bold"
        style={{ fontFamily: "'Bowlby One SC', cursive" }}
      >
        ← Back
      </button>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full max-w-6xl">
        
        {/* Left side */}
        <div className="md:w-1/2 text-left relative">
          <h2
            className="text-gray-800 absolute top-4 left-0 right-0 px-2 z-10"
            style={{ 
              fontFamily: "'Abhaya Libre', serif", 
              fontWeight: 1000, 
              fontSize: 40 
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

        {/* Right side: Login form */}
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

            <form>
              <div className="mb-5 relative mt-8">
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A7.5 7.5 0 0112 15a7.5 7.5 0 016.879 2.804M12 12a5 5 0 100-10 5 5 0 000 10z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-10 px-5 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div className="mb-10 relative">
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.657 0 3 1.343 3 3v2H9v-2c0-1.657 1.343-3 3-3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 11V8a7 7 0 1114 0v3"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 px-5 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-lg text-gray-700" style={{ fontFamily: "'Abhaya Libre', serif", fontWeight: 800 }}>
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2 accent-orange-700 w-4 h-4"
                  />
                  Save Password
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
