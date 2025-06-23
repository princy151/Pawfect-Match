import React from 'react';

const ARegister: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fefefe] px-4">
      <div className="bg-[#FFFDFB] border border-[#b2581c] rounded-[2rem] shadow-md p-6 md:p-12 w-full max-w-7xl relative overflow-hidden">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#a3491c] mb-8">
          Register your details here.
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-xs font-extrabold uppercase mb-1 tracking-wider">First Name</label>
            <input 
              type="text"
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Last Name</label>
            <input
              type="text"
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter last name"
            />
          </div>

          {/* DOB and Password in Same Row */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-6">
            {/* Date of Birth */}
            <div className="flex-1">
              <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Date of Birth</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  maxLength={2}
                  placeholder="DD"
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center"
                />
                <input
                  type="text"
                  maxLength={2}
                  placeholder="MM"
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center"
                />
                <input
                  type="text"
                  maxLength={4}
                  placeholder="YYYY"
                  className="bg-white w-1/3 border border-gray-300 px-3 py-3 rounded-xl text-center"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex-1">
              <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Password</label>
              <input
                type="password"
                className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Phone Number</label>
            <input
              type="text"
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter phone number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold uppercase mb-1 tracking-wider">Email</label>
            <input
              type="email"
              className="bg-white w-full border border-gray-300 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter email address"
            />
          </div>

          {/* Upload Profile Picture */}
          <div className="md:col-span-1 border-2 border-dashed border-gray-400 h-40 flex items-center justify-center rounded-xl text-center text-gray-400 cursor-pointer bg-white">
            <span className="text-sm font-semibold">Click to Upload your<br />profile picture</span>
          </div>

          {/* Register Button */}
          <div className="md:col-span-1 flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#a3491c] text-[#E7DAD1] px-10 py-3 rounded-xl font-extrabold uppercase tracking-wider hover:bg-[#823b15] transition"
            >
              Register
            </button>
          </div>
        </form>

        {/* Volunteer Image on Right (uncomment when image path is correct) */}
        {/* <img
          src="src/assets/images/RegisterAdopter.png"
          alt="Volunteers with dog"
          className="hidden md:block absolute -bottom-6 -right-8 w-[330px] object-contain z-10"
        /> */}
      </div>
    </div>
  );
};

export default ARegister;
