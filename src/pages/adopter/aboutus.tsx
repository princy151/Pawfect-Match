import React, { useState } from 'react';

const AboutUsPage: React.FC = () => {
  const [showPetsDropdown, setShowPetsDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  return (
    <div className="bg-white font-sans px-6 py-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <span role="img" aria-label="paw">🐾</span> Pawfect Match
        </h1>

        <ul className="flex items-center gap-6 text-gray-700 relative">
          <li className="cursor-pointer">Home</li>

          {/* Pets dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowPetsDropdown(true)}
            onMouseLeave={() => setShowPetsDropdown(false)}
          >
            <button className="cursor-pointer">Pets ▾</button>
            {showPetsDropdown && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded text-sm z-10 w-40">
                <li className="px-4 py-2 hover:bg-gray-100">Dog</li>
                <li className="px-4 py-2 hover:bg-gray-100">Cat</li>
                <li className="px-4 py-2 hover:bg-gray-100">Rabbits</li>
                <li className="px-4 py-2 hover:bg-gray-100">Your Favourites</li>
              </ul>
            )}
          </li>

          {/* Shop dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowShopDropdown(true)}
            onMouseLeave={() => setShowShopDropdown(false)}
          >
            <button className="cursor-pointer">Shop ▾</button>
            {showShopDropdown && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded text-sm z-10 w-40">
                <li className="px-4 py-2 hover:bg-gray-100">Shop Products</li>
                <li className="px-4 py-2 hover:bg-gray-100 text-[#B95D2B] font-semibold">My Cart</li>
              </ul>
            )}
          </li>

          <li>
            <button className="bg-[#B95D2B] text-white px-4 py-2 rounded-full shadow-md">
              About us
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="mb-10">
        <img
          src="https://via.placeholder.com/800x200?text=Hero+Image"
          alt="Hero"
          className="rounded-lg w-full object-cover"
        />
        <h2 className="text-2xl font-bold text-center mt-6">About Pawfect Match</h2>
        <p className="text-center max-w-2xl mx-auto mt-2 text-gray-600">
          Pawfect Match is your trusted platform for easy pet adoptions, personalized matches, and
          lifelong companionship—connecting loving homes with pets in need, one paw at a time.
        </p>
      </div>

      {/* Quote */}
      <h3 className="text-center text-xl font-semibold mb-6">"Your step, their new beginning."</h3>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src={`https://via.placeholder.com/200x200?text=Pet+${i + 1}`}
            alt={`Pet ${i + 1}`}
            className="rounded-lg object-cover"
          />
        ))}
      </div>

      {/* Mission Statement */}
      <div className="max-w-3xl mx-auto text-gray-700 space-y-4 text-justify">
        <p>
          At Pawfect Match, we believe that every pet deserves a loving home and every person deserves a loyal companion. Our platform is dedicated to connecting potential pet parents with animals in need of adoption through a seamless, secure, and friendly process. Whether you're looking for a playful puppy, a calm kitten, or a senior pet that needs a second chance, Pawfect Match helps you find your perfect furry friend.
        </p>
        <p>
          We work closely with trusted shelters and rescue organizations to ensure all pets listed are healthy.
        </p>
        <p>
          Our goal is to make adoption safe, easy, and to become part of a loving family. With features like personalized matches, adoption resources, and community support, we help make the journey smoother.
        </p>
        <p>
          Join us in creating countless happily ever-afters—one paw at a time.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t pt-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p><strong>Partners:</strong></p>
          <p>##########</p>
          <p>##########</p>
        </div>
        <div>
          <p><strong>Address:</strong></p>
          <p>##########</p>
          <p>##########</p>
        </div>
        <div>
          <p><strong>Contact us:</strong></p>
          <p>abc@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
