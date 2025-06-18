import React, { useState } from 'react';

const ShopPage: React.FC = () => {
  const [showOffer, setShowOffer] = useState(false);

  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/120',
      name: 'Pumpkin Toy',
      price: 'Rs. 150',
      offer: '-5%',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/120',
      name: 'Dog Food',
      price: 'Rs. 380',
      offer: '-10%',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/120',
      name: 'Nail Clipper',
      price: 'Rs. 190',
      offer: '-5%',
    },
  ];

  return (
    <div className="p-6 font-sans bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span role="img" aria-label="paw">🐾</span> Pawfect Match
        </h1>
        <ul className="flex gap-6 text-gray-800 items-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">My Pets</li>
          <li className="cursor-pointer text-white bg-[#B95D2B] px-4 py-1 rounded">Shop</li>
          <li className="cursor-pointer">About us</li>
        </ul>
      </nav>

      {/* Item Details Form */}
      <section className="border rounded-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Item details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <div className="border border-dashed p-8 text-center text-gray-500 rounded">Add Photo</div>
          <textarea placeholder="Description" className="border p-2 rounded h-24 md:col-span-1" />
          <div className="flex gap-2">
            <input type="text" placeholder="Price" className="border p-2 rounded w-1/2" />
            <input type="text" placeholder="Offer" className="border p-2 rounded w-1/3" />
            <input type="checkbox" className="ml-2" />
          </div>
        </div>
        <button className="bg-[#B95D2B] text-white px-6 py-2 rounded">Add/Update</button>
      </section>

      {/* Offer Products */}
      <section className="mb-10">
        <h3 className="text-lg font-bold mb-4">Offer Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-md p-4 text-center">
              <img src={product.image} alt={product.name} className="mx-auto mb-2" />
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-600">{product.price}</p>
              <p className="text-sm text-red-600">{product.offer}</p>
              <div className="mt-2 flex justify-center gap-2">
                <button className="bg-sky-500 text-white px-4 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Products */}
      <section>
        <h3 className="text-lg font-bold mb-4">More Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[...products, ...products].map((product, i) => (
            <div key={i} className="border rounded-md p-4 text-center">
              <img src={product.image} alt={product.name} className="mx-auto mb-2" />
              <p className="font-semibold">{product.name}</p>
              <p className="text-sm text-gray-600">{product.price}</p>
              <p className="text-sm text-red-600">{product.offer}</p>
              <div className="mt-2 flex justify-center gap-2">
                <button className="bg-sky-500 text-white px-4 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
