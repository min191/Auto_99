import { Link } from "react-router-dom";


export default function NotFoundPage() {
  return (
    <div 
      className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="w-16 h-16 text-gray-400 animate-pulse" />
      </div>
      <h1 
        className="text-5xl font-bold mt-4 text-white"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404 - Page Not Found
      </h1>
      <p 
        className="text-lg text-gray-300 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Oops! The page you are looking for does not exist.
      </p>
      <div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button className="mt-6 p-3 bg-gray-800 text-white hover:bg-gray-600" asChild>
          <Link to="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
}