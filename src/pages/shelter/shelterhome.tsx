import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../assets/common/navbar';
import { DogCard } from '../../assets/common/card';

const ShelterHomePage: React.FC = () => {

  const dogs = [
    {
      name: "Lulia",
      age: 2,
      imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", // Golden Retriever
    },
    {
      name: "Bitty",
      age: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", // Yellow lab
    },
    {
      name: "Lulia",
      age: 2,
      imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", // Rottweiler
    },
    {
      name: "Bitty",
      age: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", // Beagle
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[800px] flex items-center justify-center text-black overflow-hidden font-[Abhaya_Libre]">
        {/* Background Image */}
        <img
          src="src/assets/images/ShelterHome.jpg"
          alt="Shelter Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Logout Button Image in Top Right */}
        <Link to={'/shelterlogin'}> <img
          src="src/assets/images/logout.png"
          alt="Logout"
          className="absolute top-6 right-6 w-10 h-10 z-40 cursor-pointer hover:scale-105 transition-transform duration-200"
        /></Link>

        {/* Optional: Semi-transparent overlay */}
        <div className="absolute inset-0"></div>

        {/* Content Over Image */}
        <div className="relative z-10 px-6 md:px-12 lg:pl-24 flex flex-col md:flex-row items-start justify-start w-full">
          <div className="space-y-6 max-w-2xl text-black">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
              Help Them Find<br />a Forever Home.
            </h2>
            <p className="text-lg md:text-xl font-medium">
              Every paw deserves a place to belong. Partner with us to give rescue pets the love, care,
              and second chance they’ve been waiting for.
            </p>
            <button className="bg-[#A7522A] text-white font-extrabold text-lg px-6 py-3 rounded-xl hover:bg-[#E7DAD1] hover:text-black transition drop-shadow-lg">
              LIST A PET
            </button>
            <div className="mt-6 space-y-1 text-md md:text-lg font-extrabold">
              <p>🐾 800+ Pets Listed</p>
              <p>🐾 120 Shelters Partnered</p>
              <p>🐾 18K+ Lives Touched</p>
            </div>
          </div>
        </div>
      </section>




      {/* Adoption Review Section */}
      <section className="p-6 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-center">Review the adoption form</h3>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Pet Grid */}
          <div className="grid grid-cols-2 gap-8 p-10">
            {dogs.map((dog, index) => (
              <DogCard
                key={index}
                name={dog.name}
                age={dog.age}
                imageUrl={dog.imageUrl}
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>

          {/* Form Preview */}
          <div className="rounded-4xl p-4 w-full max-w-sm bg-[#FFFDFB] border-1 border-[#A7522A]">
            <img src="https://via.placeholder.com/150" alt="User" className="w-32 h-32 object-cover rounded-md mb-4 mx-auto" />
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Name:</strong></p>
              <p><strong>Email:</strong></p>
              <p><strong>Address:</strong></p>
              <p><strong>Past Pets:</strong></p>
              <p><strong>Date:</strong></p>
            </div>
            <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
              View Form
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShelterHomePage;
