import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SNavbar from '../../assets/common/snavbar';

const SAdoptionForm: React.FC = () => {
  const { formId } = useParams<{ formId: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<any>({
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
    appointmentTimeHours: '',
    appointmentTimeMinutes: '',
    citizenshipImage: '',
    mapImage: '',
  });
  const [message, setMessage] = useState('');
  const [showConfirm, setShowConfirm] = useState<{ type: 'approve' | 'deny' | null }>({ type: null });

  useEffect(() => {
    if (formId) {
      axios.get(`http://localhost:3000/api/v1/adoption/${formId}`)
        .then(res => {
          const data = res.data.data;
          setFormData({
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || '',
            currentAddress: data.currentAddress || '',
            city: data.city || '',
            province: data.province || '',
            houseNo: data.houseNo || '',
            ownPets: data.ownPets || '',
            ownOrRent: data.ownOrRent || '',
            raisedBefore: data.raisedBefore || '',
            appointmentDate: data.appointmentDate || '',
            appointmentTimeHours: data.appointmentTimeHours || '',
            appointmentTimeMinutes: data.appointmentTimeMinutes || '',
            citizenshipImage: data.citizenshipImage || '',
            mapImage: data.mapImage || '',
          });
        })
        .catch(() => {
          setMessage('Failed to load form data.');
        });
    }
  }, [formId]);

  const confirmApprove = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/adoption/${formId}`);
      setMessage('Adoption form approved and deleted successfully!');
      setShowConfirm({ type: null });
      setTimeout(() => navigate('/shelterhome'), 2000);
    } catch {
      setMessage('Failed to approve adoption form.');
      setShowConfirm({ type: null });
    }
  };

  const confirmDeny = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/adoption/${formId}`);
      setMessage('Adoption form denied and deleted successfully.');
      setShowConfirm({ type: null });
      setTimeout(() => navigate('/shelterhome'), 2000);
    } catch {
      setMessage('Failed to deny adoption form.');
      setShowConfirm({ type: null });
    }
  };

  return (
    <div className="bg-white font-sans text-lg text-[#333] relative min-h-screen">
      <SNavbar />

      {/* Header Image */}
      <div className="w-full">
        <img
          src="src/assets/images/AdopterForm.png"
          alt="Adoption"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Optional Message */}
      {message && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-200 text-green-700 px-6 py-3 rounded-xl shadow-md font-semibold z-50">
          {message}
        </div>
      )}

      {/* Form Content */}
      <div className="px-6 md:px-16 lg:px-32 py-10">

        {/* General Information */}
        <section className="border-[1.5px] border-[#A7522A] bg-[#FFFDFB] p-6 mb-10 shadow-sm">
          <h3 className="text-xl font-bold mb-4 border-b border-[#A7522A] pb-2">General Information</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-5 mt-3 mb-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                readOnly
                className="bg-white border border-[#A7522A] p-3 rounded-xl"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                readOnly
                className="bg-white border border-[#A7522A] p-3 rounded-xl"
              />
              <input
                type="tel"
                placeholder="Phone no."
                value={formData.phone}
                readOnly
                className="bg-white border border-[#A7522A] p-3 rounded-xl"
              />
            </div>

            {/* Citizenship Image Box */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-2 border-dashed border-black rounded-xl p-6 bg-white text-center min-h-[200px]">
              {formData.citizenshipImage && formData.citizenshipImage.trim() !== '' ? (
                <img
                  src={`http://localhost:3000/uploads/${formData.citizenshipImage}`}
                  alt="Citizenship"
                  className="max-w-full max-h-60 rounded-xl object-contain"
                />
              ) : (
                <>
                  <p className="text-gray-500 text-sm cursor-pointer">Click here to upload image</p>
                  <p className="text-xs text-[#A7522A] mt-2 italic">*Must Upload Citizenship image</p>
                </>
              )}
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
              <input
                type="text"
                placeholder="Current Address"
                value={formData.currentAddress}
                readOnly
                className="bg-white border border-[#A7522A] p-3 rounded-xl"
              />
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                readOnly
                className="bg-white border border-[#A7522A] p-3 rounded-xl"
              />
              <input
                type="text"
                placeholder="Province"
                value={formData.province}
                readOnly
                className="bg-white border border-[#A7522A] p-3 rounded-xl"
              />
              <input
                type="text"
                placeholder="House no."
                value={formData.houseNo}
                readOnly
                className="bg-white border border-[#A7522A] p-3 rounded-xl"
              />
            </div>

            {/* Map Image Box */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-2 border-dashed border-black rounded-xl p-6 bg-white text-center min-h-[200px]">
              {formData.mapImage && formData.mapImage.trim() !== '' ? (
                <img
                  src={`http://localhost:3000/uploads/${formData.mapImage}`}
                  alt="Map"
                  className="max-w-full max-h-60 rounded-xl object-contain"
                />
              ) : (
                <>
                  <p className="text-gray-500 text-sm cursor-pointer">Click here to upload image</p>
                  <p className="text-xs text-[#A7522A] mt-2 italic">*Must Upload image from map</p>
                </>
              )}
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
                <label>
                  <input
                    type="radio"
                    name="ownPets"
                    checked={formData.ownPets === 'Yes'}
                    readOnly
                    disabled
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="ownPets"
                    checked={formData.ownPets === 'No'}
                    readOnly
                    disabled
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              <div className="flex gap-6">
                <label>
                  <input
                    type="radio"
                    name="ownOrRent"
                    checked={formData.ownOrRent === 'Own'}
                    readOnly
                    disabled
                    className="mr-2"
                  />
                  Own
                </label>
                <label>
                  <input
                    type="radio"
                    name="ownOrRent"
                    checked={formData.ownOrRent === 'Rent'}
                    readOnly
                    disabled
                    className="mr-2"
                  />
                  Rent
                </label>
              </div>
              <div className="flex gap-6">
                <label>
                  <input
                    type="radio"
                    name="raisedBefore"
                    checked={formData.raisedBefore === 'Yes'}
                    readOnly
                    disabled
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="raisedBefore"
                    checked={formData.raisedBefore === 'No'}
                    readOnly
                    disabled
                    className="mr-2"
                  />
                  No
                </label>
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
              <span className="text-gray-600 mb-1 md:mb-0">
                {formData.appointmentDate || 'DD/MM/YYYY'}
              </span>
              <div className="flex items-center border border-[#A7522A] rounded bg-white px-3 py-[6px] w-[180px] md:ml-10">
                <input
                  type="text"
                  className="flex-1 outline-none bg-transparent"
                  placeholder=""
                  readOnly
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
                  value={formData.appointmentTimeHours}
                  readOnly
                />
                <span className="mx-1 font-semibold text-[#A7522A]">:</span>
                <input
                  type="text"
                  className="outline-none bg-transparent w-[30px] text-center"
                  maxLength={2}
                  placeholder="MM"
                  value={formData.appointmentTimeMinutes}
                  readOnly
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

        {/* Action Buttons */}
        <div className="flex justify-center gap-10 mt-4">
          <button
            className="bg-[#6B9D72] text-[#E7DAD1] px-10 py-3 rounded-2xl font-extrabold hover:bg-[#476C4D] transition"
            onClick={() => setShowConfirm({ type: 'approve' })}
          >
            APPROVE
          </button>
          <button
            className="bg-[#C93838] text-[#E7DAD1] border-2 border-[#B95D2B] px-10 py-3 rounded-2xl font-extrabold hover:bg-[#9D2828] transition"
            onClick={() => setShowConfirm({ type: 'deny' })}
          >
            DENY
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm.type && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#FFFDFB] border-2 border-[#A7522A] rounded-xl p-8 w-11/12 max-w-md shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#6B9D72]">
              {showConfirm.type === 'approve' ? 'Confirm Approval' : 'Confirm Denial'}
            </h2>
            <p className="mb-6 text-[#333] font-medium">
              Are you sure you want to {showConfirm.type === 'approve' ? 'approve' : 'deny'} this adoption form?
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => {
                  if (showConfirm.type === 'approve') confirmApprove();
                  else confirmDeny();
                }}
                className={`px-6 py-2 rounded-xl font-semibold text-[#E7DAD1] transition ${
                  showConfirm.type === 'approve'
                    ? 'bg-[#6B9D72] hover:bg-[#476C4D]'
                    : 'bg-[#C93838] hover:bg-[#9D2828]'
                }`}
              >
                Yes, {showConfirm.type === 'approve' ? 'Approve' : 'Deny'}
              </button>
              <button
                onClick={() => setShowConfirm({ type: null })}
                className="px-6 py-2 rounded-xl font-semibold bg-[#B95D2B] text-[#E7DAD1] hover:bg-[#994820] transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SAdoptionForm;
