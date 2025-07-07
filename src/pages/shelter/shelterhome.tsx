import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DogCard } from '../../assets/common/card';
import SNavbar from '../../assets/common/snavbar';

interface Dog {
  _id?: string;
  name: string;
  age: number;
  image: string;
  breed?: string;
  gender?: string;
  likes?: string;
  dislikes?: string;
  description?: string;
}

const ShelterHomePage: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/pet');
      setDogs(res.data.data);
    } catch (err) {
      console.error('Error fetching dogs', err);
    }
  };

  const selectedDog = dogs[selectedIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      <SNavbar />

      <section className="relative w-full h-[800px] flex items-center justify-center text-black overflow-hidden font-[Abhaya_Libre]">
        <img
          src="src/assets/images/ShelterHome.jpg"
          alt="Shelter Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <Link to="/shelterlogin">
          <img
            src="src/assets/images/logout.png"
            alt="Logout"
            className="absolute top-6 right-6 w-10 h-10 z-40 cursor-pointer hover:scale-105 transition-transform duration-200"
          />
        </Link>

        <div className="absolute inset-0"></div>

        <div className="relative z-10 px-6 md:px-12 lg:pl-24 flex flex-col md:flex-row items-start justify-start w-full">
          <div className="space-y-6 max-w-2xl text-black">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
              Help Them Find<br />a Forever Home.
            </h2>
            <p className="text-lg md:text-xl font-medium">
              Every paw deserves a place to belong. Partner with us to give rescue pets the love, care,
              and second chance they’ve been waiting for.
            </p>
            <Link to="/petdetails">
              <button className="bg-[#A7522A] text-white font-extrabold text-lg px-6 py-3 rounded-xl hover:bg-[#E7DAD1] hover:text-black transition drop-shadow-lg">
                LIST A PET
              </button>
            </Link>
            <div className="mt-6 space-y-1 text-md md:text-lg font-extrabold">
              <p>🐾 800+ Pets Listed</p>
              <p>🐾 120 Shelters Partnered</p>
              <p>🐾 18K+ Lives Touched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Review Section */}
      <section className="p-6 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-center">Review the adoption form</h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="grid grid-cols-2 gap-8 p-10">
            {dogs.map((dog, index) => (
              <DogCard
                key={dog._id || index}
                name={dog.name}
                age={dog.age}
                image={dog.image}
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>

          {selectedDog && (
            <div className="w-full max-w-sm bg-[#FFFDFB] border border-[#A7522A] rounded-2xl p-6 shadow flex flex-col">
              <img
                src={`http://localhost:3000/uploads/${selectedDog.image}`}
                alt={selectedDog.name}
                className="w-32 h-32 object-cover rounded-md mb-6 mx-auto"
              />
              <div className="text-sm text-gray-700 space-y-2 px-2 flex-grow">
                <p><strong>Name:</strong> {selectedDog.name}</p>
                <p><strong>Age:</strong> {selectedDog.age}</p>
                <p><strong>Breed:</strong> {selectedDog.breed}</p>
                <p><strong>Gender:</strong> {selectedDog.gender}</p>
                <p><strong>Likes:</strong> {selectedDog.likes}</p>
                <p><strong>Dislikes:</strong> {selectedDog.dislikes}</p>
                <p><strong>Description:</strong> {selectedDog.description}</p>
              </div>
              <div className="mt-auto text-right">
                <button className="bg-[#A7522A] text-white px-5 py-2 font-bowlby rounded-2xl hover:bg-orange-700 transition">
                  View Adoption Form
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShelterHomePage;
