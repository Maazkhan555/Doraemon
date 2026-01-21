import React from "react";
import { Link } from "react-router-dom";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";

const MenuLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Register", path: "/register" },
  { name: "Login", path: "/login" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow sticky top-0 z-50"
    >
      <div className="container mx-auto py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <GiAtomicSlashes className="text-4xl text-primary" />
          <span className="text-2xl font-bold text-gray-700">
            Doraemon
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-6">
          {MenuLinks.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                to={item.path}
                className="text-gray-600 hover:text-primary font-medium"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaSearch className="cursor-pointer text-gray-600" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center cursor-pointer text-gray-600"
          >
            Eng <MdArrowDropDown />
          </motion.div>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
