import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-gray-400 text-lg mb-6">Main page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Adopter Box */}
        <div className="border-2 border-orange-400 p-4 rounded-md bg-white shadow">
          <h2 className="text-center text-orange-700 font-semibold italic text-lg mb-4">
            PET ADOPTER? CLICK BELOW
          </h2>
          <img
            src="C:\Users\hp\Downloads\image.png"
            alt="Adopt"
            className="w-full h-80 object-cover rounded-md"
          />
          <div className="text-center mt-4">
            <button
              className="text-orange-800 font-bold tracking-wide hover:text-orange-600"
              onClick={() => navigate('/adopterlogin')}
            >
              I AM A ADOPTER
            </button>
          </div>
        </div>

        {/* Shelter Box */}
        <div className="border-2 border-orange-400 p-4 rounded-md bg-white shadow">
          <h2 className="text-center text-orange-700 font-semibold italic text-lg mb-4">
            SHELTER? CLICK BELOW
          </h2>
          <img
            src="https://cdn.pixabay.com/photo/2016/03/27/18/02/animal-1284307_1280.jpg"
            alt="Shelter"
            className="w-full h-80 object-cover rounded-md"
          />
          <div className="text-center mt-4">
            <button
              className="text-orange-800 font-bold tracking-wide hover:text-orange-600"
              onClick={() => navigate('/shelterlogin')}
            >
              I AM A SHELTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
