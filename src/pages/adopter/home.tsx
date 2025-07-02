import React, { useState } from 'react';
import Navbar from '../../assets/common/navbar';
import profileMan from '../../assets/images/profileman.png'; // 👈 import the image

const AHomePage: React.FC = () => {
  const [showPetsDropdown, setShowPetsDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* 👤 Profile Man Icon on Top-Right Below Navbar */}
      <div className="absolute top-25 right-10 z-50">
        <img
          src={profileMan}
          alt="Profile Man"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="max-w-lg font-[Abhaya_Libre] mt-10 ml-20">
          <div className="flex flex-col gap-10">
            <h2 className="text-7xl font-bold">Get your family a new member.</h2>
            <p className="text-black mb-6 text-2xl">
              Open your doors and hearts to pets in need of a home and it will be thankful to you for the rest of their lives.
            </p>
            <button className="bg-white px-6 py-3 w-35 rounded-full font-homejae text-xl shadow hover:shadow-md flex items-center gap-2 font-medium drop-shadow-lg">
              EXPLORE →
            </button>
          </div>

          {/* Paw prints */}
          <div className="flex gap-4">
            <img src="src/assets/images/HomePaw.png" alt="Paw Print" />
          </div>
        </div>

        {/* Right Content */}
        <div className="absolute w-full max-w-xl top-50 right-36">
          {/* Dog Image */}
          <img
            src="src/assets/images/HomeDog.png"
            alt="Dog"
            className="rounded-xl object-cover w-full scale-150"
          />

          {/* Stats Overlay */}
          <div className="absolute top-98 right flex flex-col gap-10 z-10 w-170 scale-110 text-3xl font-bayon">
            <div className="flex justify-between items-center border bg-white px-5 py-4 rounded-md font-semibold shadow">
              <span>1250</span> <span className="text-black font-hind">Pets Adopted</span>
            </div>
            <div className="flex justify-between items-center border bg-white px-5 py-4 rounded-md font-semibold shadow">
              <span>+350</span> <span className="text-black font-hind">Happy Families</span>
            </div>
            <div className="flex justify-between items-center border bg-white px-5 py-4 rounded-md font-semibold shadow">
              <span>20K</span> <span className="text-black font-hind">Site Visits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AHomePage;
