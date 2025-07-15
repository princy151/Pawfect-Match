import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DogCard } from '../../assets/common/card';
import Navbar from '../../assets/common/navbar';
import { Link } from 'react-router-dom';

interface Pet {
  _id: string;
  name: string;
  age: number;
  image?: string;
  breed: string;
  gender: string;
}

const FavoritePetsPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Pet[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const userId = localStorage.getItem('adopterId');
  const BASE_URL = 'http://localhost:3000';

  useEffect(() => {
    if (userId) {
      fetchFavorites();
    }
  }, [userId]);

  const fetchFavorites = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/fav/${userId}`);
      console.log("Fetched favorites:", res.data);

      // Extract the actual pet data from each favorite
      const favoritePets = (res.data.data || []).map((fav: any) => fav.petId);

      setFavorites(favoritePets);

      if (favoritePets.length > 0) {
        setSelectedPet(favoritePets[0]);
      }
    } catch (err) {
      console.error('Error fetching favorites:', err);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f9f9f9] font-serif">
      <Navbar />

      {/* 🔙 Back Button with Heading */}
      <div className="flex items-center gap-4 px-20 mt-6">
        <img
          src="src/assets/images/favback.png"
          alt="Back"
          className="w-10 h-10 cursor-pointer hover:opacity-80"
          onClick={() => window.history.back()}
        />
        <h2 className="text-2xl font-bold text-[#A7522A] font-serif">Your Favourite Pets</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8 px-20">
        {/* Left: Cards */}
        <div className="w-full lg:w-2/3 space-y-10">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">All Favorites</h3>
            </div>
            <div className="flex flex-wrap gap-6">
              {favorites.map((pet) => {
                const petImage = pet.image
                  ? pet.image.startsWith('http')
                    ? pet.image
                    : `${BASE_URL}/uploads/${pet.image}`
                  : '/default-image.png';

                return (
                  <DogCard
                    key={pet._id}
                    name={pet.name}
                    age={pet.age}
                    image={petImage}
                    selected={selectedPet?._id === pet._id}
                    isFavorite={true}
                    onClick={() => setSelectedPet(pet)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Pet Info Panel */}
        {selectedPet && (
          <div className="w-full lg:w-1/3 bg-[#FFFDFB] border border-[#A7522A] rounded-2xl p-6 shadow h-fit">
            <img
              src={
                selectedPet.image
                  ? selectedPet.image.startsWith('http')
                    ? selectedPet.image
                    : `${BASE_URL}/uploads/${selectedPet.image}`
                  : '/default-image.png'
              }
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
              <Link to={`/adopterform/686a876c5031e1a46eb921a2`}>
              <button className="bg-[#A7522A] text-[#E7DAD1] px-5 py-2 font-bowlby rounded-2xl hover:bg-[#934622] transition">
                View Adoption Form
              </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePetsPage;
