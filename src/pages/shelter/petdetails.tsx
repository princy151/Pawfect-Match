import React, { useEffect, useState } from "react";
import axios from "axios";
import { DogCard } from "../../assets/common/card";
import SNavbar from "../../assets/common/snavbar";

interface Pet {
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

const PetDetails: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [editingPetId, setEditingPetId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    gender: "",
    likes: "",
    dislikes: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState<{ show: boolean; id: string | null }>({
    show: false,
    id: null,
  });

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/pet");
      setPets(res.data.data);
    } catch (err) {
      console.error("Error fetching pets", err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSave = async () => {
    try {
      const data = new FormData();
      data.append("name", formData.name || "");
      data.append("age", formData.age || "0");
      data.append("breed", formData.breed || "");
      data.append("gender", formData.gender || "");
      data.append("likes", formData.likes || "");
      data.append("dislikes", formData.dislikes || "");
      data.append("description", formData.description || "");
      if (imageFile) data.append("image", imageFile);

      if (editingPetId) {
        await axios.put(`http://localhost:3000/api/v1/pet/${editingPetId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showToast("Pet updated successfully!");
      } else {
        await axios.post("http://localhost:3000/api/v1/pet", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showToast("Pet added successfully!");
      }

      setFormData({
        name: "",
        age: "",
        breed: "",
        gender: "",
        likes: "",
        dislikes: "",
        description: "",
      });
      setImageFile(null);
      setEditingPetId(null);
      fetchPets();
    } catch (err) {
      console.error("Error saving pet", err);
    }
  };

  const confirmDelete = (id: string) => {
    setShowConfirm({ show: true, id });
  };

  const handleRemoveConfirmed = async () => {
    if (!showConfirm.id) return;
    try {
      await axios.delete(`http://localhost:3000/api/v1/pet/${showConfirm.id}`);
      fetchPets();
      showToast("Pet deleted successfully!");
      setShowConfirm({ show: false, id: null });
    } catch (err) {
      console.error("Error deleting pet", err);
    }
  };

  const handleEdit = (pet: Pet) => {
    setEditingPetId(pet._id || null);
    setFormData({
      name: pet.name || "",
      age: pet.age?.toString() || "",
      breed: pet.breed || "",
      gender: pet.gender || "",
      likes: pet.likes || "",
      dislikes: pet.dislikes || "",
      description: pet.description || "",
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto font-serif">
      <SNavbar />

      <div className="absolute inset-0 w-full h-full bg-[url('/src/assets/images/emptybg.png')] bg-repeat opacity-10 pointer-events-none" />

      <div className="text-2xl mb-4 ml-8 cursor-pointer">←</div>

      <div className="border border-[#A0522D] rounded-xl p-6 ml-60 mr-60 mb-20 bg-white relative z-10">
        <h2 className="text-xl font-semibold mb-4">Pet details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full border p-2 rounded" />
            <input name="age" value={formData.age} onChange={handleInputChange} placeholder="Age" type="number" className="w-full border p-2 rounded" />
            
            {/* Breed Dropdown */}
            <select
              name="breed"
              value={formData.breed}
              onChange={handleInputChange}
              className="w-full border p-2 rounded text-gray-700"
            >
              <option value="">Select Breed</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Rabbit">Rabbit</option>
            </select>

            <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full border p-2 rounded text-gray-700">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input name="likes" value={formData.likes} onChange={handleInputChange} placeholder="Likes" className="w-full border p-2 rounded" />
            <input name="dislikes" value={formData.dislikes} onChange={handleInputChange} placeholder="Dislikes" className="w-full border p-2 rounded" />
          </div>
          <div className="space-y-3 flex flex-col justify-between">
            <input type="file" onChange={handleImageChange} className="w-full border p-2 rounded" accept="image/*" />
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full h-24 border p-2 rounded" />
          </div>
        </div>
        <div className="text-center mt-6">
          <button onClick={handleSave} className="bg-[#A0522D] text-white px-6 py-2 rounded-full">
            {editingPetId ? "Update" : "Add"}
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-center mb-6">Available pets for adoption</h2>
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {pets.map((pet) => (
          <div className="relative" key={pet._id}>
            <button onClick={() => confirmDelete(pet._id!)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10">
              ✕
            </button>
            <button onClick={() => handleEdit(pet)} className="absolute -top-2 left-2 bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10">
              ✎
            </button>
            <DogCard {...pet} />
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showConfirm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-[90%] max-w-md text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Are you sure you want to delete this pet?</h3>
            <div className="flex justify-center space-x-4">
              <button onClick={handleRemoveConfirmed} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Yes, Delete</button>
              <button onClick={() => setShowConfirm({ show: false, id: null })} className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#A0522D] text-white px-8 py-4 rounded-full shadow-xl text-lg font-semibold z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default PetDetails;
 