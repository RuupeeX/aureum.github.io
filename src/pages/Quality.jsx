import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const Quality = () => {
  const processData = [
    {
      title: "El Cultivo",
      description: "Nuestras 500 hectáreas de olivares en el Valle Escondido, con variedades Picual, Hojiblanca y Arbequina, practican agricultura ecológica en secano.",
      features: ["Baja densidad de árboles", "Agricultura ecológica", "Microclima privilegiado"],
      color: "green"
    },
    {
      title: "La Cosecha",
      description: "Recolección manual (ordeño) o con vibradores de tronco de baja intensidad. Procesamiento en menos de 6 horas para máxima frescura.",
      features: ["Máximo 6 horas desde recolección", "Métodos no invasivos", "Preservación de antioxidantes"],
      color: "green"
    },
    {
      title: 'Línea "Herencia"',
      description: "Utilizamos el equipamiento original de Luciano - molino de piedra y prensa de viga - para ediciones limitadas.",
      features: ["Proceso en frío (<27°C)", "Perfil complejo y robusto", "Picanteza intensa y memorable"],
      color: "amber"
    },
    {
      title: 'Línea "Clásica"',
      description: "Tecnología moderna con molinos de martillos y decanters para extracción por centrifugación en frío.",
      features: ["Control milimétrico de temperatura", "Perfil sensorial impecable", "Consistencia garantizada"],
      color: "amber"
    }
  ];

  const qualityMetrics = [
    { value: "< 0.2%", label: "Acidez", description: "Muy por debajo del límite legal de 0.8% para AOVE" },
    { value: "Muy Bajo", label: "Índice de Peróxidos", description: "Indica oxidación mínima y frescura óptima" },
    { value: "Alto", label: "Polifenoles", description: "Niveles excepcionalmente altos de antioxidantes" }
  ];

  const certifications = [
    "Agricultura Ecológica",
    "DOP Valle Escondido",
    "ISO 9001"
  ];

  return (
    <div className="min-h-screen bg-amber-50 pt-20">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-serif font-bold mb-6">Calidad y Producción</h1>
          <p className="text-xl font-light">
            Donde la tradición abraza la innovación en cada gota
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Proceso de Producción */}
      <SectionWrapper className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-serif text-center text-amber-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Nuestro Proceso Artesanal
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {processData.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg border ${
                  item.color === "green" ? "border-green-200" : "border-amber-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className={`text-2xl font-serif ${
                  item.color === "green" ? "text-green-800" : "text-amber-800"
                } mb-4`}>
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Parámetros de Calidad */}
      <SectionWrapper className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-serif text-center text-amber-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Nuestra Obsesión por la Calidad
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-green-700 mb-2">{metric.value}</div>
                <h3 className="text-xl font-serif text-amber-800 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certificaciones */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-amber-800 mb-8">Certificaciones</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white px-6 py-3 rounded-full border border-green-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-green-700 font-semibold">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Quality;