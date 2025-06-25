import React, { useState } from 'react';
import { DogCard } from '../../assets/common/card';
import Navbar from '../../assets/common/navbar';
import { useNavigate } from 'react-router-dom';

const AMorePets = () => {
  const allDogs = [
    { name: 'Lulia', age: 2, breed: 'Labrador', gender: 'Female', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
    { name: 'Bitty', age: 4.5, breed: 'Beagle', gender: 'Male', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
    { name: 'George', age: 3, breed: 'Poodle', gender: 'Male', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
    { name: 'Daisy', age: 1.5, breed: 'Labrador', gender: 'Female', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [genderFilter, setGenderFilter] = useState('');
  const [breedSearch, setBreedSearch] = useState('');
  const [ageRange, setAgeRange] = useState([0, 10]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();
  const breedOptions = [...new Set(allDogs.map((d) => d.breed))];

  const filteredDogs = allDogs.filter((dog) => {
    const genderMatch = genderFilter ? dog.gender === genderFilter : true;
    const breedMatch = breedSearch
      ? dog.breed.toLowerCase().includes(breedSearch.toLowerCase())
      : true;
    const ageMatch = dog.age >= ageRange[0] && dog.age <= ageRange[1];
    return genderMatch && breedMatch && ageMatch;
  });

  const selectedDog =
    selectedIndex !== null && filteredDogs[selectedIndex]
      ? filteredDogs[selectedIndex]
      : filteredDogs[0];

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-serif">
      <Navbar />
      <div className="flex justify-start px-10 mt-4">
        <button
          onClick={() => navigate('/adopterpetstwo')}
          className="text-sm text-orange-600 hover:underline"
        >
          ← Back
        </button>
      </div>

      <h3 className="text-2xl font-bold text-center mt-6 mb-6 text-[#A7522A] font-[Abhaya_Libre]">
        Shall we now dig into the world of dogs?
      </h3>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row px-10 gap-10">
        {/* Filters Column */}
        <div className="w-full max-w-xs bg-white shadow-md rounded-xl p-6 space-y-6 border border-gray-200">
          {/* Breed Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Breed..."
              value={breedSearch}
              onChange={(e) => {
                setBreedSearch(e.target.value);
                setSelectedIndex(0);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-300"
            />
            {showSuggestions && breedSearch && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded shadow z-10 max-h-40 overflow-y-auto">
                {breedOptions
                  .filter((breed) =>
                    breed.toLowerCase().includes(breedSearch.toLowerCase())
                  )
                  .map((breed, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setBreedSearch(breed);
                        setShowSuggestions(false);
                        setSelectedIndex(0);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {breed}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Gender Filter */}
          <div>
            <select
              value={genderFilter}
              onChange={(e) => {
                setGenderFilter(e.target.value);
                setSelectedIndex(0);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-300"
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age Range Slider */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Age Range: {ageRange[0]} - {ageRange[1]} years
            </label>
            <input
              type="range"
              min={0}
              max={10}
              value={ageRange[1]}
              step={0.5}
              onChange={(e) => {
                setAgeRange([0, parseFloat(e.target.value)]);
                setSelectedIndex(0);
              }}
              className="w-full"
            />
          </div>
        </div>

        {/* Pets and Info Section */}
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {/* Pet Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            {filteredDogs.length === 0 ? (
              <p className="text-gray-500 col-span-full">No dogs match your filter.</p>
            ) : (
              filteredDogs.map((dog, index) => (
                <DogCard
                  key={index}
                  name={dog.name}
                  age={dog.age}
                  imageUrl={dog.imageUrl}
                  selected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                />
              ))
            )}
          </div>

          {/* Info Panel */}
          {selectedDog && (
            <div className="w-full max-w-sm bg-[#FFFDFB] border border-[#A7522A] rounded-2xl p-6 shadow">
              <img
                src={selectedDog.imageUrl}
                alt={`Picture of ${selectedDog.name}`}
                className="w-48 h-48 object-cover rounded-lg mb-6 mx-auto"
              />
              <div className="text-sm text-gray-700 space-y-2 px-2">
                <p><strong>Name:</strong> {selectedDog.name}</p>
                <p><strong>Age:</strong> {selectedDog.age}</p>
                <p><strong>Breed:</strong> {selectedDog.breed}</p>
                <p><strong>Gender:</strong> {selectedDog.gender}</p>
                <p><strong>Likes:</strong> Napping, treats</p>
                <p><strong>Dislikes:</strong> Loud noises</p>
                <p><strong>Description:</strong> A loyal and friendly companion who is looking for a forever home filled with love.</p>
              </div>
              <div className="mt-6 text-right">
                <button className="bg-[#A7522A] text-white px-5 py-2 font-bowlby rounded-2xl hover:bg-orange-700 transition">
                  View Adoption Form
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AMorePets;
