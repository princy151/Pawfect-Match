import React, { useState } from 'react';

type Pet = {
  name: string;
  gender: '♂️' | '♀️';
  image: string;
};

const petData: Record<'Dogs' | 'Cats' | 'Rabbits', Pet[]> = {
  Dogs: [
    { name: 'Lula', gender: '♀️', image: 'https://via.placeholder.com/150/98f/000?text=Lula' },
    { name: 'Bitty', gender: '♂️', image: 'https://via.placeholder.com/150/ff9/000?text=Bitty' },
    { name: 'Lula', gender: '♀️', image: 'https://via.placeholder.com/150/f98/000?text=Lula' },
    { name: 'Bitty', gender: '♂️', image: 'https://via.placeholder.com/150/9ff/000?text=Bitty' },
  ],
  Cats: [
    { name: 'Lula', gender: '♀️', image: 'https://via.placeholder.com/150/abc/000?text=Lula' },
    { name: 'Bitty', gender: '♂️', image: 'https://via.placeholder.com/150/cab/000?text=Bitty' },
    { name: 'Lula', gender: '♀️', image: 'https://via.placeholder.com/150/fff/000?text=Lula' },
    { name: 'Bitty', gender: '♂️', image: 'https://via.placeholder.com/150/bcf/000?text=Bitty' },
  ],
  Rabbits: [
    { name: 'Lula', gender: '♀️', image: 'https://via.placeholder.com/150/888/fff?text=Lula' },
    { name: 'Bitty', gender: '♂️', image: 'https://via.placeholder.com/150/aaa/fff?text=Bitty' },
    { name: 'Lula', gender: '♀️', image: 'https://via.placeholder.com/150/ddd/fff?text=Lula' },
    { name: 'Bitty', gender: '♂️', image: 'https://via.placeholder.com/150/ccc/fff?text=Bitty' },
  ],
};

const ASecondPetPage = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-serif px-6 py-4">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold">🐾 Pawfect Match</div>
        <nav className="flex gap-8 items-center text-lg">
          <a href="#">Home</a>
          <button className="bg-[#a3562c] text-white px-5 py-1 rounded-full shadow-md">Pets</button>
          <div className="relative">
            <button>Shop ▾</button>
            {/* Optional dropdown */}
          </div>
          <a href="#">About us</a>
          <div className="text-center ml-4">
            <div className="text-pink-500 text-3xl">❤️</div>
            <div className="text-xs text-gray-600 -mt-2">Click to see your<br />favourites</div>
          </div>
        </nav>
      </header>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-10">Choose your desired category</h2>

      {/* Pet Sections */}
      {Object.entries(petData).map(([category, pets]) => (
        <section key={category} className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-semibold">{category}</h3>
            <button className="text-sm px-4 py-1 rounded-full border border-gray-300 hover:bg-gray-100">
              more →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pets.map((pet, index) => {
              const isFav = favorites.includes(`${category}-${index}`);
              return (
                <div key={index} className="relative bg-white shadow-md rounded-xl p-2 text-center">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="rounded-lg h-32 w-full object-cover mb-2"
                  />
                  <div className="font-semibold text-sm">{pet.name}</div>
                  <div className="text-xs text-gray-500">{pet.gender}</div>
                  <button
                    onClick={() => toggleFavorite(`${category}-${index}`)}
                    className={`absolute top-2 right-2 text-xl transition-all duration-200 ${
                      isFav ? 'text-red-500' : 'text-gray-400'
                    }`}
                  >
                    {isFav ? '❤️' : '♡'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ASecondPetPage;
