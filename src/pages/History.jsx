import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Timeline } from "../components/ui/timeline";

const History = () => {
  // Datos para la timeline de Aceternity
  const timelineData = [
    {
      title: "1923",
      content: (
        <div className="space-y-4">
          {/* Header con año y título */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mt-2">
                Los Cimientos de un Sueño
              </h3>
            </div>
          </div>

          {/* Descripción */}
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              Luciano Aureum, un joven agricultor con una conexión espiritual con la tierra, 
              heredó de su abuelo un pequeño olivar en "El Valle Escondido". Tras una devastadora 
              helada, decidió que no bastaba con producir, sino que había que hacerlo con una 
              calidad que desafiara al tiempo.
            </p>
          </div>

          {/* Lista de logros */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Fundación de Aureum</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Molino de piedra y prensa de viga</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Filosofía de calidad excepcional</span>
            </div>
          </div>

          {/* Cita destacada */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-4 text-white">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-amber-200">"</span>
              <p className="text-amber-50 italic leading-relaxed flex-1">
                El nombre, que en latín significa 'Oro', era un homenaje al líquido dorado que con tanto esmero producía.
              </p>
              <span className="text-2xl text-amber-200">"</span>
            </div>
          </div>

          {/* Sello de fundación */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full border border-amber-200">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-700 text-sm font-medium">Año de Fundación</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "1924-1970",
      content: (
        <div className="space-y-4">
          {/* Header con año y título */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mt-2">
                El Secreto Bien Guardado
              </h3>
            </div>
          </div>

          {/* Descripción */}
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              Durante casi cinco décadas, Aureum fue un secreto celosamente guardado entre 
              la familia y un selecto grupo de conocedores. Cada botella era elaborada con 
              la misma dedicación y cuidado que Luciano había establecido desde el principio.
            </p>
          </div>

          {/* Lista de logros */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Producción limitada y exclusiva</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Transmisión generacional del conocimiento</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Desarrollo de perfil de sabor único</span>
            </div>
          </div>

          {/* Cita destacada */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-4 text-white">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-amber-200">"</span>
              <p className="text-amber-50 italic leading-relaxed flex-1">
                Durante décadas, Aureum fue un secreto bien guardado, un producto de familia y para conocedores.
              </p>
              <span className="text-2xl text-amber-200">"</span>
            </div>
          </div>

          {/* Sello de periodo */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full border border-amber-200">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-amber-700 text-sm font-medium">Periodo de Tradición</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Años 70",
      content: (
        <div className="space-y-4">
          {/* Header con año y título */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mt-2">
                La Visión de una Nueva Generación
              </h3>
            </div>
          </div>

          {/* Descripción */}
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              Bajo el liderazgo visionario de su nieta, Isabel Aureum, la empresa dio el gran 
              salto comercial. Isabel combinaba la sabiduría ancestral de su abuelo con una 
              visión comercial moderna y ambiciosa.
            </p>
          </div>

          {/* Lista de logros */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Registro oficial de la marca</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Diseño del envase icónico</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Primeras exportaciones a Europa</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <span className="text-amber-700 text-sm">Posicionamiento como producto de lujo</span>
            </div>
          </div>

          {/* Cita destacada */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-4 text-white">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-amber-200">"</span>
              <p className="text-amber-50 italic leading-relaxed flex-1">
                Isabel posicionó definitivamente a Aureum como un sinónimo de lujo y autenticidad.
              </p>
              <span className="text-2xl text-amber-200">"</span>
            </div>
          </div>

          {/* Sello de expansión */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full border border-amber-200">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-amber-700 text-sm font-medium">Era de Expansión</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Años 80-90",
      content: (
        <div className="space-y-4">
          {/* Header con año y título */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mt-2">
                Consolidación y Reconocimiento
              </h3>
            </div>
          </div>

          {/* Descripción */}
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              La década de los 80 y 90 marcó el periodo de consolidación internacional de Aureum. 
              El aceite comenzó a ganar prestigiosos premios y reconocimientos en ferias internacionales.
            </p>
          </div>

          {/* Lista de logros */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-sm">🏆</span>
              </div>
              <span className="text-amber-700 text-sm">Expansión a Norteamérica y Asia</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-sm">🏆</span>
              </div>
              <span className="text-amber-700 text-sm">Primeros premios internacionales</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-sm">🏆</span>
              </div>
              <span className="text-amber-700 text-sm">Controles de calidad más rigurosos</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-sm">🏆</span>
              </div>
              <span className="text-amber-700 text-sm">Desarrollo de productos derivados</span>
            </div>
          </div>

          {/* Cita destacada */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-4 text-white">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-amber-200">"</span>
              <p className="text-amber-50 italic leading-relaxed flex-1">
                Cada premio era un homenaje a la visión de Luciano y al trabajo de generaciones.
              </p>
              <span className="text-2xl text-amber-200">"</span>
            </div>
          </div>

          {/* Sello de reconocimiento */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full border border-amber-200">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-amber-700 text-sm font-medium">Era de Reconocimiento</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Actualidad",
      content: (
        <div className="space-y-4">
          {/* Header con año y título */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mt-2">
                Honrando el Pasado, Abrazando el Futuro
              </h3>
            </div>
          </div>

          {/* Descripción */}
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              Hoy, dirigidos por el bisnieto David Aureum, la cuarta generación mantiene viva 
              la esencia de los orígenes mientras incorpora innovación sostenible y tecnología 
              de vanguardia.
            </p>
          </div>

          {/* Lista de logros */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">🌱</span>
              </div>
              <span className="text-amber-700 text-sm">Agricultura ecológica certificada</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">🌱</span>
              </div>
              <span className="text-amber-700 text-sm">Denominación de Origen Protegida</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">🌱</span>
              </div>
              <span className="text-amber-700 text-sm">Expansión de gama de productos</span>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">🌱</span>
              </div>
              <span className="text-amber-700 text-sm">Compromiso con desarrollo sostenible</span>
            </div>
          </div>

          {/* Cita destacada */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-4 text-white">
            <div className="flex items-start gap-3">
              <span className="text-2xl text-amber-200">"</span>
              <p className="text-amber-50 italic leading-relaxed flex-1">
                Han resistido la tentación de la producción masiva, manteniéndose fieles a su filosofía fundamental.
              </p>
              <span className="text-2xl text-amber-200">"</span>
            </div>
          </div>

          {/* Sello de innovación */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full border border-amber-200">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-700 text-sm font-medium">Era de Innovación</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const familyGenerations = [
    {
      name: "Luciano Aureum",
      period: "1923-1955",
      role: "Fundador",
      contribution: "Estableció los cimientos con visión de calidad excepcional y conexión espiritual con la tierra.",
      image: "👴"
    },
    {
      name: "Carlos Aureum",
      period: "1955-1975",
      role: "Segunda Generación",
      contribution: "Mantuvo y perfeccionó las técnicas tradicionales expandiendo la producción.",
      image: "👨"
    },
    {
      name: "Isabel Aureum",
      period: "1975-2000",
      role: "Tercera Generación",
      contribution: "Transformó el negocio familiar en marca internacional con diseño icónico.",
      image: "👩"
    },
    {
      name: "David Aureum",
      period: "2000-Actualidad",
      role: "Cuarta Generación",
      contribution: "Combina tradición con innovación sostenible y certificaciones ecológicas.",
      image: "👨‍💼"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-amber-100 text-black py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nuestra Historia
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Un Siglo de Esencia, Tradición y Excelencia Familiar
          </motion.p>
        </div>
      </section>

      {/* Introducción */}
      <SectionWrapper className="py-16 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif text-amber-800 mb-8">Cuatro Generaciones de Pasión</h2>
          <p className="text-xl leading-relaxed text-gray-700">
            La historia de Aureum es el pilar fundamental de nuestra marca, una narrativa tejida con el 
            compromiso, la visión y el amor por la tierra de la familia Aureum. Desde 1923, hemos 
            capturado el alma del Valle Escondido en cada botella de nuestro Aceite de Oliva Virgen Extra.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Timeline de Aceternity */}
      <div className="w-full bg-amber-100 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-serif text-center text-amber-800 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nuestra Evolución
          </motion.h2>
          
          <Timeline data={timelineData} />
        </div>
      </div>

      {/* Las Generaciones Aureum */}
      <SectionWrapper className="py-20 bg-amber-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-serif text-center text-amber-800 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Las Generaciones Aureum
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyGenerations.map((generation, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-amber-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-5xl mb-4">{generation.image}</div>
                <h3 className="text-xl font-serif text-amber-800 mb-2">{generation.name}</h3>
                <div className="text-amber-600 font-semibold mb-1">{generation.period}</div>
                <div className="text-amber-500 font-medium mb-4">{generation.role}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{generation.contribution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Filosofía Familiar */}
      <SectionWrapper className="py-70 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-amber-50 rounded-3xl shadow-xl p-12 border border-amber-200">
            <motion.div
              className="text-6xl text-amber-600 mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
            >
              "
            </motion.div>
            <motion.blockquote
              className="text-2xl md:text-3xl font-serif text-amber-800 italic leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Cada botella debe contener no solo aceite, sino la esencia de nuestra tierra y nuestra historia.
            </motion.blockquote>
            <motion.p
              className="text-lg text-amber-600 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              - Filosofía de la Familia Aureum, 1923
            </motion.p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Cierre Inspirador */}
      <SectionWrapper className="py-70 bg-amber-800 text-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif mb-8 text-amber-800">Un Legado que Perfuma la Historia</h2>
          <p className="text-lg leading-relaxed mb-6 text-amber-600">
            La historia de Aureum es la prueba viviente de que, en un mundo de producción en masa, 
            hay un lugar para quienes creen que la autenticidad, la paciencia y el amor por la tierra 
            son los ingredientes más valiosos.
          </p>
          <p className="text-amber-400">
            No vendemos simplemente aceite de oliva; ofrecemos una botella de historia, 
            un frasco de esencia pura del Valle Escondido.
          </p>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default History;