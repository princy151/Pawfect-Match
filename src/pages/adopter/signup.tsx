import React, { useState } from 'react';
import axios from 'axios';

const ARegister: React.FC = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    dob: '', // format: YYYY-MM-DD
    phone: '',
    email: '',
    password: '',
    image: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDOBChange = (index: number, value: string) => {
    const parts = formData.dob ? formData.dob.split('-') : ['', '', ''];
    parts[index] = value.padStart(index === 2 ? 4 : 2, '0');
    const dob = `${parts[2]}-${parts[1]}-${parts[0]}`; // YYYY-MM-DD
    setFormData({ ...formData, dob });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const payload = {
        fname: formData.fname,
        lname: formData.lname,
        dob: formData.dob,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      };

      const res = await axios.post('http://localhost:3000/api/v1/adopter/register', payload, {
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
    <div className="min-h-screen flex items-center justify-center bg-[#fefefe] px-4">
      <img
        src="src/assets/images/emptybg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />
      <div className="bg-[#FFFDFB] border border-[#b2581c] rounded-[2rem] shadow-md p-6 md:p-12 w-full max-w-7xl relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#a3491c] mb-8">
          Register your details here.
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-extrabold uppercase mb-1 tracking-wider">First Name</label>
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Last Name</label>
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter last name"
            />
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Date of Birth</label>
              <div className="flex gap-3">
                <input type="text" maxLength={2} placeholder="DD" onChange={e => handleDOBChange(0, e.target.value)}
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center" />
                <input type="text" maxLength={2} placeholder="MM" onChange={e => handleDOBChange(1, e.target.value)}
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center" />
                <input type="text" maxLength={4} placeholder="YYYY" onChange={e => handleDOBChange(2, e.target.value)}
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center" />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required
                className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter email address"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Phone Number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter password"
            />
          </div>

          <div className="md:col-span-1 border-2 border-dashed border-gray-400 h-40 flex items-center justify-center rounded-xl text-center text-gray-400 cursor-pointer bg-white">
            <label className="w-full h-full flex items-center justify-center cursor-pointer">
              <input type="file" name="image" accept="image/*" onChange={handleChange} className="hidden" />
              <span className="text-sm font-semibold">Click to Upload your<br />profile picture</span>
            </label>
          </div>

          <div className="md:col-span-1 flex items-center justify-center">
            <button type="submit" disabled={loading}
              className="bg-[#a3491c] text-[#E7DAD1] px-10 py-3 rounded-xl font-extrabold uppercase tracking-wider hover:bg-[#823b15] transition">
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>

        {message && (
          <div className="mt-4 text-center font-semibold text-red-500">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ARegister;
