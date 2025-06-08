import React from 'react';

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
      <header className="flex justify-between items-center p-4 border-b">
        <div className="text-xl font-bold flex items-center gap-1">
          <span role="img" aria-label="paw">🐾</span> Pawfect Match
        </div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="hover:text-orange-600">Home</a>
          <div className="relative group">
            <button className="hover:text-orange-600">Pets ▼</button>
            {/* Dropdown placeholder */}
          </div>
          <button className="bg-orange-600 text-white px-4 py-1 rounded">Shop</button>
          <a href="#" className="hover:text-orange-600">About us</a>
        </nav>
      </header>

      {/* Banner section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
        <img src="https://via.placeholder.com/150x100?text=50%25+Off" alt="banner1" className="w-full h-auto rounded" />
        <img src="https://via.placeholder.com/150x100?text=Pet+Shop+Offer" alt="banner2" className="w-full h-auto rounded" />
        <img src="https://via.placeholder.com/150x100?text=Adopt" alt="banner3" className="w-full h-auto rounded" />
        <img src="https://via.placeholder.com/150x100?text=25%25+Off+Food" alt="banner4" className="w-full h-auto rounded" />
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
