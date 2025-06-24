import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFDFB] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col sm:flex-row gap-10 w-full max-w-4xl">
        {/* Left Card - Profile */}
        <div className="relative flex flex-col items-start bg-[#FFFDFB] border-2 border-[#A7522A] rounded-4xl p-6 flex-1">
          <img
            src="src/assets/images/profile.webp"
            alt="Profile"
            className="w-40 h-40 object-cover rounded-md mb-4 mx-auto"
          />
          <div className="text-sm text-black space-y-2 w-full">
            <p><strong>First Name:</strong></p>
            <p><strong>Last Name:</strong></p>
            <p><strong>DOB:</strong></p>
            <p><strong>Phone no. :</strong></p>
            <p><strong>Email:</strong></p>
          </div>

          {/* EDIT Button at bottom right */}
          <div className="w-full flex justify-end mt-8">
            <button className="bg-[#A7522A] text-[#E7DAD1] font-extrabold px-4 py-2 rounded-2xl hover:bg-[#E7DAD1] hover:text-black transition drop-shadow-lg">
              EDIT
            </button>
          </div>

        </div>


        {/* Right Buttons */}
        <div className="flex flex-col justify-between flex-1 font-semibold mt-20 text-center h-full">
          {/* Top Buttons */}
          <div className="flex flex-col gap-7">
            <button className="border px-4 py-3 rounded-lg hover:bg-gray-100 transition">
              Back to Home Page
            </button>
            <button className="border px-4 py-3 rounded-lg hover:bg-gray-100 transition">
              Visit your Cart
            </button>
            <button className="border px-4 py-3 rounded-lg hover:bg-gray-100 transition">
              View your Adoption Form
            </button>
          </div>

          {/* Logout Button */}
          <div className="mt-auto pt-10 flex justify-center">
            <button className="bg-[#C93838] text-[#E7DAD1] w-24 py-2 border border-black rounded-lg font-extrabold hover:bg-[#9D2828] transition">
              LOG OUT
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
