import React, { useState } from 'react';

type Pet = {
  name: string;
  age: string;
  image: string;
  likes: string;
  dislikes: string;
  description: string;
};

const dogList: Pet[] = [
  {
    name: 'Lula',
    age: '2 yrs',
    image: 'https://via.placeholder.com/300x200?text=Lula1',
    likes: 'Tennis balls, treats',
    dislikes: 'Loud noises',
    description: 'Lula is a playful and affectionate pup who loves to run around in open fields.',
  },
  {
    name: 'Bitty',
    age: '4.5 yrs',
    image: 'https://via.placeholder.com/300x200?text=Bitty1',
    likes: 'Belly rubs, bones',
    dislikes: 'Rainy days',
    description: 'Bitty is calm and loyal, making her perfect for relaxed households.',
  },
  {
    name: 'Lula',
    age: '2 yrs',
    image: 'https://via.placeholder.com/300x200?text=Lula2',
    likes: 'Chasing squirrels',
    dislikes: 'Cats',
    description: 'A high-energy dog, best suited for active families.',
  },
  {
    name: 'Bitty',
    age: '4.5 yrs',
    image: 'https://via.placeholder.com/300x200?text=Bitty2',
    likes: 'Sleeping on couches',
    dislikes: 'Vacuum cleaners',
    description: 'Bitty is cuddly and loves sleeping near people.',
  },
  {
    name: 'Lula',
    age: '2 yrs',
    image: 'https://via.placeholder.com/300x200?text=Lula3',
    likes: 'Swimming',
    dislikes: 'Crowded places',
    description: 'Water-loving and adventurous, Lula thrives outdoors.',
  },
  {
    name: 'Bitty',
    age: '4.5 yrs',
    image: 'https://via.placeholder.com/300x200?text=Bitty3',
    likes: 'Fetch, squeaky toys',
    dislikes: 'Being alone',
    description: 'Loves companionship and always ready to play.',
  },
];

const AMorePets = () => {
  const [selectedPet, setSelectedPet] = useState<Pet>(dogList[1]); // Default: second pet

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-8 py-6 font-serif">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">🐾 Pawfect Match</div>
        <nav className="flex items-center gap-10 text-lg">
          <a href="#">Home</a>
          <button className="bg-[#a3562c] text-white px-5 py-1 rounded-full shadow-md">Pets ▾</button>
          <a href="#">Shop ▾</a>
          <a href="#">About us</a>
        </nav>
      </header>

      {/* Title */}
      <div className="flex items-center gap-4 mb-6">
        <button className="text-3xl text-[#a3562c]">{'←'}</button>
        <h2 className="text-xl md:text-2xl font-semibold">Shall we now dig into the world of dogs?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Pet gallery */}
        <div className="grid grid-cols-2 gap-4 md:col-span-1">
          {dogList.map((pet, index) => (
            <button
              key={index}
              onClick={() => setSelectedPet(pet)}
              className={`rounded-xl overflow-hidden shadow-md border-2 ${
                selectedPet.name === pet.name && selectedPet.age === pet.age ? 'border-[#a3562c]' : 'border-transparent'
              }`}
            >
              <img src={pet.image} alt={pet.name} className="object-cover w-full h-24" />
              <div className="text-center py-1 text-sm font-medium">{pet.name} <span className="text-xs text-gray-500">{pet.age}</span></div>
            </button>
          ))}
        </div>

        {/* Right: Pet details */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-[#a3562c] p-6 shadow-lg">
          <img
            src={selectedPet.image}
            alt={selectedPet.name}
            className="w-full h-60 object-cover rounded-xl mb-4"
          />
          <div className="text-lg mb-2"><strong>Name:</strong> {selectedPet.name}</div>
          <div className="text-lg mb-2"><strong>Age:</strong> {selectedPet.age}</div>
          <div className="text-lg mb-2"><strong>Likes:</strong> {selectedPet.likes}</div>
          <div className="text-lg mb-2"><strong>Dislikes:</strong> {selectedPet.dislikes}</div>
          <div className="text-lg mb-4"><strong>Description:</strong> {selectedPet.description}</div>
          <button className="bg-[#a3562c] hover:bg-[#8b4421] transition text-white px-6 py-2 rounded-full text-sm font-semibold">
            View Adoption Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default AMorePets;
