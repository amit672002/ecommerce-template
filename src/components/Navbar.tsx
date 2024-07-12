import { useState, useRef, useEffect } from "react";
import userIcon from "../assets/user.png";
import shoppingCartIcon from "../assets/shopping-cart.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Close menu when clicking outside the menu
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="px-5 md:relative z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <span className="text-gray-800">Store</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Men
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Women
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Kids
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Customize
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <img
            className="w-5 h-5 cursor-pointer"
            src={shoppingCartIcon}
            alt="shopping-cart-icon"
          />
          <img
            className="w-7 h-7 bg-gray-200 rounded-full p-1 cursor-pointer hover:bg-gray-300"
            src={userIcon}
            alt="user-icon"
          />
        </div>
        <div className="md:hidden flex items-center relative z-30">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-0 left-0 w-full bg-white shadow-lg z-30"
        >
          <button
            onClick={closeMenu}
            className="absolute top-2 right-2 text-gray-800 focus:outline-none py-[10px] px-8"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="container mx-auto py-4 pl-4">
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 px-4 py-2"
            >
              Men
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 px-4 py-2"
            >
              Women
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 px-4 py-2"
            >
              Kids
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-gray-800 px-4 py-2"
            >
              Customize
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 px-4 py-2 flex items-center"
            >
              Cart{" "}
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 px-4 py-2 flex"
            >
              Profile{" "}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
