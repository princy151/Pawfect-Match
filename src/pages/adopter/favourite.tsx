import React, { useState } from 'react';
import { DogCard } from '../../assets/common/card';
import Navbar from '../../assets/common/navbar';

const pets = {
    Dogs: [
        { name: 'Lula', age: 2, breed: 'Labrador', gender: 'Female', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
        { name: 'Bitty', age: 4.5, breed: 'Beagle', gender: 'Male', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
    ],
    Cats: [
        { name: 'Milo', age: 3, breed: 'Persian', gender: 'Male', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
        { name: 'Luna', age: 2, breed: 'Siamese', gender: 'Female', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
    ],
    Rabbits: [
        { name: 'BunBun', age: 1, breed: 'Mini Rex', gender: 'Female', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
        { name: 'Hopper', age: 2, breed: 'Dutch', gender: 'Male', imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee' },
    ],
};

const FavoritePetsPage: React.FC = () => {
    const [selectedPet, setSelectedPet] = useState(pets.Dogs[0]);

    return (
        <div className="relative min-h-screen bg-[#f9f9f9] font-serif">
            <Navbar />

            <div className="text-center my-4  py-10">
                <h2 className="text-2xl font-bold text-[#A7522A]">Your Favorite Pets</h2>
                <p className="text-gray-600 mt-1">All pets you've favorited are listed below</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-8 px-20">
                {/* Left: Cards by Category */}
                <div className="w-full lg:w-2/3 space-y-10">
                    {Object.entries(pets).map(([category, items]) => (
                        <div key={category}>
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xl font-semibold">{category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-6">
                                {items.map((pet, index) => (
                                    <DogCard
                                        name={pet.name}
                                        age={pet.age}
                                        imageUrl={pet.imageUrl}
                                        selected={selectedPet?.name === pet.name}
                                        isFavorite={true} // Always show filled heart
                                        onClick={() => setSelectedPet(pet)} // No onFavoriteToggle passed
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Pet Info Panel */}
                {selectedPet && (
                    <div className="w-full lg:w-1/3 bg-[#FFFDFB] border border-[#A7522A] rounded-2xl p-6 shadow h-fit">
                        <img
                            src={selectedPet.imageUrl}
                            alt={selectedPet.name}
                            className="w-48 h-48 object-cover rounded-lg mb-6 mx-auto"
                        />
                        <div className="text-sm text-gray-700 space-y-2 px-2">
                            <p><strong>Name:</strong> {selectedPet.name}</p>
                            <p><strong>Age:</strong> {selectedPet.age}</p>
                            <p><strong>Breed:</strong> {selectedPet.breed}</p>
                            <p><strong>Gender:</strong> {selectedPet.gender}</p>
                            <p><strong>Likes:</strong> Snuggling, treats</p>
                            <p><strong>Dislikes:</strong> Loud noises</p>
                            <p><strong>Description:</strong> A loving companion looking for a forever home.</p>
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
    );
};

export default FavoritePetsPage;
