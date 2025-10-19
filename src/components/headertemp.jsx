import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 bg-[#4caf50] py-3 text-white w-screen z-[1000] shadow-md">
      <div className="relative max-w-[1200px] mx-auto px-5 flex items-center h-14">
        {/* Logo left */}
        <Link to="/" className="flex items-center gap-[10px] text-white no-underline">
          <img
            src="/src/assets/images/logo.jpeg"
            width={50}
            height={50}
            alt="Logo"
            className="rounded-lg"
          />
          <div className="flex flex-col font-bold">
            Paradise Nursery
            <p className="text-[0.8rem] italic">Where Green Meets Serenity</p>
          </div>
        </Link>

        {/* Center menu */}
        <ul className="hidden md:flex list-none gap-6 font-semibold absolute left-1/2 transform -translate-x-1/2">
          <li>
            <Link to="/plant" className="text-white">
              Plants
            </Link>
          </li>
        </ul>

        {/* Cart right */}
        <ul className="hidden md:flex list-none gap-6 font-semibold ml-auto">
          <li>
            <Link to="/cart" className="text-white">
              Cart
            </Link>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#4caf50] w-full px-5 py-4">
          <ul className="flex flex-col gap-4 list-none text-center">
            <li>
              <Link
                to="/plant"
                className="block w-full text-white"
                onClick={() => setMenuOpen(false)}
              >
                Plants
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block w-full text-white"
                onClick={() => setMenuOpen(false)}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
