import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import Navbar from '../../assets/common/navbar';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  _id: string;
  product: Product;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const BASE_URL = 'http://localhost:3000';

  // Get logged-in user ID from localStorage
  const userId = localStorage.getItem('adopterId');

  // Fetch cart items on mount
  useEffect(() => {
    if (!userId) {
      setError('Please login to see your cart.');
      return;
    }
    fetchCartItems();
  }, [userId]);

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/cart/${userId}`);
      setCartItems(Array.isArray(res.data.data.items) ? res.data.data.items : []);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch cart items:', err);
      setError('Failed to load cart items.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (cartItemId: string) => {
    if (!userId) return alert('Please login first.');
    try {
      await axios.delete(`${BASE_URL}/api/v1/cart/${userId}/remove/${cartItemId}`);
      setCartItems((prev) => prev.filter((item) => item._id !== cartItemId));
    } catch (err) {
      console.error('Failed to delete cart item:', err);
      alert('Failed to delete item.');
    }
  };

  const subtotal = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    : 0;

  const totalItems = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  if (loading) return <p className="text-center mt-20">Loading cart...</p>;
  if (error) return <p className="text-center mt-20 text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-[#FFFDFB] font-[Abhaya_Libre] relative">
      {/* Background Image Behind Content */}
      <img
        src="src/assets/images/emptybg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      <div className="relative z-10">
        <Navbar />

        {/* Main Grid */}
        <div className="max-w-5xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Cart Items */}
          <div className="border-1 border-[#D67D3E] rounded-xl px-6 pt-4 pb-6">
            <h2 className="text-2xl font-extrabold text-center bg-[#FFFDFB] text-[#C15327] w-fit px-5 py-2 -mt-8 mb-4 mx-auto rounded-t-md border border-[#C15327]">
              My Cart
            </h2>

            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between mb-6 border border-[#D67D3E] rounded-md p-3 shadow-sm"
                >
                  {/* Image and Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={`${BASE_URL}/uploads/${item.product.image}`}
                      alt={item.product.name}
                      className="w-14 h-14 object-contain rounded-md"
                    />
                    <div className="text-md text-black">
                      <p className="font-semibold">{item.product.name}</p>
                      <p>Qty. {item.quantity}</p>
                    </div>
                  </div>
                  {/* Price and Delete */}
                  <div className="text-sm flex items-center gap-3">
                    <p className="text-black">Rs {(item.product.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-800"
                      aria-label={`Delete ${item.product.name} from cart`}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right - Order Summary */}
          <div className="border-2 border-[#C15327] rounded-xl p-6 bg-[#FFFAF5]">
            <h2 className="text-3xl font-bold text-center text-[#2F1103] mb-6">Order Summary</h2>

            <div className="space-y-2 text-l text-black font-medium mb-6">
              <p>Total items: {totalItems}</p>
              <p>Subtotal: Rs {subtotal.toFixed(2)}</p>
              <p>Total: Rs {subtotal.toFixed(2)}</p>
            </div>

            <input
              type="text"
              placeholder="Enter discount code"
              className="w-full border bg-white border-gray-400 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring focus:ring-[#C15327]"
            />

            <div className="mb-3 font-semibold text-l">Proceed to payment</div>

            <div className="flex items-center gap-4 mb-6">
              <a href="https://esewa.com.np" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/images/esewa.png"
                  alt="Esewa"
                  className="w-10 h-10 cursor-pointer"
                />
              </a>
              <a href="https://khalti.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/images/Khalti.png"
                  alt="Khalti"
                  className="w-20 h-13 cursor-pointer"
                />
              </a>

              {/* Vertical Divider */}
              <div className="h-15 border-l border-gray-400"></div>

              <span className="ml-2 text-sm">Cash on delivery</span>
            </div>

            <button className="w-20 bg-[#A7522A] ml-45 text-[#E7DAD1] py-2 rounded-2xl font-extrabold tracking-wide hover:bg-[#843e1c] transition">
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
