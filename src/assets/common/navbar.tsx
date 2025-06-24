import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [showPets, setShowPets] = useState(false);
  const [showShop, setShowShop] = useState(false);

  return (
    <nav className="bg-white px-10 py-8 flex justify-between items-center font-hind">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-[Abhaya_Libre] font-bold text-black">
        <span role="img" aria-label="paw">🐾</span> Pawfect Match
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 items-center text-black font-medium relative">
        {/* Home Button */}
        <li>
          <button className="bg-[#B95D2B] text-[#E7DAD1] px-6 py-2 rounded-full shadow-md font-semibold">
            Home
          </button>
        </li>

        {/* Pets Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setShowPets(true)}
          onMouseLeave={() => setShowPets(false)}
        >
          <button className="hover:text-[#B95D2B] transition">Pets ▾</button>
          {showPets && (
            <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded text-sm z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dogs</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cats</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Rabbits</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Favorites</li>
            </ul>
          )}
        </li>

        {/* Shop Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setShowShop(true)}
          onMouseLeave={() => setShowShop(false)}
        >
          <button className="hover:text-[#B95D2B] transition">Shop ▾</button>
          {showShop && (
            <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded text-sm z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Products</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Cart</li>
            </ul>
          )}
        </li>

        {/* About Us */}
        <li>
          <button className="hover:text-[#B95D2B] transition">About us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
