import React from 'react';

const SRegister: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white border border-orange-300 rounded-md shadow-md p-6 md:p-10 max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-orange-700 mb-6">
          Register your details here.
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold uppercase mb-1">Shelter Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold uppercase mb-1">Location</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter last name"
            />
          </div>

          <div className="md:col-span-2 flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold uppercase mb-1">Establishment Date</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={2}
                  placeholder="DD"
                  className="w-1/3 border border-gray-300 px-3 py-2 rounded text-center"
                />
                <input
                  type="text"
                  maxLength={2}
                  placeholder="MM"
                  className="w-1/3 border border-gray-300 px-3 py-2 rounded text-center"
                />
                <input
                  type="text"
                  maxLength={4}
                  placeholder="YYYY"
                  className="w-1/3 border border-gray-300 px-3 py-2 rounded text-center"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold uppercase mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold uppercase mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter email address"
            />
          </div>

          <div className="md:col-span-1 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-md h-40 text-center text-gray-400 cursor-pointer">
            <span>Click to Upload your<br />profile picture</span>
          </div>

          <div className="md:col-span-1 flex items-center justify-center">
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded font-semibold hover:bg-orange-700 transition"
            >
              REGISTER
            </button>
          </div>
        </form>

        {/* Optional volunteer image section */}
        <div className="hidden md:flex justify-end mt-6">
          <img
            src="https://via.placeholder.com/200x120"
            alt="Volunteers with dog"
            className="object-contain h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default SRegister;
