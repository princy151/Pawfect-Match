import React from 'react';

interface ShopCardProps {
  imageUrl: string;
  price: string;
  discount: string;
  description: string;
  onAddToCart?: () => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ imageUrl, price, discount,description, onAddToCart }) => {
  return (
    <div className="w-[250px] h-[350px] border border-black rounded-2xl px-4 py-4 flex flex-col items-center">
      <img src={imageUrl} alt="Product" className="w-[190px] h-[160px] object-contain mb-2" />
      <div className="flex items-center w-full ml-31 gap-2 mt-2">
        <div className="bg-gray-200 shadow px-4 py-1 rounded text-sm font-semibold">Rs {price}</div>
        {discount !== '0%' && discount !== '-0%' && (
          <div className="text-sm font-bold text-black">{discount}</div>
        )}
      </div>
      <div className="text-gray-600 text-sm text-center w-full mt-3 mb-4 line-clamp-3">
        {description}
      </div>
      <button
        onClick={onAddToCart}
        className="mt-auto bg-[#C93838] text-[#E7DAD1] text-lg hover:text-[#E7DAD1] hover:bg-[#9D2A2A] w-full py-2 rounded-xl font-bowlby"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShopCard;
