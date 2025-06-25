import React from "react";
import clsx from "clsx";

interface DogCardProps {
  name: string;
  age: number;
  imageUrl: string;
  selected?: boolean;
  onClick?: () => void;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export const DogCard: React.FC<DogCardProps> = ({
  name,
  age,
  imageUrl,
  selected,
  onClick,
  isFavorite = false,
  onFavoriteToggle,
}) => {
  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onFavoriteToggle) onFavoriteToggle();
  };

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
          disabled={!onFavoriteToggle}
          className={clsx(
            "p-1 rounded-full transition focus:outline-none",
            onFavoriteToggle ? "hover:bg-gray-100 cursor-pointer" : "cursor-default"
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
