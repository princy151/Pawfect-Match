import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    sheltername: '',
    location: '',
    ed: '', // YYYY-MM-DD
    phone: '',
    email: '',
    password: '',
    image: '',
  });

  const [message, setMessage] = useState('');
  const [popupType, setPopupType] = useState<'success' | 'error'>('success');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEDChange = (index: number, value: string) => {
    const parts = formData.ed ? formData.ed.split('-') : ['', '', ''];
    parts[index] = value.padStart(index === 0 ? 4 : 2, '0');
    const ed = `${parts[0]}-${parts[1]}-${parts[2]}`;
    setFormData((prev) => ({ ...prev, ed }));
  };

  const handleDatePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, ed: e.target.value }));
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

      setPopupType('success');
      setMessage('Registration successful!');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/shelterlogin'); 
      }, 3000);
      console.log(res.data);
    } catch (err: any) {
      setPopupType('error');
      setMessage(err.response?.data?.message || 'Registration failed');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
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
          <div>
            <label className="block text-xs font-extrabold uppercase mb-1 tracking-wider">Name</label>
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

          <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Establishment Date</label>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="YYYY"
                    value={formData.ed.split('-')[0] || ''}
                    onChange={(e) => handleEDChange(0, e.target.value)}
                    className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
                  />
                  <input
                    type="text"
                    maxLength={2}
                    placeholder="MM"
                    value={formData.ed.split('-')[1] || ''}
                    onChange={(e) => handleEDChange(1, e.target.value)}
                    className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
                  />
                  <input
                    type="text"
                    maxLength={2}
                    placeholder="DD"
                    value={formData.ed.split('-')[2] || ''}
                    onChange={(e) => handleEDChange(2, e.target.value)}
                    className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
                  />
                </div>

                <input
                  type="date"
                  value={formData.ed}
                  onChange={handleDatePickerChange}
                  className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#A7522A]"
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

          <div className="md:col-span-1 flex items-center justify-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#a3491c] text-[#E7DAD1] px-10 py-3 rounded-xl font-extrabold uppercase tracking-wider hover:bg-[#823b15] transition"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>

        {/* Success/Error Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div
              className={`rounded-xl px-6 py-4 text-center shadow-md w-[90%] max-w-md
                ${popupType === 'success'
                  ? 'bg-[#FFFDFB] border-2 border-[#a3491c]'
                  : 'bg-red-100 border-2 border-red-400'}`}
            >
              <h2 className={`text-lg font-extrabold mb-2 ${popupType === 'success' ? 'text-[#a3491c]' : 'text-red-700'}`}>
                {popupType === 'success' ? 'Success!' : 'Error'}
              </h2>
              <p className="text-sm font-medium text-gray-700">{message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SRegister;
