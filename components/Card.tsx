import Image from "next/image";
import React from "react";

interface CardProps {
  data: {
    name: string;
    image: string;
    price: string;
    sold: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-3 text-center hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center">
        <div className="bg-gray-200 w-full h-32 rounded-lg mb-3 overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
        <p className="text-red-500 font-bold mt-2">{data.price}</p>
        <p className="text-gray-600 text-sm">Terjual: {data.sold}</p>
    </div>
  );
};

export default Card;
