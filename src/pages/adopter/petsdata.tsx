import React from "react";
import { DogCard } from "../../assets/common/card";
import Navbar from "../../assets/common/navbar";
import { useNavigate } from "react-router-dom";

const pets = {
  Dogs: [
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", selected: true },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
  ],
  Cats: [
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", selected: true },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Lula", age: 3, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
  ],
  Rabbits: [
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", selected: true },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
  ],
};

const ASecondPetPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto font-serif">
      {/* Header */}
      <Navbar />

      {/* Favorite Heart Button top right */}
      <div className="fixed top-25 right-6 z-50">
        <button
          onClick={() => navigate('/adopterfav')}
          aria-label="Go to Favorites"
          className="text-[#A7522A] text-3xl hover:text-orange-600 transition focus:outline-none"
          title="Go to Favorites"
        >
          ❤️
        </button>
      </div>

      <div
        className="absolute inset-0 w-full h-full bg-[url('/src/assets/images/emptybg.png')] bg-repeat opacity-10 pointer-events-none"
      />

      {/* Title */}
      <h2 className="text-2xl text-center font-semibold mb-8">
        Choose your desired category
      </h2>

      {/* Category Sections */}
      {Object.entries(pets).map(([category, items]) => (
        <div key={category} className="mb-12 ml-45">
          <div className="flex justify-between mb-5 pr-40">
            <h3 className="text-xl font-bold mb-4">{category}</h3>

            <button className="text-sm bg-white border px-4 py-2 rounded-full hover:bg-gray-100">
              more →
            </button>
          </div>
          <div className="flex flex-wrap gap-6">
            {items.map((pet, index) => (
              <DogCard
                key={index}
                name={pet.name}
                age={pet.age}
                imageUrl={pet.imageUrl}
                selected={true}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ASecondPetPage;
