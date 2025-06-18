import React, { useState } from 'react';

type Pet = {
  name: string;
  gender: '♂️' | '♀️';
  image: string;
};

const pets: Pet[] = [
  { name: 'Lulia', gender: '♀️', image: 'https://via.placeholder.com/100' },
  { name: 'Bitsy', gender: '♂️', image: 'https://via.placeholder.com/100' },
  { name: 'George', gender: '♂️', image: 'https://via.placeholder.com/100' },
  { name: 'Franklin', gender: '♂️', image: 'https://via.placeholder.com/100' },
  { name: 'Saiman', gender: '♂️', image: 'https://via.placeholder.com/100' },
  { name: 'Taison', gender: '♂️', image: 'https://via.placeholder.com/100' },
];

const PetsPage: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar & Hero section (same as before)... */}

      {/* Pet Cards */}
      <section className="px-6 py-10 bg-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Pets available for Adoption</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {pets.map((pet) => {
            const isFavorited = favorites.includes(pet.name);
            return (
              <div
                key={pet.name}
                className="bg-white rounded-xl shadow-md overflow-hidden w-40 text-center relative"
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-24 object-cover rounded-t-xl"
                />
                <div className="py-2">
                  <p className="font-semibold text-sm">{pet.name}</p>
                  <p className="text-gray-500 text-xs">{pet.gender}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(pet.name)}
                  className={`absolute top-2 right-2 text-xl transition-colors ${
                    isFavorited ? 'text-red-500' : 'text-gray-400'
                  } hover:scale-110`}
                >
                  {isFavorited ? '❤️' : '♡'}
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <button className="text-sm text-gray-700 hover:text-orange-500">more →</button>
        </div>
      </section>
    </div>
  );
};

export default PetsPage;

