import React from 'react';

const ShelterHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white flex justify-between items-center px-6 py-4 shadow">
        <div className="text-xl font-bold flex items-center gap-2">
          <span role="img" aria-label="paw">🐾</span>
          Pawfect Match
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full shadow">Home</button>
          <a href="#">Pets</a>
          <a href="#">Shop</a>
          <a href="#">About us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-orange-100 flex flex-col md:flex-row justify-between items-center p-6 md:p-12">
        <div className="space-y-4 max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800">Help Them Find<br />a Forever Home.</h2>
          <p className="text-gray-700">Every paw deserves a place to belong. Partner with us to give rescue pets the love, care, and second chance they’ve been waiting for.</p>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">LIST A PET</button>
          <div className="mt-6 space-y-1 text-sm text-gray-700">
            <p>🐾 800+ Pets Listed</p>
            <p>🐾 120 Shelters Partnered</p>
            <p>🐾 18K+ Lives Touched</p>
          </div>
        </div>
        <img src="https://via.placeholder.com/250x200" alt="Dog" className="mt-6 md:mt-0 rounded-md" />
      </section>

      {/* Adoption Review Section */}
      <section className="p-6 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-center">Review the adoption form</h3>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Pet Grid */}
          <div className="grid grid-cols-3 gap-4 flex-1">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i} className="bg-white rounded shadow p-2 flex flex-col items-center">
                <img src="https://via.placeholder.com/100" alt="Pet" className="rounded mb-2" />
                <button className="text-xs bg-gray-200 px-2 py-1 rounded">View</button>
              </div>
            ))}
          </div>

          {/* Form Preview */}
          <div className="border rounded-md p-4 w-full max-w-sm bg-white">
            <img src="https://via.placeholder.com/150" alt="User" className="w-32 h-32 object-cover rounded-md mb-4 mx-auto" />
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Name:</strong></p>
              <p><strong>Email:</strong></p>
              <p><strong>Address:</strong></p>
              <p><strong>Past Pets:</strong></p>
              <p><strong>Date:</strong></p>
            </div>
            <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
              View Form
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShelterHomePage;
