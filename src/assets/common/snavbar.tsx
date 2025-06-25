import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SNavbar: React.FC = () => {
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
    <nav className="bg-white px-10 py-8 flex justify-between items-center font-hind z-100">
      {/* Logo */}
      <div
        className="flex items-center gap-2 text-2xl font-[Abhaya_Libre] font-bold text-black z-100 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <span role="img" aria-label="paw">🐾</span> Pawfect Match
      </div>

      {/* Nav Links */}
      <ul className="flex gap-8 items-center text-black font-medium relative">
        {/* Home Button */}
        <li>
          <button
            onClick={() => navigate('/shelterhome')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isActive('/shelterhome')
                ? 'bg-[#B95D2B] text-[#E7DAD1] shadow-md'
                : 'bg-transparent text-black hover:text-[#B95D2B]'
            }`}
          >
            Home
          </button>
        </li>

        {/* Pets Dropdown */}
        <li>
          <button
            onClick={() => navigate('/shelterpets')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isActive('/shelterpets')
                ? 'bg-[#B95D2B] text-[#E7DAD1] shadow-md'
                : 'bg-transparent text-black hover:text-[#B95D2B]'
            }`}
          >
            Pets
          </button>
        </li>

        {/* Shop Dropdown */}
        <li>
          <button
            onClick={() => navigate('/sheltershop')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isActive('/sheltershop')
                ? 'bg-[#B95D2B] text-[#E7DAD1] shadow-md'
                : 'bg-transparent text-black hover:text-[#B95D2B]'
            }`}
          >
            Shop
          </button>
        </li>

        {/* About Us */}
        <li>
          <button
            onClick={() => navigate('/shelteraboutus')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isActive('/shelteraboutus')
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

export default SNavbar;
