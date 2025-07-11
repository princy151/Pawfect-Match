import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 font-[Besley]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mt-10">

        {/* Adopter Card */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => navigate('/adopterlogin')}
          onKeyDown={(e) => handleKeyDown(e, '/adopterlogin')}
          className="bg-[#FFFDFA] border border-[#A7522A] p-6 rounded-lg shadow-md cursor-pointer
                     hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-center text-[#A7522A] text-xl md:text-2xl font-semibold italic mb-6 font-besley">
            PET ADOPTER? CLICK BELOW
          </h2>
          <img
            src="src/assets/images/Adopter(M).png"
            alt="Adopter"
            className="w-full h-[400px] object-cover rounded-md"
          />
          <div className="text-center mt-6">
            <span
              className="text-[#A7522A] font-bold text-lg md:text-xl font-bowlby tracking-wide"
            >
              I AM A ADOPTER
            </span>
          </div>
        </div>

        {/* Shelter Card */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => navigate('/shelterlogin')}
          onKeyDown={(e) => handleKeyDown(e, '/shelterlogin')}
          className="bg-[#FFFDFA] border border-[#A7522A] p-6 rounded-lg shadow-md cursor-pointer
                     hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-center text-[#A7522A] text-xl md:text-2xl font-semibold italic mb-6 font-besley">
            SHELTER? CLICK BELOW
          </h2>
          <img
            src="src/assets/images/Shelter(M).png"
            alt="Shelter"
            className="w-full h-[400px] object-cover rounded-md"
          />
          <div className="text-center mt-6">
            <span
              className="text-[#A7522A] font-bold text-lg md:text-xl font-bowlby tracking-wide"
            >
              I AM A SHELTER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
