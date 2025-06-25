import React from 'react';
import Navbar from '../../assets/common/navbar';
import { DogCard } from '../../assets/common/card'; // adjust the path if needed

const pets = [
  { id: 1, name: 'Laila', age: 2, imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
  { id: 2, name: 'Bitty', age: 3, imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
  { id: 3, name: 'George', age: 2.5, imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
  { id: 4, name: 'Franklin', age: 1.5, imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
  { id: 5, name: 'Salman', age: 1, imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
  { id: 6, name: 'Taison', age: 2, imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
];

const PetsPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img
          src="src/assets/images/PetsPageMain.png"
          alt="Woman and Dog"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col lg:flex-row justify-between px-8 lg:px-16 py-16 gap-10">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-black">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            EVERY PET <br /> DESERVES A <br /> HOME
          </h1>
          <p className="text-lg text-gray-800 max-w-lg">
            Bringing a pet into your life is more than just an adoption—it’s the beginning
            of a beautiful bond built on trust, love, and companionship. Every animal deserves
            a second chance, and every home has the power to offer it. At Pawfect Match, we believe
            that pets don’t just fill your home—they fill your heart. Take that loving step forward
            and give a furry friend the warmth, care, and forever family they’ve been waiting for.
          </p>
        </div>

        {/* Right Dog Cards */}
        <div>
          <h2 className="text-lg font-semibold text-center mb-4">Pets available for Adoption</h2>
          {/* Use grid for cards */}
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            {pets.map((pet) => (
              <DogCard
                key={pet.id}
                name={pet.name}
                age={pet.age}
                imageUrl={pet.imageUrl}
              
              />
            ))}
          </div>
          <button className="text-sm mt-4 text-gray-600 hover:underline w-full text-center">more →</button>
        </div>
      </div>
    </div>
  );
};

export default PetsPage;
