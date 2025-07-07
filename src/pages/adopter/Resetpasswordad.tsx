import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPasswordad: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Validate token
    const validateToken = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/adopter/resetpassword/${token}`);
        setEmail(res.data.data.email);
        setMessage(res.data.message);
      } catch (err: any) {
        setMessage(err.response?.data?.message || 'Invalid or expired token');
      }
    };
    validateToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/v1/adopter/resetpassword/${token}`, {
        email,
        password: newPassword,
      });
      alert('✅ Password updated successfully! You can now log in.');
      navigate('/adopterlogin');
    } catch (err: any) {
      alert(err.response?.data?.message || '❌ Failed to reset password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-700 mb-4">Reset Your Password</h2>
        <p className="text-center text-gray-600 mb-6">{message}</p>
        {email && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-700 text-white py-2 rounded hover:bg-orange-800 transition"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordad;
