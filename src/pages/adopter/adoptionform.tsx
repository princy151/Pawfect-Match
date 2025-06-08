import React, { useState } from 'react';

const AdoptionForm: React.FC = () => {
  const [showPetsDropdown, setShowPetsDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  return (
    <div className="bg-white px-6 py-10 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <span role="img" aria-label="paw">🐾</span> Pawfect Match
        </h1>

        <ul className="flex items-center gap-6 text-gray-700 relative">
          <li className="cursor-pointer">Home</li>

          <li
            onMouseEnter={() => setShowPetsDropdown(true)}
            onMouseLeave={() => setShowPetsDropdown(false)}
            className="relative cursor-pointer"
          >
            Pets ▾
            {showPetsDropdown && (
              <ul className="absolute bg-white shadow-md rounded text-sm z-10 mt-2 w-40">
                <li className="px-4 py-2 hover:bg-gray-100">Dog</li>
                <li className="px-4 py-2 hover:bg-gray-100">Cat</li>
                <li className="px-4 py-2 hover:bg-gray-100">Rabbits</li>
                <li className="px-4 py-2 hover:bg-gray-100">Your Favourites</li>
              </ul>
            )}
          </li>

          <li
            onMouseEnter={() => setShowShopDropdown(true)}
            onMouseLeave={() => setShowShopDropdown(false)}
            className="relative cursor-pointer"
          >
            Shop ▾
            {showShopDropdown && (
              <ul className="absolute bg-white shadow-md rounded text-sm z-10 mt-2 w-40">
                <li className="px-4 py-2 hover:bg-gray-100">Shop Products</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-[#B95D2B] font-semibold">My Cart</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer">About us</li>
        </ul>
      </nav>

      {/* Header */}
      <div className="text-center mb-10">
        <img
          src="https://via.placeholder.com/900x150?text=Adoption+Banner"
          alt="Adoption"
          className="rounded-lg mx-auto"
        />
        <h2 className="text-2xl font-bold mt-6">Adoption Form</h2>
      </div>

      {/* General Info */}
      <section className="border rounded-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">General Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <div className="border border-dashed p-4 rounded text-center">
            <p className="text-gray-500 text-sm">Choose file to upload</p>
            <p className="text-xs text-red-500 mt-2 italic">*Must Upload Citizenship image</p>
          </div>
          <input type="email" placeholder="Email" className="border p-2 rounded col-span-1" />
          <input type="tel" placeholder="Phone no. :" className="border p-2 rounded col-span-1" />
        </div>
      </section>

      <p className="text-center mb-6">Let's proceed towards the next step 🐶</p>

      {/* Address Info */}
      <section className="border rounded-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Address Information</h3>
        <input type="text" placeholder="Current address" className="w-full border p-2 mb-4 rounded" />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="City:" className="border p-2 rounded" />
          <input type="text" placeholder="Province:" className="border p-2 rounded" />
          <input type="text" placeholder="House no.:" className="border p-2 rounded" />
          <input type="text" placeholder="ZIP Code:" className="border p-2 rounded" />
        </div>
      </section>

      <p className="text-center mb-6">Now one last step to adopt me 🐾</p>

      {/* Extra Info */}
      <section className="border rounded-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Extra Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p>Do you own any pets?</p>
            <div className="flex gap-4 mt-1">
              <label><input type="radio" name="ownPets" className="mr-1" /> Yes</label>
              <label><input type="radio" name="ownPets" className="mr-1" /> No</label>
            </div>
          </div>
          <div>
            <p>Do you own or rent a home?</p>
            <div className="flex gap-4 mt-1">
              <label><input type="radio" name="ownOrRent" className="mr-1" /> Own</label>
              <label><input type="radio" name="ownOrRent" className="mr-1" /> Rent</label>
            </div>
          </div>
          <div>
            <p>Have you raised a pet before?</p>
            <div className="flex gap-4 mt-1">
              <label><input type="radio" name="raisedBefore" className="mr-1" /> Yes</label>
              <label><input type="radio" name="raisedBefore" className="mr-1" /> No</label>
            </div>
          </div>
        </div>
      </section>

      <p className="text-center mb-6">OOPS! Forgot to mention the date 🐾</p>

      {/* Appointment Date */}
      <section className="border rounded-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Appointment Date</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="DD/MM/YYYY" className="border p-2 rounded" />
          <input type="text" placeholder="hrs : mins" className="border p-2 rounded" />
        </div>
      </section>

      {/* Submit */}
      <div className="text-center">
        <button className="bg-[#B95D2B] text-white px-8 py-2 rounded-full">SAVE</button>
      </div>
    </div>
  );
};

export default AdoptionForm;
