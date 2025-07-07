import React, { useState } from "react";
import clsx from "clsx";

interface DogCardProps {
  name: string;
  age: number;
  image: string;
  selected?: boolean;
  onClick?: () => void;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export const DogCard: React.FC<DogCardProps> = ({
  name,
  age,
  image,
  selected,
  onClick,
  isFavorite: isFavoriteProp = false,
  onFavoriteToggle,
}) => {
  // Local state to toggle heart color on click
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Toggle local favorite state
    setIsFavorite(!isFavorite);

    // Call external toggle if provided
    if (onFavoriteToggle) onFavoriteToggle();
  };

  // BASE URL of your backend
  const BASE_URL = "http://localhost:3000";

  // Construct full image URL
  const imageUrl = image ? `${BASE_URL}/uploads/${image}` : "/default-image.png";

  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white rounded-xl p-2 cursor-pointer transition-all duration-300",
        selected ? "shadow-2xl scale-105" : "border border-black",
        "w-64 h-fit relative"
      )}
    >
      {/* Heart Button */}
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={handleHeartClick}
          className={clsx(
            "p-1 rounded-full transition focus:outline-none hover:bg-gray-100 cursor-pointer"
          )}
        >
          <span className={clsx("text-lg", isFavorite ? "text-red-500" : "text-gray-400")}>
            {isFavorite ? "❤️" : "🤍"}
          </span>
        </button>
      </div>

      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-64 h-48 object-cover rounded-xl"
        />
      </div>

      {/* Info */}
      <div className="flex justify-center mt-2">
        <span className="bg-gray-100 px-4 py-1 rounded-lg text-sm font-semibold">
          {name} <span className="text-xs font-normal ml-1">{age} yrs</span>
        </span>
      </div>
    </div>
  );
};
