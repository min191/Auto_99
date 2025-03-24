import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <span className="font-bold text-lg">Auto</span>
        <span className="text-lg font-light">99</span>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <Link
              to="/about"
              className="hover:bg-black hover:text-white p-2 rounded"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:bg-black hover:text-white p-2 rounded"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:bg-black hover:text-white p-2 rounded"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:bg-black hover:text-white p-2 rounded"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
