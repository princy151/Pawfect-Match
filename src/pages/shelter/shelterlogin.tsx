import React from 'react';

const SLogin: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-md flex flex-col md:flex-row p-6 md:p-10 max-w-4xl w-full">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center mb-8 md:mb-0 md:pr-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            “Let’s dive into the world of pet adoption.”
          </h2>
          <div className="w-40 h-40 rounded-full bg-beige-200 border border-gray-300 flex items-center justify-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Pet Icon"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 bg-white rounded-md border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-center mb-4">Sign In</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">Save Password</label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
            >
              LOGIN
            </button>
            <div className="mt-4 text-center text-sm text-gray-700">
              <p>
                Dont have an account?{' '}
                <a href="#" className="text-blue-600 hover:underline">Sign up</a>
              </p>
              <p>
                Forget password?{' '}
                <a href="#" className="text-blue-600 hover:underline">Click Here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SLogin;
