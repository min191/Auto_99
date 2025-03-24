import React, { useState } from "react";

const FilterComponent = ({ filters, setFilters }) => {
  const [tempFilters, setTempFilters] = useState(filters);

  const applyFilters = () => {
    setFilters({
      category: tempFilters.category,
      year: tempFilters.year,
      priceFrom: tempFilters.priceFrom ? parseInt(tempFilters.priceFrom) : "",
      priceTo: tempFilters.priceTo ? parseInt(tempFilters.priceTo) : "",
      mileageFrom: tempFilters.mileageFrom ? parseInt(tempFilters.mileageFrom) : "",
      mileageTo: tempFilters.mileageTo ? parseInt(tempFilters.mileageTo) : "",
    });
  };

  const clearFilters = () => {
    setTempFilters({
      category: "",
      year: "",
      priceFrom: "",
      priceTo: "",
      mileageFrom: "",
      mileageTo: ""
    });
    setFilters({
      category: "",
      year: "",
      priceFrom: "",
      priceTo: "",
      mileageFrom: "",
      mileageTo: ""
    });
  };

  return (
    <div className="p-6 rounded-lg shadow-lg max-w-md mx-auto bg-white">
      <div className="col-span-2">
        <label className="block text-sm font-bold mb-1">Car Brand</label>
        <select
          className="w-full p-2 border rounded-md"
          value={tempFilters.category}
          onChange={(e) => setTempFilters({ ...tempFilters, category: e.target.value })}
        >
          <option value="">All</option>
          <option value="Toyota">Toyota</option>
          <option value="Audi">Audi</option>
          <option value="Land Rover">Land Rover</option>
          <option value="BYD">BYD</option>
          <option value="Porsche">Porsche</option>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
          <option value="Honda">Honda</option>
        </select>
      </div>

      <div className="col-span-2 mt-4">
        <label className="block text-sm font-bold mb-1">Year of Manufacture</label>
        <select
          className="w-full p-2 border rounded-md"
          value={tempFilters.year}
          onChange={(e) => setTempFilters({ ...tempFilters, year: e.target.value })}
        >
          <option value="">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>
      </div>

      <div className="col-span-2 mt-4">
        <label className="block text-sm font-bold mb-1">Price (million VND)</label>
        <div className="flex gap-2">
          <input
            className="w-1/2 p-2 border rounded-md"
            type="number"
            value={tempFilters.priceFrom}
            onChange={(e) => setTempFilters({ ...tempFilters, priceFrom: e.target.value })}
            placeholder="From"
          />
          <input
            className="w-1/2 p-2 border rounded-md"
            type="number"
            value={tempFilters.priceTo}
            onChange={(e) => setTempFilters({ ...tempFilters, priceTo: e.target.value })}
            placeholder="To"
          />
        </div>
      </div>

      <div className="col-span-2 mt-4">
        <label className="block text-sm font-bold mb-1">Mileage</label>
        <div className="flex gap-2">
          <input
            className="w-1/2 p-2 border rounded-md"
            type="number"
            value={tempFilters.mileageFrom}
            onChange={(e) => setTempFilters({ ...tempFilters, mileageFrom: e.target.value })}
            placeholder="From"
          />
          <input
            className="w-1/2 p-2 border rounded-md"
            type="number"
            value={tempFilters.mileageTo}
            onChange={(e) => setTempFilters({ ...tempFilters, mileageTo: e.target.value })}
            placeholder="To"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        <button
          className="w-1/2 p-2 border rounded-md bg-black text-white hover:bg-gray-800"
          onClick={applyFilters}
        >
         Search
        </button>
        <button
          className="w-1/2 p-2 border rounded-md bg-gray-300 text-black hover:bg-gray-400"
          onClick={clearFilters}
        >
          Clear 
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
