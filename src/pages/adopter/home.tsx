import React, { useState } from 'react';

const AHomePage: React.FC = () => {
  const [showPetsDropdown, setShowPetsDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans px-8 py-10">
      {/* Nav */}
      <nav className="flex justify-between items-center mb-10">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <span role="img" aria-label="paw">🐾</span> Pawfect Match
        </h1>

        <ul className="flex items-center gap-6 text-gray-700 relative">
          {/* Home */}
          <li>
            <button className="bg-[#B95D2B] text-white px-5 py-2 rounded-full shadow-md">Home</button>
          </li>

          {/* Pets Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowPetsDropdown(true)}
            onMouseLeave={() => setShowPetsDropdown(false)}
          >
            <button className="cursor-pointer">Pets ▾</button>
            {showPetsDropdown && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded text-sm z-10 w-40">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dog</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cat</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rabbits</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Your Favourites</li>
              </ul>
            )}
          </li>

          {/* Shop Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowShopDropdown(true)}
            onMouseLeave={() => setShowShopDropdown(false)}
          >
            <button className="cursor-pointer">Shop ▾</button>
            {showShopDropdown && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded text-sm z-10 w-40">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shop Products</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#B95D2B] font-semibold">
                  My Cart
                </li>
              </ul>
            )}
          </li>

          {/* About */}
          <li>About us</li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-4">Get your family a new member.</h2>
          <p className="text-gray-600 mb-6">
            Open your doors and hearts to pets in need of a home and it will be thankful to you for the rest of their lives.
          </p>
          <button className="bg-white px-6 py-3 rounded-full shadow hover:shadow-md flex items-center gap-2 font-medium">
            EXPLORE →
          </button>

          {/* Paw prints */}
          <div className="mt-10 flex gap-4 opacity-30">
            <img src="https://via.placeholder.com/50x50?text=🐾" alt="Paw Print" />
            <img src="https://via.placeholder.com/50x50?text=🐾" alt="Paw Print" />
            <img src="https://via.placeholder.com/50x50?text=🐾" alt="Paw Print" />
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Dog Image */}
          <img
            src="https://via.placeholder.com/300x200?text=Dog+Image"
            alt="Dog"
            className="rounded-xl object-cover"
          />

          {/* Stats */}
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex justify-between items-center border px-5 py-3 rounded-md font-semibold">
              <span>1250</span> <span className="text-gray-500">Pets Adopted</span>
            </div>
            <div className="flex justify-between items-center border px-5 py-3 rounded-md font-semibold">
              <span>+350</span> <span className="text-gray-500">Pets Adopted</span>
            </div>
            <div className="flex justify-between items-center border px-5 py-3 rounded-md font-semibold">
              <span>20K</span> <span className="text-gray-500">Pets Adopted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AHomePage;
