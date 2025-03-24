import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Tiêu đề */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Tell me what you need?
        </h2>
        <p className="text-gray-600 text-base mt-2">
          Leave your contact details so our team can get in touch with you!
        </p>
      </div>

      {/* Form */}
      <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Car model"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start text-gray-600 text-sm">
            <input type="checkbox" className="mr-2 mt-1 focus:ring-black" />
            <p>
              In accordance with the LGPD, I agree to provide the above data so
              that Touring Cars can contact me to present services. Your name,
              email and phone number will be used in accordance with our{" "}
              <a
                href="#"
                className="text-gray-900 font-semibold hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Nút Gửi */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
