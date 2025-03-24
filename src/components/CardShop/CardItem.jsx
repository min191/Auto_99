import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ car }) => {
  const navigate = useNavigate();

  if (!car) {
    return <p className="text-red-500">Invalid car data</p>;
  }

  return (
    <div
    className="border rounded-2xl shadow-lg bg-white overflow-hidden w-full cursor-pointer hover:shadow-xl transition p-4"
    onClick={() => navigate(`/detail/${car._id}`)}
  >
    <div className="rounded-xl overflow-hidden">
      <img
        src={car?.img}
        alt={car?.name}
        className="w-full h-52 object-cover"
      />
    </div>

    {/* Thông tin xe */}
    <div className="text-start mt-3 space-y-1">
      <h3 className="font-bold text-lg text-gray-900">{car?.name || "Unknown"}</h3>
      <p className="text-sm text-gray-600 font-medium">
        {car?.year || "N/A"} | {car?.mileage ? `${car?.mileage.toLocaleString()} km` : "New"}
      </p>
      <p className="font-bold text-2xl text-gray-900">
       {car?.price ? car?.price.toLocaleString("pt-BR") : "0,00"} $
      </p>
    </div>
  </div>
  );
};

export default CardItem;
