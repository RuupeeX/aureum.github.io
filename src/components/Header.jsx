import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { toggleCart, getCartItemsCount } = useCart();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-amber-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            {/* logo */}
            <img 
              src="../../public/images/logoau.png" 
              alt="Aureum Logo" 
              className="h-16 w-auto" // Cambiado de h-12 a h-16
            />
          </motion.div>
          <nav className="hidden md:flex items-center space-x-8">
            {["Inicio", "Productos", "Historia", "Calidad"].map((item) => (
              <motion.a
                key={item}
                href={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="w-6 h-6" />
              {getCartItemsCount() > 0 && (
                <motion.span
                  className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {getCartItemsCount()}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;