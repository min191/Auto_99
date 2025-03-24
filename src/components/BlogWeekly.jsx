import React from "react";
import { Macan } from "../assets";

const BlogWeekly = () => {
  return (
    <div className=" text-start max-w-5xl mx-auto px-6 py-8">
      {/* Tiêu đề */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Weekly Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Hình ảnh */}
        <div>
          <img
            src={Macan}
            alt="Porsche Macan"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Nội dung */}
        <div className="bg-black text-white p-6 rounded-lg shadow-md min-h-[250px]">
          <h3 className="text-lg font-bold mb-2">New Porsche Macan GTS.</h3>
          <p className="text-sm text-gray-300">
            New Macan GTS: stands out in areas where the others are lost in the
            crowd. Young, dynamic and urban, with comprehensive standard
            equipment, exclusive design features and, of course, traditional
            Porsche performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogWeekly;
