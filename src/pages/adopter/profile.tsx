import React, { useEffect, useState } from 'react';
import Navbar from '../../assets/common/navbar';
import axios from 'axios';

interface AdopterProfile {
  _id: string;
  fname: string;
  lname: string;
  dob: string;
  phone: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<AdopterProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const adopterEmail = localStorage.getItem('adopterEmail');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/adopter/profile/email/${adopterEmail}`);
        setProfile(res.data.data);
        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError('Failed to load profile.');
        setLoading(false);
      }
    };

    if (adopterEmail) {
      fetchProfile();
    } else {
      setError('User not logged in.');
      setLoading(false);
    }
  }, [adopterEmail]);

  return (
    <div className="min-h-screen bg-[#FFFDFB] flex flex-col">
      <Navbar />

      <div className="relative flex-1 w-full">
        <img
          src="src/assets/images/emptybg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />

        <div className="relative z-10 flex items-center justify-center p-4 min-h-[calc(100vh-80px)]">
          <div className="bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.1)] p-6 flex flex-col sm:flex-row gap-10 w-full max-w-4xl">
            {/* Profile Card */}
            <div className="relative flex flex-col items-start bg-[#FFFDFB] border-2 border-[#A7522A] rounded-4xl p-6 flex-1">
              <img
                src="src/assets/images/profile.webp"
                alt="Profile"
                className="w-40 h-40 object-cover rounded-md mb-4 mx-auto"
              />

              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : profile ? (
                <div className="text-sm text-black space-y-2 w-full">
                  <p><strong>First Name:</strong> {profile.fname}</p>
                  <p><strong>Last Name:</strong> {profile.lname}</p>
                  <p><strong>DOB:</strong> {profile.dob?.slice(0, 10)}</p>
                  <p><strong>Phone no.:</strong> {profile.phone}</p>
                  <p><strong>Email:</strong> {profile.email}</p>
                </div>
              ) : null}

              <div className="w-full flex justify-end mt-8">
                <button className="bg-[#A7522A] text-[#E7DAD1] font-extrabold px-4 py-2 rounded-2xl hover:bg-[#E7DAD1] hover:text-black transition drop-shadow-lg">
                  EDIT
                </button>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col justify-between flex-1 font-semibold mt-20 text-center h-full">
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

              <div className="mt-auto pt-10 flex justify-center">
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = '/';
                  }}
                  className="bg-[#C93838] text-[#E7DAD1] w-24 py-2 border border-black rounded-lg font-extrabold hover:bg-[#9D2828] transition"
                >
                  LOG OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
