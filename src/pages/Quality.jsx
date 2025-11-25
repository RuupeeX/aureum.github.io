import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

const Quality = () => {
  const processData = [
    {
      title: "El Cultivo en el Valle Escondido",
      description:
        "Nuestras 500 hectáreas de olivares se encuentran en el microclima privilegiado del Valle Escondido, donde cultivamos las variedades Picual, Hojiblanca y Arbequina mediante agricultura ecológica en secano.",
      features: [
        "Baja densidad de árboles (100-150 árboles/hectárea)",
        "Agricultura ecológica certificada sin pesticidas químicos",
        "Microclima único con 300 días de sol anuales",
        "Suelos calcáreos con excelente drenaje",
        "Riego natural por lluvia (secano)",
      ],
      icon: "🌳",
      color: "amber-800",
      borderColor: "border-amber-800",
      textColor: "text-amber-800",
      bgColor: "bg-amber-800",
      lightBgColor: "bg-amber-100",
      details:
        "Cada olivo recibe la máxima atención individual, permitiendo que absorba los nutrientes y la luz solar necesarios para producir aceitunas excepcionales.",
    },
    {
      title: "La Cosecha: Arte y Precisión",
      description:
        "Realizamos la recolección en el momento óptimo de maduración, utilizando métodos que preservan la integridad del fruto y garantizan la máxima calidad.",
      features: [
        "Recolección manual por ordeño para aceites premium",
        "Vibradores de tronco de baja intensidad para no dañar el fruto",
        "Procesamiento en menos de 6 horas desde la recolección",
        "Selección rigurosa aceituna por aceituna",
        "Transporte en cajas de plástico alimentario ventiladas",
      ],
      icon: "⏱️",
      color: "amber-600",
      borderColor: "border-amber-600",
      textColor: "text-amber-600",
      bgColor: "bg-amber-600",
      lightBgColor: "bg-amber-50",
      details:
        "La inmediatez en el procesamiento es crucial para preservar los polifenoles y antioxidantes, garantizando un AOVE de perfil sensorial excepcional.",
    },
    {
      title: 'Línea "Herencia" - Tradición Viva',
      description:
        "Mantenemos viva la esencia de Luciano Aureum utilizando su equipamiento original para crear aceites de edición limitada que capturan el alma de nuestra historia.",
      features: [
        "Molino de piedra granítica original de 1923",
        "Prensa de viga de madera de roble",
        "Proceso en frío estricto (<27°C)",
        "Extracción lenta sin aditivos ni conservantes",
        "Ediciones limitadas numeradas y certificadas",
      ],
      icon: "⚱️",
      color: "amber-400",
      borderColor: "border-amber-400",
      textColor: "text-amber-400",
      bgColor: "bg-amber-400",
      lightBgColor: "bg-amber-50",
      details:
        "Cada botella de la línea Herencia es un viaje en el tiempo, ofreciendo un perfil complejo, robusto y con una picanteza intensa que perdura en el paladar.",
    },
    {
      title: 'Línea "Clásica" - Innovación con Alma',
      description:
        "Combinamos la sabiduría tradicional con la tecnología más avanzada para garantizar pureza, consistencia y un perfil sensorial impecable en cada botella.",
      features: [
        "Molinos de martillos de acero inoxidable",
        "Sistema de extracción por centrifugación en frío",
        "Control milimétrico de temperatura y oxigenación",
        "Tanques de acero inoxidable inertizados con nitrógeno",
        "Análisis continuo de parámetros de calidad",
      ],
      icon: "🔬",
      color: "amber-200",
      borderColor: "border-amber-200",
      textColor: "text-amber-200",
      bgColor: "bg-amber-200",
      lightBgColor: "bg-amber-50",
      details:
        "La tecnología nos permite un control preciso que asegura la máxima pureza mientras mantenemos intactos los aromas y propiedades saludables del aceite.",
    },
  ];

  const qualityMetrics = [
    {
      value: "< 0.2%",
      label: "Acidez",
      description: "Muy por debajo del límite legal de 0.8% para AOVE",
      ideal: "0.0% - 0.2%",
      impact: "Indica fruta sana y procesamiento impecable",
    },
    {
      value: "< 10 mEq/kg",
      label: "Peróxidos",
      description: "Oxidación mínima que garantiza frescura óptima",
      ideal: "5 - 10 mEq/kg",
      impact: "Preserva aromas y propiedades nutricionales",
    },
    {
      value: "> 450 mg/kg",
      label: "Polifenoles",
      description: "Niveles excepcionalmente altos de antioxidantes",
      ideal: "450 - 600 mg/kg",
      impact: "Máximos beneficios para la salud y larga conservación",
    },
    {
      value: "K270 < 0.20",
      label: "Absorción UV",
      description: "Pureza y frescura verificadas espectrofotométricamente",
      ideal: "K270 < 0.20",
      impact: "Garantía de aceite no oxidado y de alta calidad",
    },
    {
      value: "> 8.5",
      label: "Panel de Cata",
      description: "Puntuación excelente en análisis sensorial",
      ideal: "≥ 6.5 (mínimo Extra Virgen)",
      impact: "Perfil organoléptico excepcional y libre de defectos",
    },
    {
      value: "< 0.01%",
      label: "Humedad",
      description: "Niveles mínimos que aseguran estabilidad",
      ideal: "< 0.1%",
      impact: "Previene degradación y mantiene propiedades",
    },
  ];

  const certifications = [
    {
      name: "Agricultura Ecológica",
      organization: "UE Reg. 834/2007",
      description:
        "Certificación que garantiza prácticas agrícolas sostenibles sin químicos sintéticos",
      icon: "🌱",
    },
    {
      name: "DOP Valle Escondido",
      organization: "Unión Europea",
      description:
        "Denominación de Origen Protegida que asegura origen y métodos tradicionales",
      icon: "🏞️",
    },
    {
      name: "ISO 9001:2015",
      organization: "International Organization for Standardization",
      description:
        "Sistema de gestión de calidad para procesos consistentes y mejora continua",
      icon: "📊",
    },
    {
      name: "Producción Sostenible",
      organization: "AENOR",
      description:
        "Compromiso verificable con prácticas ambientalmente responsables",
      icon: "♻️",
    },
  ];

  const sensoryProfiles = [
    {
      variety: "Picual 'Selección Familiar'",
      attributes: [
        "Frutado intenso",
        "Amargo equilibrado",
        "Picante elegante",
        "Notas de alcachofa",
        "Hierba recién cortada",
      ],
      pairing: "Ideal para carnes rojas y ensaladas robustas",
      intensity: "Alta",
    },
    {
      variety: "Arbequina 'Del Valle'",
      attributes: [
        "Frutado maduro",
        "Aromas a plátano",
        "Notas de manzana",
        "Picor almendrado",
        "Final dulce",
      ],
      pairing: "Perfecto para pescados y postres",
      intensity: "Media",
    },
    {
      variety: "Hojiblanca 'Esencia'",
      attributes: [
        "Aromas verdes intensos",
        "Hierba fresca",
        "Hoja de olivo",
        "Ligeramente amargo",
        "Frescor persistente",
      ],
      pairing: "Excelente para pan y verduras asadas",
      intensity: "Media-Alta",
    },
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
                  Calidad y Producción
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Donde la excelencia se encuentra con la tradición en cada gota
                </motion.p>
              </div>
            </section>

      {/* Introducción a la Calidad */}
      <SectionWrapper className="py-30 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-amber-900 mb-6">
              La Excelencia como Filosofía
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              En Aureum, la calidad no es un departamento, es una religión que
              impregna cada paso de nuestro proceso. Desde el cuidado de
              nuestros olivos centenarios hasta el envasado final, cada detalle
              está meticulosamente controlado para ofrecerte un Aceite de Oliva
              Virgen Extra que supera los estándares más exigentes.
            </p>
          </motion.div>

          {/* Proceso de Producción Mejorado */}
          <motion.h2
            className="text-4xl font-serif text-center text-amber-900 mb-16 py-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nuestro Proceso Artesanal
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {processData.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl shadow-2xl p-8 border-l-4 ${item.borderColor} hover:shadow-3xl transition-all duration-500`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`text-3xl ${item.textColor}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-serif font-bold ${item.textColor} mb-2`}
                    >
                      {item.title}
                    </h3>
                    <div
                      className={`w-12 h-1 ${item.bgColor} rounded-full`}
                    ></div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {item.description}
                </p>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
                  <p className="text-gray-600 italic">{item.details}</p>
                </div>

                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${item.lightBgColor}`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${item.bgColor}`}
                        ></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Parámetros de Calidad Expandidos */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-amber-900 mb-6">
              Parámetros de Excelencia
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Verificamos rigurosamente cada lote mediante análisis químicos y
              sensoriales que superan los estándares internacionales,
              garantizando un producto de calidad excepcional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-amber-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-amber-800 mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-xl font-serif text-amber-600 mb-3">
                    {metric.label}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {metric.description}
                  </p>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Ideal:</span>
                    <span className="font-semibold text-amber-400">
                      {metric.ideal}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-gray-600">
                    {metric.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfiles Sensoriales */}
      <SectionWrapper className="py-30 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-serif text-center text-amber-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Perfiles Sensoriales
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {sensoryProfiles.map((profile, index) => (
              <motion.div
                key={index}
                className="bg-amber-50 rounded-2xl p-6 border border-amber-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-serif text-amber-800 mb-4">
                  {profile.variety}
                </h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                    Intensidad: {profile.intensity}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Atributos:
                  </h4>
                  <ul className="space-y-1">
                    {profile.attributes.map((attr, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                        {attr}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-amber-600">
                  <strong>Maridaje:</strong> {profile.pairing}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Certificaciones Mejoradas */}
      <SectionWrapper className="py-30 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-amber-900 mb-6">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nuestro compromiso con la calidad y sostenibilidad está avalado
              por las certificaciones más exigentes del sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-green-100"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-green-600">{cert.icon}</div>
                  <div>
                    <h3 className="text-xl font-serif text-green-800 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-green-600 font-medium mb-2">
                      {cert.organization}
                    </p>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Compromiso de Calidad */}
      <section className="py-20 bg-amber-50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif mb-8 text-amber-800">
            Nuestro Compromiso
          </h2>
          <p className="text-xl leading-relaxed mb-8 text-amber-600">
            Cada botella de Aureum representa no solo un aceite de oliva virgen
            extra excepcional, sino un compromiso inquebrantable con la calidad,
            la tradición y la innovación sostenible. Un legado de cuatro
            generaciones que se refleja en cada gota.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-lg italic text-amber-400">
              "La verdadera calidad no se mide solo en parámetros químicos, sino
              en la pasión, el cuidado y el respeto por la tierra que se
              transmite en cada proceso."
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Quality;
