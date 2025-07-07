import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DogCard } from '../../assets/common/card';
import Navbar from '../../assets/common/navbar';
import { useNavigate } from 'react-router-dom';

const AMorePetsThree = () => {
    const [allRabbits, setAllRabbits] = useState<any[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    const [genderFilter, setGenderFilter] = useState('');
    const [breedSearch, setBreedSearch] = useState('');
    const [ageRange, setAgeRange] = useState([0, 10]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/pet')
            .then((res) => {
                const rabbitsOnly = res.data.data.filter(
                    (pet: any) => pet.breed?.toLowerCase() === 'rabbit'
                );
                setAllRabbits(rabbitsOnly);
            })
            .catch((err) => console.error('Failed to fetch pets', err));
    }, []);

    const breedOptions = [...new Set(allRabbits.map((d) => d.breed))];

    const filteredRabbits = allRabbits.filter((rabbit) => {
        const genderMatch = genderFilter ? rabbit.gender === genderFilter : true;
        const breedMatch = breedSearch
            ? rabbit.breed.toLowerCase().includes(breedSearch.toLowerCase())
            : true;
        const ageMatch = rabbit.age >= ageRange[0] && rabbit.age <= ageRange[1];
        return genderMatch && breedMatch && ageMatch;
    });

    const selectedRabbit =
        selectedIndex !== null && filteredRabbits[selectedIndex]
            ? filteredRabbits[selectedIndex]
            : filteredRabbits[0];

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

            <h3 className="text-2xl font-bold text-center mt-6 mb-6 text-[#A7522A] font-[Abhaya_Libre]">
                Shall we now dig into the world of rabbits?
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

                {/* Grid and Info */}
                <div className="flex flex-col lg:flex-row gap-10 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
                        {filteredRabbits.length === 0 ? (
                            <p className="text-gray-500 col-span-full">No rabbits match your filter.</p>
                        ) : (
                            filteredRabbits.map((rabbit, index) => (
                                <DogCard
                                    key={rabbit._id || index}
                                    name={rabbit.name}
                                    age={rabbit.age}
                                    image={rabbit.image}
                                    selected={selectedIndex === index}
                                    onClick={() => setSelectedIndex(index)}
                                />
                            ))
                        )}
                    </div>

                    {/* Info Panel */}
                    {selectedRabbit && (
                        <div className="w-full max-w-sm bg-[#FFFDFB] border border-[#A7522A] rounded-2xl p-6 shadow">
                            <img
                                src={`http://localhost:3000/uploads/${selectedRabbit.image}`}
                                alt={selectedRabbit.name}
                                className="w-48 h-48 object-cover rounded-lg mb-6 mx-auto"
                            />
                            <div className="text-sm text-gray-700 space-y-2 px-2">
                                <p><strong>Name:</strong> {selectedRabbit.name}</p>
                                <p><strong>Age:</strong> {selectedRabbit.age}</p>
                                <p><strong>Breed:</strong> {selectedRabbit.breed}</p>
                                <p><strong>Gender:</strong> {selectedRabbit.gender}</p>
                                <p><strong>Likes:</strong> {selectedRabbit.likes || 'Hopping and leafy greens'}</p>
                                <p><strong>Dislikes:</strong> {selectedRabbit.dislikes || 'Loud noises'}</p>
                                <p><strong>Description:</strong> {selectedRabbit.description || 'A gentle and loving rabbit looking for a cozy home.'}</p>
                            </div>
                            <div className="mt-6 text-right">
                                <button
                                    onClick={() => navigate(`/adopterform/${selectedRabbit._id}`)}
                                    className="bg-[#A7522A] text-white px-5 py-2 font-bowlby rounded-2xl hover:bg-orange-700 transition"
                                >
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

export default AMorePetsThree;