import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import CheckoutForm from './CheckoutForm';

const CartPanel = () => {
  const { 
    items, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    getCartItemsCount,
    clearCart
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);

  const slideIn = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { type: 'spring', damping: 30 }
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    toggleCart();
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleCart}
            />
            
            <motion.div
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
              variants={slideIn}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-6 h-6 text-amber-600" />
                  <h2 className="text-xl font-bold text-gray-900">Tu Carrito</h2>
                  <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-sm">
                    {getCartItemsCount()}
                  </span>
                </div>
                <button
                  onClick={toggleCart}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center text-gray-500 mt-12">
                    <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>Tu carrito está vacío</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div 
                          className="w-16 h-16 bg-cover bg-center rounded"
                          style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-amber-600 font-bold">€{item.price}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-red-100 text-red-600 rounded transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t p-6 space-y-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-amber-600">€{getCartTotal().toFixed(2)}</span>
                  </div>
                  
                  <motion.button
                    onClick={handleCheckout}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceder al Pago
                  </motion.button>
                  
                  <button
                    onClick={clearCart}
                    className="w-full text-gray-600 hover:text-gray-800 py-2 transition-colors"
                  >
                    Vaciar Carrito
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCheckout && (
          <CheckoutForm
            onClose={() => setShowCheckout(false)}
            cartItems={items}
            total={getCartTotal()}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CartPanel;