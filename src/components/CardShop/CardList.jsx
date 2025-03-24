import React from "react";
import CardItem from "./CardItem";

const CardList = ({ cars }) => {
  console.log("Received cars:", cars); // Debug data

  if (!Array.isArray(cars) || cars.length === 0) {
    return <p className="text-gray-500">No cars available</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {cars.map((car) => (
        <CardItem key={car?._id} car={car} />
      ))}
    </div>
  );
};

export default CardList;
