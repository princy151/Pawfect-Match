import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface DogCardProps {
  name: string;
  age: number;
  image: string;            // might be full URL or just filename
  selected?: boolean;
  onClick?: () => void;
  isFavorite?: boolean;
  onFavoriteToggle?: (fav: boolean) => void;
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
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);

  useEffect(() => {
    setIsFavorite(isFavoriteProp);
  }, [isFavoriteProp]);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !isFavorite;
    setIsFavorite(next);
    onFavoriteToggle?.(next);
  };

  const BASE_URL = "http://localhost:3000";
  // If `image` starts with "http", use it as-is; otherwise treat it as an upload filename.
  const imageUrl = image.startsWith("http")
    ? image
    : `${BASE_URL}/uploads/${image}`;

  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white rounded-xl p-2 cursor-pointer transition-all duration-300",
        selected ? "shadow-2xl scale-105" : "border border-black",
        "w-64 h-fit relative"
      )}
    >
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={handleHeartClick}
          className="p-1 rounded-full transition focus:outline-none hover:bg-gray-100"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <span className={clsx("text-lg", isFavorite ? "text-red-500" : "text-gray-400")}>
            {isFavorite ? "❤️" : "🤍"}
          </span>
        </button>
      </div>
      <div className="rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-64 h-48 object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-center mt-2">
        <span className="bg-gray-100 px-4 py-1 rounded-lg text-sm font-semibold">
          {name} <span className="text-xs font-normal ml-1">{age} yrs</span>
        </span>
      </div>
    </div>
  );
};
