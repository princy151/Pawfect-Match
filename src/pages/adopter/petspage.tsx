import React, { useEffect, useState } from "react";
import Navbar from "../../assets/common/navbar";
import { DogCard } from "../../assets/common/card";
import axios from "axios";
import { Link } from "react-router-dom";

interface Pet {
  _id: string;
  name: string;
  age: number;
  image: string;
}

const PetsPage: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/pet");
      setPets(res.data.data || []);
    } catch (err) {
      console.error("Error fetching pets", err);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="src/assets/images/PetsPageMain.png"
          alt="Woman and Dog"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col lg:flex-row justify-between px-8 lg:px-16 py-16 gap-10">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-black ml-10">
          <h1 className="text-7xl font-bold leading-tight mb-6 font-[Abhaya_Libre]">
            EVERY PET <br /> DESERVES A <br /> HOME
          </h1>
          <p className="text-xl text-gray-800 max-w-lg text-justify">
            Bringing a pet into your life is more than just an adoption—it’s the beginning
            of a beautiful bond built on trust, love, and companionship...
          </p>
        </div>

        {/* Right Dog Cards */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-600 bg-neutral-50 rounded-xl px-6 py-3 shadow-lg text-center font-[Abhaya_Libre] w-full mx-auto mb-6">
            Pets available for Adoption
          </h2>
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            {pets.map((pet) => (
              <div
                key={pet._id}
                onMouseEnter={() => setHoveredId(pet._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <DogCard
                  name={pet.name}
                  age={pet.age}
                  image={pet.image}
                  selected={hoveredId === pet._id}
                />
              </div>
            ))}
          </div>
            <Link to="/adopterpetstwo">
          <button className="ml-120 text-sm mt-4 px-5 py-2 rounded-full bg-white text-gray-600 hover:underline w-fit text-center shadow-md">
            more →
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetsPage;
