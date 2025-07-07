import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../assets/common/navbar';
import ShopCard from '../../assets/common/shopcard';

interface Product {
  _id: string;
  name: string;
  price: string;
  discount?: string;
  image: string; // filename stored in DB
}

const AShop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const BASE_URL = 'http://localhost:3000';

  // Get logged-in user ID from localStorage
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

  const addToCart = async (productId: string) => {
    if (!userId) {
      alert('Please login to add items to cart.');
      return;
    }

    const quantityStr = prompt('Enter quantity to add:', '1');
    if (!quantityStr) return; // user cancelled
    const quantity = Number(quantityStr);
    if (isNaN(quantity) || quantity <= 0) {
      alert('Please enter a valid positive number for quantity.');
      return;
    }

    try {
      await axios.post(`http://localhost:3000/api/v1/cart/${userId}/add`, {
        productId,
        quantity,
      });
      alert(`Added ${quantity} item(s) to cart!`);
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
            <img
              src="src/assets/images/Shop2.png"
              alt="Pet Shop Offer"
              className="w-full h-auto object-contain"
            />
            <img
              src="src/assets/images/Shop3.png"
              alt="Cat Food Offer"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Offer Products */}
      <section className="px-6 py-4">
        <h2 className="text-4xl font-semibold mb-4 ml-35 font-[Abhaya_Libre]">
          Offer Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-30">
          {products
            .filter((p) => p.discount && p.discount !== '0%')
            .map((product) => (
              <ShopCard
                key={product._id}
                imageUrl={`${BASE_URL}/uploads/${product.image}`}
                price={product.price}
                discount={product.discount || ''}
                onAddToCart={() => addToCart(product._id)}
              />
            ))}
        </div>
      </section>

      {/* More Products */}
      <section className="px-6 py-4">
        <h2 className="text-4xl font-semibold mb-4 ml-35 font-[Abhaya_Libre]">
          More Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-30">
          {products.map((product) => (
            <ShopCard
              key={product._id}
              imageUrl={`${BASE_URL}/uploads/${product.image}`}
              price={product.price}
              discount={product.discount || ''}
              onAddToCart={() => addToCart(product._id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AShop;
