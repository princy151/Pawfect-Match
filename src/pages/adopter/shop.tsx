import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../assets/common/navbar';
import ShopCard from '../../assets/common/shopcard';

interface Product {
  description: string;
  _id: string;
  name: string;
  price: string;
  discount?: string;
  image: string;
}

const AShop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState('1');
  const BASE_URL = 'http://localhost:3000';
  const userId = localStorage.getItem('adopterId');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/shop');
      setProducts(res.data.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  const openQuantityModal = (productId: string) => {
    if (!userId) {
      alert('Please login to add items to cart.');
      return;
    }
    setSelectedProductId(productId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setQuantity('1');
    setSelectedProductId(null);
  };

  const confirmAddToCart = async () => {
    const qty = Number(quantity);
    if (!qty || qty < 1) {
      alert('Please enter a valid quantity.');
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/v1/cart/${userId}/add`, {
        productId: selectedProductId,
        quantity: qty,
      });
      alert(`Added ${qty} item(s) to cart!`);
      closeModal();
    } catch (err) {
      console.error('Failed to add to cart:', err);
      alert('Failed to add product to cart.');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Banner Section */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 w-full">
            <img
              src="src/assets/images/Shop1.png"
              alt="Shop Main Banner"
              className="w-full h-110 object-contain"
            />
          </div>
          <div className="md:w-1/3 w-full flex flex-col gap-4">
            <img src="src/assets/images/Shop2.png" alt="Offer" className="w-full h-auto object-contain" />
            <img src="src/assets/images/Shop3.png" alt="Cat Food" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Offer Products */}
      <section className="px-6 py-4">
        <h2 className="text-4xl font-semibold mb-4 ml-35 font-[Abhaya_Libre]">Offer Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-30">
          {products
            .filter((p) => p.discount && p.discount !== '-0%')
            .map((product) => (
              <ShopCard
                key={product._id}
                imageUrl={`${BASE_URL}/uploads/${product.image}`}
                price={product.price}
                discount={product.discount || ''}
                description={product.description || 'No description available'}
                onAddToCart={() => openQuantityModal(product._id)}
              />
            ))}
        </div>
      </section>

      {/* More Products */}
      <section className="px-6 py-4">
        <h2 className="text-4xl font-semibold mb-4 ml-35 font-[Abhaya_Libre]">More Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-30">
          {products
            .filter((p) => !p.discount || p.discount === '-0%')
            .map((product) => (
              <ShopCard
                key={product._id}
                imageUrl={`${BASE_URL}/uploads/${product.image}`}
                price={product.price}
                discount={product.discount || ''}
                description={product.description || 'No description available'}
                onAddToCart={() => openQuantityModal(product._id)}
              />
            ))}
        </div>
      </section>

      {/* Quantity Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(5, 5, 5, 0.6)' }}>
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
            <h3 className="text-xl font-bold text-center mb-4 text-[#C15327]">Enter Quantity</h3>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-400 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-[#C15327]"
              placeholder="e.g. 1"
            />
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmAddToCart}
                className="bg-[#C15327] hover:bg-[#a2461d] text-white px-6 py-2 rounded-full font-semibold"
              >
                Add to Cart
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold"
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

export default AShop;
