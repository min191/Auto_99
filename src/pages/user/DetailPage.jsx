import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PopupContact from "../../components/PopupContact";
import { PRODUCT_API } from "../../API/ListProductAPI";

const DetailPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentCars, setRecentCars] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await fetch(`${PRODUCT_API}/${id}`);
        if (!response.ok)
          throw new Error(`Failed to fetch (Status: ${response.status})`);
        const data = await response.json();
        if (!data?.data) throw new Error("Empty car data received");
        setCar(data.data);
        saveToRecentCars(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCarDetail();
  }, [id]);

  const saveToRecentCars = (car) => {
    if (!car || !car._id) return;
    let storedCars = JSON.parse(localStorage.getItem("recentCars")) || [];
    if (!storedCars.some((item) => item._id === car._id)) {
      storedCars = [car, ...storedCars.slice(0, 4)];
      localStorage.setItem("recentCars", JSON.stringify(storedCars));
    }
    setRecentCars(storedCars);
  };

  useEffect(() => {
    setRecentCars(JSON.parse(localStorage.getItem("recentCars")) || []);
  }, []);

  if (loading)
    return (
      <div className="min-h-[100vh] col-span-full flex items-center justify-center h-full">
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
    );
  if (error)
    return <p className="text-center text-lg text-red-500">Error: {error}</p>;

  return (
    <div className="container text-start mx-auto px-4 py-8">
      {/* Main Detail Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Larger Image */}
          <div className="relative">
            <img
              src={car?.img}
              alt={car?.name || "No image"}
              className="w-full h-[500px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Enhanced Info Section */}
          <div className="flex flex-col justify-between p-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {car?.name || "Unknown Car"}
              </h1>
              <p className="text-gray-600 text-lg mb-4">
                {car?.category || "N/A"}
              </p>
              <p className="text-2xl font-semibold text-red-600 mb-6">
                {car?.price ? Number(car?.price).toLocaleString() : "N/A"} $
              </p>

              <div className="bg-gray-100 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Brand:</span>
                  <span>{car?.category || "N/A"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">
                    Year of Manufacture:
                  </span>
                  <span>{car?.year || "N/A"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Mileage:</span>
                  <span>{car?.mileage ? `${car.mileage} km` : "New"}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-gray-700">
                    Description:
                  </span>
                  <p className="text-gray-600">
                    {car?.description || "No description available."}
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Button */}
            <button
              onClick={() => setIsPopupOpen(true)}
              className="mt-6 w-full bg-gradient-to-r from-gray-800 to-black text-white py-3 px-6 rounded-lg 
                         font-semibold text-lg hover:from-gray-700 hover:to-gray-900 
                         transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>

      {/* Recent Cars Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Recently Viewed Cars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {recentCars.map((item) => (
            <Link
              key={item._id}
              to={`/detail/${item._id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.img}
                alt={item.name || "No image"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {item.name || "Unknown Car"}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {item.year || "N/A"} | {item.category || "N/A"} |{" "}
                  {item.mileage ? `${item.mileage} km` : "New"}
                </p>
                <p className="text-md font-bold text-red-600">
                  {item.price ? Number(item.price).toLocaleString() : "N/A"} $
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popup Component */}
      <PopupContact
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        carName={car?.name || "Unknown Car"}
      />
    </div>
  );
};

export default DetailPage;
