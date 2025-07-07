import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../assets/common/navbar';
import axios from 'axios';

const AdoptionForm: React.FC = () => {
  const { petId } = useParams(); // get petId from route param
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentAddress: '',
    city: '',
    province: '',
    houseNo: '',
    ownPets: '',
    ownOrRent: '',
    raisedBefore: '',
    appointmentDate: '',
    appointmentHour: '',
    appointmentMinute: '',
  });

  const [citizenshipImage, setCitizenshipImage] = useState<File | null>(null);
  const [mapImage, setMapImage] = useState<File | null>(null);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!citizenshipImage || !mapImage || !petId) {
      alert("Please fill all fields and upload required images");
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("currentAddress", formData.currentAddress);
    form.append("city", formData.city);
    form.append("province", formData.province);
    form.append("houseNo", formData.houseNo);
    form.append("ownPets", formData.ownPets);
    form.append("ownOrRent", formData.ownOrRent);
    form.append("raisedBefore", formData.raisedBefore);
    form.append("appointmentDate", formData.appointmentDate);
    form.append("appointmentTime", `${formData.appointmentHour}:${formData.appointmentMinute}`);
    form.append("petId", petId);
    form.append("citizenshipImage", citizenshipImage);
    form.append("mapImage", mapImage);

    try {
      await axios.post("http://localhost:3000/api/v1/adoption", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Adoption form submitted successfully!");
      navigate('/adopterpets'); // redirect to home or success page
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };

  return (
    <div className="bg-white font-sans text-lg text-[#333]">
      <Navbar />
      <div className="w-full">
        <img
          src="/src/assets/images/AdopterForm.png"
          alt="Adoption"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="px-6 md:px-16 lg:px-32 py-10">
        {/* General Info */}
        <section className="border-[1.5px] border-[#A7522A] bg-[#FFFDFB] p-6 mb-10 shadow-sm">
          <h3 className="text-xl font-bold mb-4 border-b border-[#A7522A] pb-2">General Information</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-5 mt-3 mb-3">
              <input name="name" onChange={handleChange} type="text" placeholder="Name" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input name="email" onChange={handleChange} type="email" placeholder="Email" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input name="phone" onChange={handleChange} type="tel" placeholder="Phone no." className="bg-white border border-[#A7522A] p-3 rounded-xl" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-2 border-dashed border-black rounded-xl p-6 bg-white text-center">
              <input type="file" onChange={(e) => setCitizenshipImage(e.target.files?.[0] || null)} />
              <p className="text-xs text-[#A7522A] mt-2 italic">*Must Upload Citizenship image</p>
            </div>
          </div>
        </section>

        {/* Step 1 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <p className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'Abhaya Libre SemiBold' }}>
            Let's proceed towards the next step
          </p>
          <img src="/src/assets/images/FormIcon1.png" alt="Step 1" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Address Info */}
        <section className="border-[1.5px] border-[#A7522A] bg-[#FFFDFB] p-6 mb-10 shadow-sm">
          <h3 className="text-xl font-bold mb-4 border-b border-[#A7522A] pb-2">Address Information</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-5 mt-3 mb-3">
              <input name="currentAddress" onChange={handleChange} type="text" placeholder="Current Address" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input name="city" onChange={handleChange} type="text" placeholder="City" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input name="province" onChange={handleChange} type="text" placeholder="Province" className="bg-white border border-[#A7522A] p-3 rounded-xl" />
              <input name="houseNo" onChange={handleChange} type="text" placeholder="House no." className="bg-white border border-[#A7522A] p-3 rounded-xl" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-2 border-dashed border-black rounded-xl p-6 bg-white text-center">
              <input type="file" onChange={(e) => setMapImage(e.target.files?.[0] || null)} />
              <p className="text-xs text-[#A7522A] mt-2 italic">*Must Upload image from map</p>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <p className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'Abhaya Libre SemiBold' }}>
            Now one last step to adopt me
          </p>
          <img src="/src/assets/images/FormIcon2.png" alt="Step 2" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Extra Info */}
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
                <label><input type="radio" name="ownPets" value="true" onChange={handleChange} className="mr-2" /> Yes</label>
                <label><input type="radio" name="ownPets" value="false" onChange={handleChange} className="mr-2" /> No</label>
              </div>
              <div className="flex gap-6">
                <label><input type="radio" name="ownOrRent" value="Own" onChange={handleChange} className="mr-2" /> Own</label>
                <label><input type="radio" name="ownOrRent" value="Rent" onChange={handleChange} className="mr-2" /> Rent</label>
              </div>
              <div className="flex gap-6">
                <label><input type="radio" name="raisedBefore" value="true" onChange={handleChange} className="mr-2" /> Yes</label>
                <label><input type="radio" name="raisedBefore" value="false" onChange={handleChange} className="mr-2" /> No</label>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <p className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'Abhaya Libre SemiBold' }}>
            OOPS! Forgot to mention the date
          </p>
          <img src="/src/assets/images/FormIcon3.png" alt="Step 3" className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Appointment Date */}
        <section className="border-[1.5px] border-[#A7522A] bg-[#FFFDFB] p-6 mb-12 shadow-sm">
          <h3 className="text-xl font-bold mb-4 border-b border-[#A7522A] pb-2">Appointment Date</h3>
          <div className="grid grid-cols-1 gap-5 mt-6 mb-4">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label className="w-[160px] font-medium mb-1 md:mb-0">Date Selection:</label>
              <span className="text-gray-600 mb-1 md:mb-0">DD/MM/YYYY</span>
              <div className="flex items-center border border-[#A7522A] rounded bg-white px-3 py-[6px] w-[180px] md:ml-10">
                <input type="date" name="appointmentDate" onChange={handleChange} className="flex-1 outline-none bg-transparent" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <label className="w-[160px] font-medium mb-1 md:mb-0">Preferred time:</label>
              <span className="text-gray-600 mb-1 md:mb-0">hrs : mins</span>
              <div className="flex items-center border border-[#A7522A] rounded bg-white px-3 py-[6px] w-[180px] md:ml-10">
                <input name="appointmentHour" type="text" maxLength={2} onChange={handleChange} className="outline-none bg-transparent w-[30px] text-center" placeholder="HH" />
                <span className="mx-1 font-semibold text-[#A7522A]">:</span>
                <input name="appointmentMinute" type="text" maxLength={2} onChange={handleChange} className="outline-none bg-transparent w-[30px] text-center" placeholder="MM" />
              </div>
              <img src="/src/assets/images/FormClock.png" alt="Clock" className="w-5 h-5 ml-3" />
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center">
          <button onClick={handleSubmit} className="bg-[#B95D2B] text-[#E7DAD1] px-10 py-3 rounded-2xl font-extrabold hover:bg-[#994820] transition">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;
