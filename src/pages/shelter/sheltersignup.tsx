import React, { useState } from 'react';
import axios from 'axios';

const SRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    sheltername: '',
    location: '',
    ed: '',
    phone: '',
    email: '',
    password: '',
    image: '', // send empty string or null for now
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEDChange = (index: number, value: string) => {
    const parts = formData.ed ? formData.ed.split('-') : ['', '', ''];
    parts[index] = value.padStart(index === 0 ? 4 : 2, '0'); // index 0 = YYYY
    const ed = `${parts[0]}-${parts[1]}-${parts[2]}`;
    setFormData((prev) => ({ ...prev, ed }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await axios.post('http://localhost:3000/api/v1/shelter/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMessage('Registration successful!');
      console.log(res.data);
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefefe] px-4 relative">
      <img
        src="src/assets/images/emptybg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      <div className="bg-[#FFFDFB] border border-[#b2581c] rounded-[2rem] shadow-md p-6 md:p-12 w-full max-w-7xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#a3491c] mb-8">
          Register your details here.
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Shelter Name */}
          <div>
            <label className="block text-xs font-extrabold uppercase mb-1 tracking-wider">Shelter Name</label>
            <input
              type="text"
              name="sheltername"
              value={formData.sheltername}
              onChange={handleChange}
              required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
              placeholder="Enter shelter name"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
              placeholder="Enter location"
            />
          </div>

          {/* Establishment Date + Email */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Establishment Date</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  maxLength={4}
                  placeholder="YYYY"
                  onChange={(e) => handleEDChange(0, e.target.value)}
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
                />
                <input
                  type="text"
                  maxLength={2}
                  placeholder="MM"
                  onChange={(e) => handleEDChange(1, e.target.value)}
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
                />
                <input
                  type="text"
                  maxLength={2}
                  placeholder="DD"
                  onChange={(e) => handleEDChange(2, e.target.value)}
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
                placeholder="Enter email address"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
              placeholder="Enter phone number"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
              placeholder="Enter password"
            />
          </div>

          {/* Upload Profile Picture - Skipped for now */}
          <div className="md:col-span-1 border-2 border-dashed border-gray-400 h-40 flex items-center justify-center rounded-xl text-center text-gray-400 bg-white">
            <span className="text-sm font-semibold">Profile picture upload<br />is not implemented yet</span>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-1 flex items-center justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#a3491c] text-[#E7DAD1] px-10 py-3 rounded-xl font-extrabold uppercase tracking-wider hover:bg-[#823b15] transition"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>

        {message && (
          <div className="mt-4 text-center text-red-500 font-semibold">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default SRegister;
