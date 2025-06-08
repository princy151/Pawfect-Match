import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-md shadow-md p-6 flex flex-col sm:flex-row gap-10 w-full max-w-4xl">
        {/* Left Card - Profile */}
        <div className="flex flex-col items-center border rounded-md p-6 flex-1">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 object-cover rounded-md mb-4"
          />
          <div className="text-sm text-gray-700 space-y-2 w-full">
            <p><strong>First Name:</strong></p>
            <p><strong>Last Name:</strong></p>
            <p><strong>DOB:</strong></p>
            <p><strong>Phone no. :</strong></p>
            <p><strong>Email:</strong></p>
          </div>
          <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition">
            EDIT
          </button>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col justify-center gap-4 flex-1">
          <button className="border px-4 py-2 rounded hover:bg-gray-100 transition">
            Back to Home Page
          </button>
          <button className="border px-4 py-2 rounded hover:bg-gray-100 transition">
            Visit your Cart
          </button>
          <button className="border px-4 py-2 rounded hover:bg-gray-100 transition">
            View your Adoption Form
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
