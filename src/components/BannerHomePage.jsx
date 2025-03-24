import React from "react";
import { porscheModel5 } from "../assets";
import { useNavigate } from "react-router-dom";

const BannerHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-between m-auto h-[500px] overflow-hidden ml-[140px]">
      <div className="relative z-10 text-left">
        <h1 className="text-5xl font-bold text-black leading-tight">
          Enduring Trust, <br /> Expanding Quality.
        </h1>
        <button
          onClick={() => navigate("/shop")}
          className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg flex items-center hover:bg-gray-800 transition"
        >
          View Car
          <span className="ml-2">➝</span>
        </button>
      </div>
      <img
        src={porscheModel5}
        alt="Car"
        className="absolute right-[-300px] top-0 h-full "
      />
    </div>
  );
};

export default BannerHomePage;
