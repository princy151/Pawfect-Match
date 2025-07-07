import React, { useEffect, useState } from "react";
import axios from "axios";
import { DogCard } from "../../assets/common/card";
import Navbar from "../../assets/common/navbar";
import { useNavigate } from "react-router-dom";

interface Pet {
  _id?: string;
  name: string;
  age: number;
  image: string;
  breed: string;
  isFavorite?: boolean;
}

const ASecondPetPage: React.FC = () => {
  const [petsByCategory, setPetsByCategory] = useState<{ [key: string]: Pet[] }>({});
  const navigate = useNavigate();

  // Get logged-in user ID from localStorage
  const userId = localStorage.getItem("adopterId");

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const petsRes = await axios.get("http://localhost:3000/api/v1/pet");
      const favRes = userId
        ? await axios.get(`http://localhost:3000/api/v1/fav/${userId}`)
        : { data: { data: [] } };

      // Convert all favorite petIds to strings for reliable comparison
      const favoritePetIds = favRes.data.data.map((fav: any) => String(fav.petId));

      // Map pets and mark if they are favorites
      const petsWithFav = petsRes.data.data.map((pet: Pet) => ({
        ...pet,
        isFavorite: favoritePetIds.includes(String(pet._id)),
      }));

      // Group pets by breed
      const grouped = petsWithFav.reduce((acc: { [key: string]: Pet[] }, pet: Pet) => {
        const breed = pet.breed || "Other";
        if (!acc[breed]) acc[breed] = [];
        acc[breed].push(pet);
        return acc;
      }, {});

      setPetsByCategory(grouped);
    } catch (err) {
      console.error("Failed to fetch pets or favorites", err);
    }
  };

  // Toggle favorite state and update backend
  const toggleFavorite = async (petId: string, currentlyFavorite: boolean) => {
    if (!userId) {
      alert("Please log in to favorite pets.");
      return;
    }
    try {
      if (currentlyFavorite) {
        // Remove from favorites
        await axios.delete(`http://localhost:3000/api/v1/fav/${userId}/remove/${petId}`);
      } else {
        // Add to favorites
        await axios.post(`http://localhost:3000/api/v1/fav`, {
          userId,
          petId,
        });
      }
      // Refresh pets and favorites state
      fetchPets();
    } catch (err) {
      console.error("Failed to update favorites", err);
      alert("Error updating favorites.");
    }
  };

  return (
    <div className="relative mx-auto font-serif">
      <Navbar />

      {/* Favorite Button to navigate */}
      <div className="fixed top-25 right-6 z-50">
        <button
          onClick={() => navigate("/adopterfav")}
          aria-label="Go to Favorites"
          className="text-[#A7522A] text-3xl hover:text-orange-600 transition focus:outline-none"
          title="Go to Favorites"
        >
          ❤️
        </button>
      </div>

      <div className="absolute inset-0 w-full h-full bg-[url('/src/assets/images/emptybg.png')] bg-repeat opacity-10 pointer-events-none" />

      <h2 className="text-2xl text-center font-semibold mb-8">Choose your desired category</h2>

      {/* Render grouped pets */}
      {Object.entries(petsByCategory).map(([category, items]) => (
        <div key={category} className="mb-12 ml-45">
          <div className="flex justify-between mb-5 pr-40">
            <h3 className="text-xl font-bold mb-4">{category}</h3>
            <button className="text-sm bg-white border px-4 py-2 rounded-full hover:bg-gray-100">
              more →
            </button>
          </div>
          <div className="flex flex-wrap gap-6">
            {items.map((pet) => (
              <DogCard
                key={pet._id}
                name={pet.name}
                age={pet.age}
                image={pet.image}
                isFavorite={pet.isFavorite ?? false}
                onFavoriteToggle={() => toggleFavorite(pet._id!, pet.isFavorite ?? false)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ASecondPetPage;
