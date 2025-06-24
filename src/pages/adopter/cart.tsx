import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Navbar from '../../assets/common/navbar';

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFDFB] px-4 py-8 font-[Abhaya_Libre]">
      <Navbar />

      {/* Main Grid */}
      <div className="max-w-5xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Cart Items */}
        <div className="border-1 border-[#D67D3E] rounded-xl px-6 pt-4 pb-6">
          <h2 className="text-xl font-extrabold text-center bg-[#FFFDFB] text-[#C15327] w-fit px-4 -mt-8 mb-4 mx-auto rounded-t-md border border-[#C15327]">
            My Cart
          </h2>

          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between mb-6 border border-[#D67D3E] rounded-md p-3 shadow-sm"
            >
              {/* Image and Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 rounded-md" />
                <div className="text-sm text-black">
                  <p className="font-semibold">#####</p>
                  <p>Qty. 1</p>
                </div>
              </div>
              {/* Price and Delete */}
              <div className="text-sm flex items-center gap-3">
                <p className="text-black">Rs 0.00</p>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Order Summary */}
        <div className="border-2 border-[#C15327] rounded-xl p-6 bg-[#FFFAF5]">
          <h2 className="text-xl font-bold text-center text-[#2F1103] mb-6">Order Summary</h2>

          <div className="space-y-2 text-sm text-black font-medium mb-6">
            <p>Total items:</p>
            <p>Subtotal:</p>
            <p>Total:</p>
          </div>

          <input
            type="text"
            placeholder="Enter discount code"
            className="w-full text-center border bg-white border-gray-400 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring focus:ring-[#C15327]"
          />

          <div className="mb-3 font-semibold text-sm">Proceed to payment</div>

          <div className="flex items-center gap-4 mb-6">
            <img src="src/assets/images/esewa.png" alt="Esewa" className="w-10 h-10" />
            <img src="src/assets/images/Khalti.png" alt="Khalti" className="w-20 h-13" />

            {/* Vertical Divider */}
            <div className="h-15 border-l border-gray-400"></div>

            <span className="ml-2 text-sm">Cash on delivery</span>
          </div>


          <button className="w-full bg-[#A7522A] text-white py-2 rounded-full font-bold tracking-wide hover:bg-[#843e1c] transition">
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
