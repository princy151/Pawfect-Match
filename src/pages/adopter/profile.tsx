import React, { useEffect, useState } from 'react';
import Navbar from '../../assets/common/navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<Partial<AdopterProfile>>({});
  const navigate = useNavigate();

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

  const handleSave = async () => {
    if (!profile) return;
    try {
      const res = await axios.put(`http://localhost:3000/api/v1/adopter/update/${profile._id}`, editedData);
      setProfile(res.data.data);
      setIsEditing(false);
      setEditedData({});
    } catch (err) {
      console.error(err);
      setError('Failed to update profile.');
    }
  };

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
                src="src/assets/images/profile.png"
                alt="Profile"
                className="w-40 h-40 object-cover rounded-md mb-4 mx-auto"
              />

              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : profile ? (
                <div className="text-sm text-black space-y-2 w-full">
                  <div>
                    <strong>First Name:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.fname ?? profile.fname}
                        onChange={(e) => setEditedData({ ...editedData, fname: e.target.value })}
                        className="w-full border p-2 rounded"
                      />
                    ) : (
                      profile.fname
                    )}
                  </div>
                  <div>
                    <strong>Last Name:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.lname ?? profile.lname}
                        onChange={(e) => setEditedData({ ...editedData, lname: e.target.value })}
                        className="w-full border p-2 rounded"
                      />
                    ) : (
                      profile.lname
                    )}
                  </div>
                  <div>
                    <strong>DOB:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="date"
                        value={editedData.dob ?? profile.dob.slice(0, 10)}
                        onChange={(e) => setEditedData({ ...editedData, dob: e.target.value })}
                        className="w-full border p-2 rounded"
                      />
                    ) : (
                      profile.dob.slice(0, 10)
                    )}
                  </div>
                  <div>
                    <strong>Phone no.:</strong>{' '}
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.phone ?? profile.phone}
                        onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
                        className="w-full border p-2 rounded"
                      />
                    ) : (
                      profile.phone
                    )}
                  </div>
                  <div>
                    <strong>Email:</strong> {profile.email}
                  </div>
                </div>
              ) : null}

              <div className="w-full flex justify-end mt-8 gap-4">
                {isEditing ? (
                  <>
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-2xl"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-400 text-white px-4 py-2 rounded-2xl"
                      onClick={() => {
                        setIsEditing(false);
                        setEditedData({});
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-[#A7522A] text-[#E7DAD1] font-extrabold px-4 py-2 rounded-2xl hover:bg-[#E7DAD1] hover:text-black transition drop-shadow-lg"
                    onClick={() => setIsEditing(true)}
                  >
                    EDIT
                  </button>
                )}
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col justify-between flex-1 font-semibold mt-20 text-center h-full">
              <div className="flex flex-col gap-7">
                <button className="border px-4 py-3 rounded-lg hover:bg-gray-100 transition" onClick={() => navigate(`/adopterhome`)}>
                  Back to Home Page
                </button>

                <button className="border px-4 py-3 rounded-lg hover:bg-gray-100 transition" onClick={() => navigate(`/adoptercart`)}>
                  Visit your Cart
                </button>

                <button className="border px-4 py-3 rounded-lg hover:bg-gray-100 transition" onClick={() => navigate(``)}>
                  View your Adoption Form
                </button>
              </div>

              <div className="mt-auto pt-10 flex justify-center">
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = '/onboarding';
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
