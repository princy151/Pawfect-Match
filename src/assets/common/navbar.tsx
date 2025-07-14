import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showPets, setShowPets] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const petsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shopTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Pets handlers with delay
  const handlePetsMouseEnter = () => {
    if (petsTimeout.current) {
      clearTimeout(petsTimeout.current);
      petsTimeout.current = null;
    }
    setShowPets(true);
  };

  const handlePetsMouseLeave = () => {
    petsTimeout.current = setTimeout(() => {
      setShowPets(false);
    }, 1000); // 200ms delay before closing
  };

  // Shop handlers with delay
  const handleShopMouseEnter = () => {
    if (shopTimeout.current) {
      clearTimeout(shopTimeout.current);
      shopTimeout.current = null;
    }
    setShowShop(true);
  };

  const handleShopMouseLeave = () => {
    shopTimeout.current = setTimeout(() => {
      setShowShop(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <nav className="px-10 py-8 flex justify-between items-center font-hind z-100" style={{ backgroundColor: 'rgba(5, 5, 5, 0)' }}>
      {/* Logo */}
      <div
        className="flex items-center gap-2 text-2xl font-[Abhaya_Libre] font-bold text-black z-100 cursor-pointer"
        onClick={() => navigate('/adopterhome')}
      >
        <span role="img" aria-label="paw">🐾</span> Pawfect Match
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 items-center text-black font-medium relative">
        {/* Home Button */}
        <li>
          <button
            onClick={() => navigate('/adopterhome')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isActive('/adopterhome')
                ? 'bg-[#B95D2B] text-[#E7DAD1] shadow-md'
                : 'bg-transparent text-black hover:text-[#B95D2B]'
            }`}
          >
            Home
          </button>
        </li>

        {/* Pets Dropdown */}
        <li
          className="relative"
          onMouseEnter={handlePetsMouseEnter}
          onMouseLeave={handlePetsMouseLeave}
        >
          <button
            onClick={() => navigate('/adopterpets')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isActive('/adopterpets')
                ? 'bg-[#B95D2B] text-[#E7DAD1] shadow-md'
                : 'bg-transparent text-black hover:text-[#B95D2B]'
            }`}
          >
            Pets ▾
          </button>
          {showPets && (
            <ul
              className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded text-sm z-10"
              onMouseEnter={handlePetsMouseEnter}
              onMouseLeave={handlePetsMouseLeave}
            >
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate('/adoptermorepets')}
              >
                Dogs
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate('/adoptermorepetstwo')}
              >
                Cats
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate('/adoptermorepetsthree')}
              >
                Rabbits
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate('/adopterfav')}
              >
                Favorites
              </li>
            </ul>
          )}
        </li>

        {/* Shop Dropdown */}
        <li
          className="relative"
          onMouseEnter={handleShopMouseEnter}
          onMouseLeave={handleShopMouseLeave}
        >
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${
              location.pathname.startsWith('/adoptershop') ||
              location.pathname.startsWith('/adoptercart')
                ? 'bg-[#B95D2B] text-[#E7DAD1] shadow-md'
                : 'bg-transparent text-black hover:text-[#B95D2B]'
            }`}
          >
            Shop ▾
          </button>
          {showShop && (
            <ul
              className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded text-sm z-10"
              onMouseEnter={handleShopMouseEnter}
              onMouseLeave={handleShopMouseLeave}
            >
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate('/adoptershop')}
              >
                Products
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate('/adoptercart')}
              >
                My Cart
              </li>
            </ul>
          )}
        </li>

        {/* About Us */}
        <li>
          <button
            onClick={() => navigate('/adopteraboutus')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isActive('/adopteraboutus')
                ? 'bg-[#B95D2B] text-[#E7DAD1] shadow-md'
                : 'bg-transparent text-black hover:text-[#B95D2B]'
            }`}
          >
            About us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
