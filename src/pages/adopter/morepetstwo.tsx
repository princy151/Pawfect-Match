import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DogCard } from '../../assets/common/card';
import Navbar from '../../assets/common/navbar';
import { useNavigate } from 'react-router-dom';

const AMorePetsTwo = () => {
  const [allCats, setAllCats] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [genderFilter, setGenderFilter] = useState('');
  const [breedSearch, setBreedSearch] = useState('');
  const [ageRange, setAgeRange] = useState([0, 10]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/pet')
      .then((res) => {
        const catsOnly = res.data.data.filter(
          (pet: any) => pet.breed?.toLowerCase() === 'cat'
        );
        setAllCats(catsOnly);
      })
      .catch((err) => console.error('Failed to fetch pets', err));
  }, []);

  const breedOptions = [...new Set(allCats.map((d) => d.breed))];

  const filteredCats = allCats.filter((cat) => {
    const genderMatch = genderFilter ? cat.gender === genderFilter : true;
    const breedMatch = breedSearch
      ? cat.breed.toLowerCase().includes(breedSearch.toLowerCase())
      : true;
    const ageMatch = cat.age >= ageRange[0] && cat.age <= ageRange[1];
    return genderMatch && breedMatch && ageMatch;
  });

  const selectedCat =
    selectedIndex !== null && filteredCats[selectedIndex]
      ? filteredCats[selectedIndex]
      : filteredCats[0];

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-serif">
      <Navbar />
      <div className="flex justify-start px-10 mt-4">
        <button
          onClick={() => navigate('/adopterpetstwo')}
          className="text-md font-bold text-[#A7522A] hover:underline"
        >
          ← Back
        </button>
      </div>

      <h3 className="text-2xl font-extrabold text-center mt-6 mb-6 text-[#A7522A] font-[Abhaya_Libre]">
        Shall we now dig into the world of cats?
      </h3>

      <div className="flex flex-col lg:flex-row px-10 gap-10">
        {/* Filters */}
        <div className="w-full max-w-xs bg-white shadow-md rounded-xl p-6 space-y-6 border border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search breed..."
              value={breedSearch}
              onChange={(e) => {
                setBreedSearch(e.target.value);
                setSelectedIndex(0);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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
          <select
            value={genderFilter}
            onChange={(e) => {
              setGenderFilter(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* Age Range */}
          <div>
            <label className="text-sm block mb-1">
              Age Range: {ageRange[0]} - {ageRange[1]} years
            </label>
            <input
              type="range"
              min={0}
              max={20}
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

        {/* Grid and Info */}
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            {filteredCats.length === 0 ? (
              <p className="text-gray-500 col-span-full">No cats match your filter.</p>
            ) : (
              filteredCats.map((cat, index) => (
                <DogCard
                  key={cat._id || index}
                  name={cat.name}
                  age={cat.age}
                  image={cat.image}
                  selected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                />
              ))
            )}
          </div>

          {/* Info Panel */}
          {selectedCat && (
            <div className="w-full max-w-sm bg-[#FFFDFB] border border-[#A7522A] rounded-2xl p-6 shadow">
              <img
                src={`http://localhost:3000/uploads/${selectedCat.image}`}
                alt={selectedCat.name}
                className="w-48 h-48 object-cover rounded-lg mb-6 mx-auto"
              />
              <div className="text-sm text-gray-700 space-y-2 px-2">
                <p><strong>Name:</strong> {selectedCat.name}</p>
                <p><strong>Age:</strong> {selectedCat.age}</p>
                <p><strong>Breed:</strong> {selectedCat.breed}</p>
                <p><strong>Gender:</strong> {selectedCat.gender}</p>
                <p><strong>Likes:</strong> {selectedCat.likes || 'Soft beds, fish'}</p>
                <p><strong>Dislikes:</strong> {selectedCat.dislikes || 'Baths'}</p>
                <p><strong>Description:</strong> {selectedCat.description || 'A curious feline friend looking for love.'}</p>
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

export default AMorePetsTwo;
