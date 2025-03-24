import React from "react";
import { porscheModel1 } from "../../assets";

const AboutPage = () => {
  return (
    <div className="text-start max-w-6xl mx-auto px-6 py-12 grid gap-8">
      {/* About Us Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center overflow-hidden ">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md min-h-[400px]">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 text-sm">
            Touring Cars specializes in selling luxury and sports cars. With
            security, transparency, and quality, our vehicles are inspected and
            certified to ensure a completely safe purchase.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            We offer special and exclusive models, with a constantly renewed
            inventory to provide the best experience and high-quality standards.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            Our company features a dedicated Detail Center, a private delivery fleet across the country, and a premium showroom designed exclusively for high-performance and customized sports cars.
          </p>
          <p className="text-gray-700 text-sm mt-2">
            Touring Cars is proud to collaborate with top-tier suppliers, dealerships, and technical centers worldwide to build one of the finest luxury car marketplaces in the country.
          </p>
        </div>

        {/* Image with absolute positioning */}
        <div className=" min-h-[400px] bg-gray-100 p-6 rounded-lg shadow-md"
        >
          <img
            src={porscheModel1}
            alt="Porsche Model"
            className="absolute right-[-300px] top-0 h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Mission</h3>
          <p className="text-sm text-gray-300">
            To be the best choice in premium automobiles and play a role in
            creating special moments in people’s lives.
          </p>
        </div>
        <div className="bg-black text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Vision</h3>
          <p className="text-sm text-gray-300">
            To become a national benchmark as the most innovative company in
            connecting people, vehicles, products, and related services.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Values</h3>
        <ul className="text-gray-700 text-sm list-disc pl-4">
          <li>Inspire people</li>
          <li>Anticipate market demands</li>
          <li>Excellence in all processes</li>
          <li>Completely satisfied customers</li>
          <li>Consistent social responsibility</li>
          <li>Sustainability</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
