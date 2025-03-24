import React, { useState, useEffect } from "react";

import FilterComponent from "../../components/CardShop/FilterComponent";
import CardList from "../../components/CardShop/CardList";
import { PRODUCT_API } from "../../API/ListProductAPI";

const ShopPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(PRODUCT_API);
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }
        const data = await response.json();

        if (Array.isArray(data?.data)) {
          setCars(data.data);
          setFilteredCars(data.data); // Khởi tạo danh sách ban đầu
        } else {
          setCars([]);
          setFilteredCars([]);
          setError("Invalid data format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Lọc danh sách xe theo filters
  useEffect(() => {
    const applyFilters = () => {
      let filtered = cars.filter((car) => {
        const {
          category,
          yearFrom,
          yearTo,
          priceFrom,
          priceTo,
          mileageFrom,
          mileageTo,
        } = filters;

        // Lọc theo danh mục
        if (category && car.category !== category) return false;

        // Lọc theo khoảng năm (giả sử year là năm sản xuất, hiện chưa có trong API)
        if (yearFrom && parseInt(car.createdAt) < parseInt(yearFrom))
          return false;
        if (yearTo && parseInt(car.createdAt) > parseInt(yearTo)) return false;

        // Lọc theo khoảng giá
        if (priceFrom && car.price < parseInt(priceFrom)) return false;
        if (priceTo && car.price > parseInt(priceTo)) return false;

        // Lọc theo số km đã chạy
        if (mileageFrom && car.mileage < parseInt(mileageFrom)) return false;
        if (mileageTo && car.mileage > parseInt(mileageTo)) return false;

        return true;
      });

      setFilteredCars(filtered);
    };

    applyFilters();
  }, [filters, cars]);

  return (
    <div className="container mx-auto p-6 grid grid-cols-4 gap-6">
      <div className="col-span-1">
        <FilterComponent filters={filters} setFilters={setFilters} />
      </div>
      <div className="col-span-3">
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && filteredCars.length > 0 ? (
          <CardList cars={filteredCars} />
        ) : (
          <div className="col-span-full flex items-center justify-center h-full">
                        <svg
              className="animate-spin h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
