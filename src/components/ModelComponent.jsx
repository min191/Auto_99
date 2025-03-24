import React from "react";
import { Electric, Hybrid, Combustion } from "../assets/index" ;
import { Link } from "react-router-dom";

const carModels = [
  {
    name: "A Combustão",
    image: Combustion,
  },
  {
    name: "Híbrido",
    image: Hybrid,
  },
  {
    name: "Elétrico",
    image: Electric,
  },
];

const ModelComponent = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Model
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {carModels.map((car, index) => (
          <Link
            to="/shop"
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-60 object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <div className="absolute bottom-6 left-6 text-white text-xl font-semibold">
              {car.name} <span className="ml-2">➝</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModelComponent;
