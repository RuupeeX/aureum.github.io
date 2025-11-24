import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
              <span className="text-2xl font-serif font-bold">Aureum</span>
            </div>
            <p className="text-gray-400 mb-4">
              Aceite de Oliva Premium & Artesanal desde 2025
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>+34 912 345 678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-amber-600" />
                <span>info@aureum.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <div className="space-y-2">
              {['Nuestra Historia', 'Proceso de Calidad', 'Productos', 'Contacto'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-amber-600 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <div className="space-y-2">
              {['Términos y Condiciones', 'Política de Privacidad', 'Política de Cookies', 'Aviso Legal'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-amber-600 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Aureum Olive Oil. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;