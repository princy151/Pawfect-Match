import React, { useState } from 'react';
import SNavbar from '../../assets/common/snavbar';

const SAdoptionForm: React.FC = () => {
  const [showPetsDropdown, setShowPetsDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  return (
    <div className="bg-white font-sans text-lg text-[#333]">
      {/* Navbar */}
      <SNavbar />

      {/* Header Image */}
      <div className="w-full">
        <img
          src="src/assets/images/AdopterForm.png"
          alt="Adoption"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Form Content */}
      <div className="px-6 md:px-16 lg:px-32 py-10">
        {/* General Information */}
        <section className="border-[1.5px] border-[#A7522A] bg-[#FFFDFB] p-6 mb-10 shadow-sm">
          <h3 className="text-xl font-bold mb-4 border-b border-[#A7522A] pb-2">General Information</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-5 mt-3 mb-3">
              <input type="text" placeholder="Name" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input type="email" placeholder="Email" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input type="tel" placeholder="Phone no." className="bg-white border border-[#A7522A] p-3 rounded-xl" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-2 border-dashed border-black rounded-xl p-6 bg-white text-center">
              <p className="text-gray-500 text-sm">Click here to upload image</p>
              <p className="text-xs text-[#A7522A] mt-2 italic">*Must Upload Citizenship image</p>
            </div>
          </div>
        </section>

        {/* Step Message 1 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <p className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'Abhaya Libre SemiBold' }}>
            Let's proceed towards the next step
          </p>
          <img src="src/assets/images/FormIcon1.png" alt="Step 1" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Address Information */}
        <section className="border-[1.5px] border-[#A7522A] bg-[#FFFDFB] p-6 mb-10 shadow-sm">
          <h3 className="text-xl font-bold mb-4 border-b border-[#A7522A] pb-2">Address Information</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-5 mt-3 mb-3 ">
              <input type="text" placeholder="Current Address" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input type="email" placeholder="City" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input type="tel" placeholder="Province" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input type="tel" placeholder="House no." className="bg-white border border-[#A7522A] p-3 rounded-xl" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-2 border-dashed border-black rounded-xl p-6 bg-white text-center">
              <p className="text-gray-500 text-sm">Click here to upload image</p>
              <p className="text-xs text-[#A7522A] mt-2 italic">*Must Upload image from map</p>
            </div>
          </div>
        </section>

        {/* Step Message 2 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <p className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'Abhaya Libre SemiBold' }}>
            Now one last step to adopt me
          </p>
          <img src="src/assets/images/FormIcon2.png" alt="Step 2" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Extra Information */}
        <section className="border-[1.5px] border-[#A7522A] bg-[#FFFDFB] p-6 mb-10 shadow-sm">
          <h3 className="text-xl font-bold mb-6 border-b border-[#A7522A] pb-2">Extra Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between gap-5 mt-3 mb-3">
              <p className="font-medium">Do you own any pets?</p>
              <p className="font-medium">Do you own or rent a home?</p>
              <p className="font-medium">Have you raised a pet before?</p>
            </div>
            <div className="flex flex-col justify-between gap-5 mt-3 mb-3">
              <div className="flex gap-6">
                <label><input type="radio" name="ownPets" className="mr-2" /> Yes</label>
                <label><input type="radio" name="ownPets" className="mr-2" /> No</label>
              </div>
              <div className="flex gap-6">
                <label><input type="radio" name="ownOrRent" className="mr-2" /> Own</label>
                <label><input type="radio" name="ownOrRent" className="mr-2" /> Rent</label>
              </div>
              <div className="flex gap-6">
                <label><input type="radio" name="raisedBefore" className="mr-2" /> Yes</label>
                <label><input type="radio" name="raisedBefore" className="mr-2" /> No</label>
              </div>
            </div>
          </div>
        </section>

        {/* Step Message 3 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <p className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'Abhaya Libre SemiBold' }}>
            OOPS! Forgot to mention the date
          </p>
          <img src="src/assets/images/FormIcon3.png" alt="Step 3" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Appointment Date */}
        <section className="border-[1.5px] border-[#A7522A] bg-[#FFFDFB] p-6 mb-12 shadow-sm">
          <h3 className="text-xl font-bold mb-4 border-b border-[#A7522A] pb-2">Appointment Date</h3>

          <div className="grid grid-cols-1 gap-5 mt-6 mb-4">

            {/* Date Row */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label className="w-[160px] font-medium mb-1 md:mb-0">Date Selection:</label>
              <span className="text-gray-600 mb-1 md:mb-0">DD/MM/YYYY</span>
              <div className="flex items-center border border-[#A7522A] rounded bg-white px-3 py-[6px] w-[180px] md:ml-10">
                <input
                  type="text"
                  className="flex-1 outline-none bg-transparent"
                  placeholder=""
                />
                <img
                  src="src/assets/images/FormCalender.png"
                  alt="Calendar"
                  className="w-5 h-5 ml-2"
                />
              </div>
            </div>

            {/* Time Row */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label className="w-[160px] font-medium mb-1 md:mb-0">Preferred time:</label>
              <span className="text-gray-600 mb-1 md:mb-0">hrs : mins</span>
              <div className="flex items-center border border-[#A7522A] rounded bg-white px-3 py-[6px] w-[180px] md:ml-10">
                <input
                  type="text"
                  className="outline-none bg-transparent w-[30px] text-center"
                  maxLength={2}
                  placeholder="HH"
                />
                <span className="mx-1 font-semibold text-[#A7522A]">:</span>
                <input
                  type="text"
                  className="outline-none bg-transparent w-[30px] text-center"
                  maxLength={2}
                  placeholder="MM"
                />
              </div>
              <img
                src="src/assets/images/FormClock.png"
                alt="Clock"
                className="w-5 h-5 ml-3"
              />
            </div>

          </div>
        </section>


        {/* Submit Buttons */}
        <div className="flex justify-center gap-35 mt-4">
          <button className="bg-[#6B9D72] text-[#E7DAD1] px-10 py-3 rounded-2xl font-extrabold hover:bg-[#476C4D] transition">
            APPROVE
          </button>
          <button className="bg-[#C93838] text-[#E7DAD1] border-2 border-[#B95D2B] px-10 py-3 rounded-2xl font-extrabold hover:bg-[#9D2828] transition">
            DENY
          </button>
        </div>
      </div>
    </div>
  );
};

export default SAdoptionForm;
