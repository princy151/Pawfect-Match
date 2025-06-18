import React, { useState } from 'react';

type Pet = {
  name: string;
  gender: '♂️' | '♀️';
  image: string;
};

const allPets: Record<'dogs' | 'cats' | 'rabbits', Pet[]> = {
  dogs: [
    { name: 'Lulu', gender: '♀️', image: 'https://via.placeholder.com/120' },
    { name: 'Bitsy', gender: '♂️', image: 'https://via.placeholder.com/120' },
  ],
  cats: [
    { name: 'Whiskers', gender: '♂️', image: 'https://via.placeholder.com/120' },
    { name: 'Luna', gender: '♀️', image: 'https://via.placeholder.com/120' },
  ],
  rabbits: [
    { name: 'Coco', gender: '♀️', image: 'https://via.placeholder.com/120' },
    { name: 'Bunny', gender: '♂️', image: 'https://via.placeholder.com/120' },
  ],
};

const PetDetails = () => {
  const [speciesFilter, setSpeciesFilter] = useState<'All' | 'dogs' | 'cats' | 'rabbits'>('All');
  const [genderFilter, setGenderFilter] = useState<'All' | '♂️' | '♀️'>('All');

  const filterPets = () => {
    const speciesKeys = speciesFilter === 'All' ? Object.keys(allPets) : [speciesFilter];
    const results: Record<string, Pet[]> = {};

    for (const species of speciesKeys) {
      results[species] = allPets[species as keyof typeof allPets].filter((pet) =>
        genderFilter === 'All' ? true : pet.gender === genderFilter
      );
    }

    return results;
  };

  const filteredPets = filterPets();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Top Navbar */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-lg font-bold">
          <span className="text-black">🐾 Pawfect Match</span>
        </div>
        <nav className="space-x-6 text-sm text-gray-700">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500 font-semibold bg-orange-200 px-3 py-1 rounded">My Pets</a>
          <a href="#" className="hover:text-orange-500">Shop</a>
          <a href="#" className="hover:text-orange-500">About us</a>
        </nav>
      </header>

      {/* Back Button */}
      <div className="p-4">
        <button className="text-2xl hover:text-orange-500">←</button>
      </div>

      {/* Pet Details Form */}
      <section className="px-6">
        <div className="border p-4 rounded-md bg-white shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Pet details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Name" className="border px-3 py-2 rounded" />
            <div className="border px-3 py-8 rounded text-center">Add Photo</div>
            <input type="text" placeholder="Age" className="border px-3 py-2 rounded" />
            <textarea placeholder="Description" className="border px-3 py-2 rounded h-24" />
            <input type="text" placeholder="Likes" className="border px-3 py-2 rounded" />
            <input type="text" placeholder="Dislikes" className="border px-3 py-2 rounded" />
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Add/Update</button>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 mb-6">
        <h2 className="text-lg font-semibold mb-2">Available pets for adoption</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value as any)}
            className="border px-3 py-2 rounded"
          >
            <option value="All">All Species</option>
            <option value="dogs">Dogs</option>
            <option value="cats">Cats</option>
            <option value="rabbits">Rabbits</option>
          </select>
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value as any)}
            className="border px-3 py-2 rounded"
          >
            <option value="All">All Genders</option>
            <option value="♀️">Female ♀️</option>
            <option value="♂️">Male ♂️</option>
          </select>
        </div>
      </section>

      {/* Pet Cards */}
      <section className="px-6 pb-10">
        {Object.entries(filteredPets).map(([species, pets]) => (
          <div key={species} className="mb-6">
            <h3 className="text-md font-semibold capitalize mb-2">{species}</h3>
            {pets.length === 0 ? (
              <p className="text-gray-500 italic">No pets found.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pets.map((pet, i) => (
                  <div key={i} className="border rounded-md p-2 text-center shadow-sm bg-white">
                    <img src={pet.image} alt={pet.name} className="mx-auto mb-2 rounded-md" />
                    <p className="font-medium">
                      {pet.name} <span className="text-red-500">{pet.gender}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PetDetails;
