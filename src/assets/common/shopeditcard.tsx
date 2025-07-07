import React from 'react';

interface ShopCardProps {
  imageUrl: string;
  price: string;
  discount: string;
  description: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ShopECard: React.FC<ShopCardProps> = ({
  imageUrl,
  price,
  discount,
  description,
  onEdit,
  onDelete
}) => {
  const BASE_URL = "http://localhost:3000";
  const fullImageUrl = imageUrl ? `${BASE_URL}/uploads/${imageUrl}` : "/default-image.png";

  return (
    <div className="relative w-[250px] border border-black rounded-2xl px-4 py-4 flex flex-col items-center">
      {/* Product Image */}
      <img
        src={fullImageUrl}
        alt="Product"
        className="w-[190px] h-[160px] object-contain mb-2"
      />

      {/* Price + Discount */}
      <div className="flex items-center w-full gap-2 mt-2">
        <div className="bg-gray-200 shadow px-4 py-1 rounded text-sm font-semibold">{price}</div>
        <div className="text-sm font-bold text-black">{discount}</div>
      </div>

      {/* Product Description */}
      <div className="text-gray-600 text-sm text-center w-full mt-3 mb-4 line-clamp-3">
        {description}
      </div>

      {/* Edit and Delete Buttons */}
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
