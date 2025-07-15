import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<'success' | 'error'>('success');
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files) {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDOBChange = (index: number, value: string) => {
    const parts = formData.dob ? formData.dob.split('-') : ['', '', ''];
    const year = parts[0] || '';
    const month = parts[1] || '';
    const day = parts[2] || '';
    const newParts = [year, month, day];

    newParts[index] = value.padStart(index === 0 ? 4 : 2, '0');
    const newDob = `${newParts[0]}-${newParts[1]}-${newParts[2]}`;
    setFormData({ ...formData, dob: newDob });
  };

  const handleDatePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // format: YYYY-MM-DD
    setFormData({ ...formData, dob: value });
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

      setPopupType('success');
      setMessage('Registration successful!');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/adopterlogin'); // ✅ redirect path here
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
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Last Name</label>
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter last name"
            />
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Date of Birth</label>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="YYYY"
                    value={formData.dob.split('-')[0] || ''}
                    onChange={(e) => handleDOBChange(0, e.target.value)}
                    className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center"
                  />
                  <input
                    type="text"
                    maxLength={2}
                    placeholder="MM"
                    value={formData.dob.split('-')[1] || ''}
                    onChange={(e) => handleDOBChange(1, e.target.value)}
                    className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center"
                  />
                  <input
                    type="text"
                    maxLength={2}
                    placeholder="DD"
                    value={formData.dob.split('-')[2] || ''}
                    onChange={(e) => handleDOBChange(2, e.target.value)}
                    className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center"
                  />
                </div>

                <input
                  type="date"
                  value={formData.dob}
                  onChange={handleDatePickerChange}
                  className="bg-white border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
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
                className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
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
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
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
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter password"
            />
          </div>

          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <label className="w-40 h-40 rounded-full border-4 border-dashed border-gray-400 bg-white flex items-center justify-center cursor-pointer overflow-hidden relative">
              <input type="file" name="image" accept="image/*" onChange={handleChange} className="hidden" />
              {!previewUrl ? (
                <span className="text-xs text-gray-400 font-semibold text-center px-2">
                  Click to Upload<br />your profile picture
                </span>
              ) : (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </label>
          </div>


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

        {/* Success/Error Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(5, 5, 5, 0.6)' }}>
            <div
              className={`rounded-xl px-6 py-4 text-center shadow-md w-[90%] max-w-md
                ${popupType === 'success'
                  ? 'bg-[#FFFDFB] border-2 border-[#a3491c]'
                  : 'bg-red-100 border-2 border-red-400'}`}
            >
              <h2
                className={`text-lg font-extrabold mb-2
                ${popupType === 'success' ? 'text-[#a3491c]' : 'text-red-700'}`}
              >
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

export default ARegister;
