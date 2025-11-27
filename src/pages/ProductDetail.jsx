import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  LeafyGreen,
  Zap,
  Award, 
  CalendarDays 
} from 'lucide-react'; 
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link to="/productos" className="text-amber-600 hover:text-amber-700">
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20">
      {/* Navegación */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors duration-300 mt-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
        </div>
      </div>

      {/* Producto Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Imagen del Producto */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="w-full h-96 lg:h-[500px] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <div className="absolute top-4 right-4">
                <span className="bg-amber-600 text-white px-4 py-2 rounded-full font-semibold">
                  {product.size}
                </span>
              </div>
            </motion.div>

            {/* Información del Producto */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-serif mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {'★'.repeat(5)}
                    <span className="text-gray-400 ml-2">(48 reseñas)</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-amber-600 mb-6">
                  €{product.price}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description} Nuestro proceso artesanal garantiza que cada gota 
                  conserve todas sus propiedades organolépticas y nutricionales. 
                  Ideal para ensaladas, marinados y para realzar el sabor de tus platos favoritos.
                </p>
              </div>

              {/* Características */}
              <div className="grid grid-cols-2 gap-4 py-4">
                {[
                  { icon: LeafyGreen, text: '100% Natural' },
                  { icon: Zap, text: 'Extracción en frío' },
                  { icon: Award, text: 'Premiado' },
                  { icon: CalendarDays, text: 'Cosecha 2024' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {/* Renderizamos el componente del icono */}
                    <item.icon className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Selector de Cantidad y Añadir al Carrito */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-semibold">Cantidad:</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">{selectedQuantity}</span>
                    <button
                      onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <motion.button
                  onClick={() => {
                    for (let i = 0; i < selectedQuantity; i++) {
                      addToCart(product);
                    }
                  }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Añadir al Carrito - €{(product.price * selectedQuantity).toFixed(2)}</span>
                </motion.button>
              </div>

              {/* Garantías */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                {[
                  { icon: Truck, text: 'Envío en 24h' },
                  { icon: Shield, text: 'Garantía calidad' },
                  { icon: Star, text: 'Producto premium' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                    <span className="text-sm text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Productos Relacionados */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">
              Productos Relacionados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  key={relatedProduct.id}
                  to={`/producto/${relatedProduct.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${relatedProduct.image})` }}>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-amber-600 font-bold">€{relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;