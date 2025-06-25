import React, { useState } from "react";
import { DogCard } from "../../assets/common/card";
import SNavbar from "../../assets/common/snavbar";

interface Pet {
  name: string;
  age: number;
  imageUrl: string;
  breed?: string;
  gender?: string;
  likes?: string;
  dislikes?: string;
  description?: string;
  selected?: boolean;
}

const initialPets: Record<string, Pet[]> = {
  Dogs: [
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
  ],
  Cats: [
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Lula", age: 3, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
  ],
  Rabbits: [
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Lula", age: 2, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
    { name: "Bitty", age: 4.5, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee" },
  ],
};

const PetDetails: React.FC = () => {
  const [pets, setPets] = useState(initialPets);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    gender: "",
    likes: "",
    dislikes: "",
    description: "",
    photo: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemove = (category: keyof typeof pets, index: number) => {
    const updated = [...pets[category]];
    updated.splice(index, 1);
    setPets({ ...pets, [category]: updated });
  };

  const handleEdit = (pet: Pet) => {
    setFormData({
      name: pet.name || "",
      age: pet.age.toString() || "",
      breed: pet.breed || "",
      gender: pet.gender || "",
      likes: pet.likes || "",
      dislikes: pet.dislikes || "",
      description: pet.description || "",
      photo: pet.imageUrl || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto font-serif">
      {/* Header */}
      <SNavbar />
      <div
        className="absolute inset-0 w-full h-full bg-[url('/src/assets/images/emptybg.png')] bg-repeat opacity-10 pointer-events-none"
      />

      {/* Back arrow */}
      <div className="text-2xl mb-4">←</div>

      {/* Pet Details Form */}
      <div className="border border-[#A0522D] rounded-xl p-6 ml-60 mr-60 mb-20">
        <h2 className="text-xl font-semibold mb-4">Pet details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full border p-2 rounded" />
            <input name="age" value={formData.age} onChange={handleInputChange} placeholder="Age" className="w-full border p-2 rounded" />
            <input name="breed" value={formData.breed} onChange={handleInputChange} placeholder="Breed" className="w-full border p-2 rounded" />
            <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full border p-2 rounded text-gray-700">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input name="likes" value={formData.likes} onChange={handleInputChange} placeholder="Likes" className="w-full border p-2 rounded" />
            <input name="dislikes" value={formData.dislikes} onChange={handleInputChange} placeholder="Dislikes" className="w-full border p-2 rounded" />
          </div>
          <div className="space-y-3 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center border border-gray-300 rounded bg-gray-50 text-gray-500 text-sm">
              Add Photo
            </div>
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full h-24 border p-2 rounded" />
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="bg-[#A0522D] text-white px-6 py-2 rounded-full">
            Add/Update
          </button>
        </div>
      </div>

      {/* Pet Cards */}
      <h2 className="text-xl font-semibold text-center  mb-6">Available pets for adoption</h2>

      {Object.entries(pets).map(([category, petList]) => (
        <div key={category} className="ml-30 mb-10">
          <h3 className="text-lg font-bold mb-4">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {petList.map((pet, index) => (
              <div className="relative" key={index}>
                {/* Remove */}
                <button onClick={() => handleRemove(category as keyof typeof pets, index)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10">✕</button>
                {/* Edit */}
                <button onClick={() => handleEdit(pet)} className="absolute -top-2 left-2 bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10">✎</button>
                <DogCard {...pet} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetDetails;
