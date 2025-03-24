import React from "react";
import ContactForm from "../../components/ContactFrom";
import { BMWM2 } from "../../assets";

const ContactPage = () => {
  return (
    <div className=" flex flex-col items-center  min-h-screen bg-white">
      <div className=" flex  items-start justify-between w-full ">
        <div className="w-full md:w-1/3 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="space-y-4">
            <button className="flex items-center justify-start w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Talk to us
            </button>
            <button className="flex items-center justify-start w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Send an email
            </button>
            <button className="flex items-center justify-start w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              WhatsApp
            </button>
            <button className="flex items-center justify-start w-full p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Instagram
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden mt-10 h-[450px]">
          <img
            src={BMWM2}
            alt="Car"
            className="absolute right-[-250px]  w-[100%] h-full"
          />
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="w-full max-w-4xl mt-12">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
