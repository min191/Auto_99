import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-start w-full border-t border-gray-200 py-8">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
        {/* Cột 1 - Logo & Mô tả */}
        <div>
          <h2 className="font-bold text-lg flex items-center">Auto-99</h2>
          <p className="mt-2 text-sm">Enduring Trust, Expanding Quality.</p>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaInstagram className="cursor-pointer hover:text-gray-600" />
            <FaFacebookF className="cursor-pointer hover:text-gray-600" />
            <FaYoutube className="cursor-pointer hover:text-gray-600" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        {/* Cột 2 - Thông tin liên hệ */}
        <div>
          <h3 className="font-bold text-lg">Contact</h3>
          <p className="text-sm">minhnq@gmail.com</p>
          <p className="text-sm">0888299116</p>
        </div>

        {/* Cột 3 - Đăng ký nhận tin */}
        <div>
          <h3 className="font-bold text-lg">Subscribe</h3>
          <p className="text-sm mt-2">
            Enter your email to receive the latest news from Auto-99.
          </p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="E-mail"
              className="border border-gray-400 px-4 py-2 rounded-l-md w-full"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
              ➝
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
