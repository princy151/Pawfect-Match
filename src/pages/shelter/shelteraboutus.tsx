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

      {/* Hero Section with Image and Text Overlay */}
      <div className="relative mb-16">
        <img
          src="src/assets/images/AboutUsHead.png"
          alt="About Us Hero"
          className="w-full object-cover max-h-[500px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-3">About Pawfect Match</h2>
          <p className="text-black font-semibold max-w-2xl text-sm md:text-base leading-relaxed">
            Pawfect Match is your trusted platform for easy pet adoptions, personalized matches, and lifelong companionship, connecting loving homes with pets in need—one paw at a time.
          </p>
        </div>
      </div>

      {/* About Section - Margined and Styled */}
<div className="px-6 md:px-20 lg:px-32 font-['Abhaya_Libre_ExtraBold']">

  {/* Quote */}
  <h3 className="text-left text-4xl font-extrabold mb-10">"Your step, their new beginning."</h3>

  {/* Image Layout Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    {/* Left - Full Image */}
    <div className="h-full">
      <img
        src="src/assets/images/AboutUs1.png"
        alt="About Us 1"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right - Two Stacked Images */}
    <div className="flex flex-col gap-6 h-full">
      <img
        src="src/assets/images/AboutUs2.png"
        alt="About Us 2"
        className="w-full h-1/2 object-cover"
      />
      <img
        src="src/assets/images/AboutUs3.png"
        alt="About Us 3"
        className="w-full h-1/2 object-cover"
      />
    </div>
  </div>

  {/* Mission Statement */}
  <div className="text-black space-y-6 text-justify text-lg">
    <p>
      At Pawfect Match, we believe that every pet deserves a loving home and every person deserves a loyal companion. Our platform is dedicated to connecting potential pet parents with animals in need of adoption through a seamless, secure, and friendly process. Whether you're looking for a playful puppy, a calm kitten, or a senior pet that needs a second chance, Pawfect Match helps you find your perfect furry friend.
    </p>
    <p>
      We work closely with trusted shelters and rescue organizations to ensure all pets listed are healthy.
      Our goal is to make adoption safe, easy, and to become part of a loving family. With features like personalized matches, adoption resources, and community support, we help make the journey smoother.
    </p>
    <p>
      Join us in creating countless happily ever-afters—one paw at a time.
    </p>
  </div>
</div>


      {/* Footer */}
      <footer className="mt-12 border-t pt-6 text-sm text-[] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-[#A7522A]">
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
