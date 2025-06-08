import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Nav */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow mb-6">
        <div className="text-xl font-bold flex items-center gap-2">
          <span role="img" aria-label="paw">🐾</span>
          Pawfect Match
        </div>
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <a href="#">Home</a>
          <div className="relative">
            <button className="bg-orange-500 text-white px-3 py-1 rounded-full shadow">
              Pets ▼
            </button>
          </div>
          <div className="relative">
            <button className="hover:text-black">Shop ▼</button>
          </div>
          <a href="#">About us</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className="bg-white rounded-md shadow-md p-6 flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {/* Cart Items */}
        <div className="flex-1 border rounded-md p-4">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-center">My Cart</h2>
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md" />
                <div>
                  <p className="text-sm">#####</p>
                  <p className="text-sm">Qty. 1</p>
                </div>
              </div>
              <div className="text-sm text-gray-700">$ 0.00</div>
              <button className="text-red-600 hover:text-red-800">
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/2 border rounded-md p-4 bg-orange-50">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-center">Order Summary</h2>
          <div className="text-sm text-gray-800 space-y-2 mb-4">
            <p>Total items:</p>
            <p>Subtotal:</p>
            <p>Total:</p>
          </div>
          <input
            type="text"
            placeholder="Enter discount code"
            className="w-full border rounded px-3 py-2 mb-4"
          />
          <div className="mb-2 font-medium text-sm">Proceed to payment</div>
          <div className="flex items-center gap-4 mb-4">
            <img src="https://via.placeholder.com/30" alt="Esewa" className="w-6 h-6" />
            <img src="https://via.placeholder.com/30" alt="Khalti" className="w-6 h-6" />
            <span className="text-sm">Cash on delivery</span>
          </div>
          <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
