import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
// Importamos los iconos de Lucide-React
import { Leaf, Hourglass, FlaskConical } from "lucide-react"; 

const Home = () => {
  const { addToCart } = useCart();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section con Video */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Video de fondo con velocidad reducida */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            filter: "brightness(0.5)",
            animationDuration: "8s",
          }}
          // Se elimina playbackRate que no es una propiedad de estilo estándar, si se desea
          // controlarlo se haría vía JavaScript o si fuera una librería específica.
          // En este caso, lo he comentado para evitar warnings, si es que lo causaba.
          // playbackRate={8} 
        >
          <source src="../../public/video/bannervideo.mp4" type="video/mp4" />
          {/* Fallback por si el video no carga */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('../../public/images/hero2.png')",
              backgroundSize: "cover",
            }}
          ></div>
        </video>

        <motion.div
          className="text-center text-white z-10 px-4 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Aureum
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-amber-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Aceite de Oliva Premium & Artesanal
          </motion.p>
          <motion.p
            className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Descubre la esencia pura del aceite de oliva virgen extra, elaborado
            con dedicación artesanal y el cuidado que solo generaciones de
            tradición pueden ofrecer.
          </motion.p>
          <motion.button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descubre Aureum
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Quiénes Somos */}
      <SectionWrapper bgColor="bg-white">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Desde 2025, la familia Aureum ha cultivado olivos centenarios en
              las soleadas colinas de Madrid, preservando técnicas artesanales
              que se transmiten de generación en generación.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cada botella de Aureum representa no solo un producto excepcional,
              sino una herencia de pasión, calidad y respeto por la tierra que
              nos sustenta.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <div className="flex-1 h-px bg-amber-200"></div>
              <span className="text-amber-600 font-semibold">Desde 1950</span>
              <div className="flex-1 h-px bg-amber-200"></div>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl" 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: "url('../../public/images/history.png')",
                backgroundSize: "cover", 
              }}
            ></div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Calidad y Proceso */}
      <SectionWrapper bgColor="bg-amber-50">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-serif">
            Excelencia en Cada Gota
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf, // 🌿
                title: "Cultivo Sostenible",
                description:
                  "Olivos centenarios cultivados de forma ecológica y sostenible.",
              },
              {
                icon: Hourglass, // ⏳
                title: "Recolección Manual",
                description:
                  "Selección manual de aceitunas en su punto óptimo de maduración.",
              },
              {
                icon: FlaskConical, // ⚗️
                title: "Extracción en Frío",
                description:
                  "Proceso de extracción a baja temperatura para preservar nutrientes.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Renderizamos el componente del icono de Lucide */}
                <div className="text-4xl mb-4 flex justify-center">
                    <item.icon className="w-10 h-10 text-amber-600" /> {/* Ajustado el tamaño y color */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Catálogo de Productos */}
      <SectionWrapper bgColor="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 font-serif">
            Nuestra Colección
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Descubre nuestra exclusiva gama de aceites de oliva virgen extra,
            cada uno con características únicas que reflejan nuestro compromiso
            con la excelencia.
          </p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {products
              .sort(() => Math.random() - 0.5)
              .slice(0, 6)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
          </motion.div>

          {/* Botón "Ver Todos" con icono */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link to="/productos" onClick={() => window.scrollTo(0, 0)}>
              <motion.button
                className="group bg-amber-600 hover:bg-white text-white hover:text-amber-600 px-14 py-4 rounded-[12px] font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-amber-600 hover:border-amber-700 flex items-center space-x-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Colección Completa</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
            <p className="text-gray-500 mt-4 text-sm">
              Explora nuestros {products.length} productos premium
            </p>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Home;