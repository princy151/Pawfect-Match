import React from 'react';
import Navbar from '../../assets/common/navbar';

const products = [
  {
    id: 1,
    name: 'Pet Harness',
    price: '$5.00',
    discount: '-30%',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Pumpkin Toy',
    price: '$5.00',
    discount: '-5%',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Feeder Set',
    price: '$5.00',
    discount: '-5%',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    name: 'Nail Clipper',
    price: '$5.00',
    discount: '-10%',
    image: 'https://via.placeholder.com/100',
  },
];

const AShop: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Shop Banner Section (Side-by-Side with Padding & Full Images) */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row ">
          {/* Left: Large main banner image */}
          <div className="md:w-2/3 w-full">
            <img
              src="src/assets/images/Shop1.png"
              alt="Shop Main Banner"
              className="w-full h-110 object-contain"
            />
          </div>

          {/* Right: Two stacked small banners */}
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
        <h2 className="text-xl font-semibold mb-4">Offer Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map(product => (
            <div key={product.id} className="border rounded-md p-3 flex flex-col items-center text-center shadow-sm">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-contain mb-2" />
              <div className="text-sm font-semibold mb-1">{product.price}</div>
              <div className="text-xs text-red-500 mb-2">{product.discount}</div>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* More Products */}
      <section className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-4">More Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => {
            const p = products[i % products.length];
            return (
              <div key={i} className="border rounded-md p-3 flex flex-col items-center text-center shadow-sm">
                <img src={p.image} alt={p.name} className="w-20 h-20 object-contain mb-2" />
                <div className="text-sm font-semibold mb-1">{p.price}</div>
                <div className="text-xs text-gray-400 mb-2">────────────</div>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Add to Cart</button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AShop;
