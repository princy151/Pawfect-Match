import React from 'react';

interface ShopCardProps {
  imageUrl: string;
  price: string;
  discount: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ShopECard: React.FC<ShopCardProps> = ({ imageUrl, price, discount, onEdit, onDelete }) => {
  return (
    <div className="relative w-[250px] border border-black rounded-2xl px-4 py-4 flex flex-col items-center">
      {/* Product Image */}
      <img src={imageUrl} alt="Product" className="w-[190px] h-[160px] object-contain mb-2" />

      {/* Price + Discount */}
      <div className="flex items-center w-full ml-31 gap-2 mt-2">
        <div className="bg-gray-200 shadow px-4 py-1 rounded text-sm font-semibold">Rs {price}</div>
        <div className="text-sm font-bold text-black">{discount}</div>
      </div>

      {/* Description Placeholder */}
      <div className="text-gray-400 text-sm leading-3 text-center w-full mt-3 mb-4">
        Here goes the description. Very nice description indeed. Yes, this is the description.
      </div>

      {/* Edit and Delete Buttons - Stacked Vertically */}
      <div className="mt-auto flex flex-col w-full gap-2">
        <button
          onClick={onEdit}
          className="bg-[#007bff] text-white text-sm px-4 py-2 rounded-md font-bowlby"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-[#dc3545] text-white text-sm px-4 py-2 rounded-md font-bowlby"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShopECard;
