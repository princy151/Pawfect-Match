import React from "react";
import clsx from "clsx";

interface DogCardProps {
  name: string;
  age: number;
  imageUrl: string;
  selected?: boolean;
  onClick?: () => void;
}

export const DogCard: React.FC<DogCardProps> = ({
  name,
  age,
  imageUrl,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "rounded-xl p-2 cursor-pointer transition-all duration-300",
        selected ? "shadow-2xl scale-105" : "border border-black"
      )}
    >
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
