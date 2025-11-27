"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
// Importamos los iconos de Lucide
import { Check, Leaf } from "lucide-react"; 

export function FamilyGenerationsExpandable() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const familyGenerations = [
    {
      name: "Alejandro Aureum",
      period: "1923-1955",
      role: "Fundador",
      contribution: "Estableció los cimientos con visión de calidad excepcional y conexión espiritual con la tierra.",
      image: "/images/rupe.png",
      fullContent: () => (
        <div className="space-y-4">
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              Alejandro Aureum, un joven agricultor con una conexión espiritual con la tierra, 
              heredó de su abuelo un pequeño olivar en "El Valle Escondido". Tras una devastadora 
              helada, decidió que no bastaba con producir, sino que había que hacerlo con una 
              calidad que desafiara al tiempo.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                {/* Reemplazo de ✓ por Check */}
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Fundación de Aureum</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Molino de piedra y prensa de viga</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Filosofía de calidad excepcional</span>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Antonio Aureum",
      period: "1955-1975",
      role: "Segunda Generación",
      contribution: "Mantuvo y perfeccionó las técnicas tradicionales expandiendo la producción.",
      image: "/images/antuan.png",
      fullContent: () => (
        <div className="space-y-4">
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              Antonio Aureum, hijo de Alejandro, continuó con el legado familiar manteniendo las 
              técnicas tradicionales mientras expandía cuidadosamente la producción. Su enfoque 
              meticuloso aseguró que la calidad nunca se comprometiera durante el crecimiento.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Expansión controlada de olivares</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Perfeccionamiento de técnicas ancestrales</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Establecimiento de estándares de calidad</span>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Juan Carlos Aureum",
      period: "1975-2000",
      role: "Tercera Generación",
      contribution: "Transformó el negocio familiar en marca internacional con diseño icónico.",
      image: "/images/juanca.png",
      fullContent: () => (
        <div className="space-y-4">
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              Juan Carlos Aureum, nieta visionaria de Alejandro, combinó la sabiduría ancestral con 
              una visión comercial moderna. Bajo su liderazgo, Aureum dio el gran salto 
              comercial posicionándose como sinónimo de lujo y autenticidad.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Registro oficial de la marca</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Diseño del envase icónico</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Primeras exportaciones a Europa</span>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Jose Aureum",
      period: "2000-Actualidad",
      role: "Cuarta Generación",
      contribution: "Combina tradición con innovación sostenible y certificaciones ecológicas.",
      image: "/images/joseantuan.png",
      fullContent: () => (
        <div className="space-y-4">
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-amber-800 leading-relaxed">
              Jose Aureum, bisnieto del fundador, mantiene viva la esencia de los orígenes 
              mientras incorpora innovación sostenible y tecnología de vanguardia. Su liderazgo 
              asegura que Aureum honre el pasado mientras abraza el futuro.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Agricultura ecológica certificada</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Denominación de Origen Protegida</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-colors">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-amber-700 text-sm">Innovación tecnológica sostenible</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/40 h-full w-full z-50"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            
            <button
              className="flex absolute top-4 right-4 lg:top-8 lg:right-8 items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg z-10 hover:bg-amber-50 transition-colors"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </button>
            
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl h-full md:h-[90vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Imagen superior */}
              <div
                className="relative h-64 md:h-80 w-full"
              >
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover object-[50%_43%]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div 
                  className="w-full h-full bg-amber-100 flex items-center justify-center text-amber-600 text-6xl hidden"
                >
                  {active.name.charAt(0)}
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col p-6 md:p-8 overflow-hidden">
                <div className="flex-1 overflow-auto">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 
                      className="text-2xl md:text-3xl font-serif font-bold text-amber-800 mb-2"
                    >
                      {active.name}
                    </h3>
                    <div 
                      className="text-amber-600 font-semibold text-lg mb-1"
                    >
                      {active.period}
                    </div>
                    <div
                      className="text-amber-500 font-medium text-md mb-4"
                    >
                      {active.role}
                    </div>
                  </div>

                  {/* Contenido expandido */}
                  <div
                    className="text-amber-800 space-y-6"
                  >
                    {active.fullContent()}
                  </div>
                </div>

                {/* Contribución resumen */}
                <div
                  className="mt-6 pt-6 border-t border-amber-200"
                >
                  <p className="text-amber-700 text-sm leading-relaxed">
                    {active.contribution}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Grid de tarjetas */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {familyGenerations.map((member, index) => (
          <motion.div
            layoutId={`card-${member.name}-${id}`} 
            key={`card-${member.name}-${id}`}
            onClick={() => setActive(member)}
            className="bg-white rounded-xl p-6 text-center shadow-lg border border-amber-200 cursor-pointer hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Imagen circular */}
            <motion.div 
              layoutId={`image-${member.name}-${id}`}
              className="relative mb-4"
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-amber-200 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div 
                  className="w-full h-full bg-amber-100 flex items-center justify-center text-amber-600 text-4xl hidden"
                >
                  {member.name.charAt(0)}
                </div>
              </div>
            </motion.div>
            
            {/* Elementos internos */}
            <motion.h3
              layoutId={`title-${member.name}-${id}`}
              className="text-xl font-serif text-amber-800 mb-2"
            >
              {member.name}
            </motion.h3>
            <motion.div
              layoutId={`period-${member.period}-${id}`}
              className="text-amber-600 font-semibold mb-1"
            >
              {member.period}
            </motion.div>
            <motion.div
              layoutId={`role-${member.role}-${id}`}
              className="text-amber-500 font-medium mb-4"
            >
              {member.role}
            </motion.div>
            <motion.p
              layoutId={`contribution-${member.contribution}-${id}`}
              className="text-gray-700 text-sm leading-relaxed"
            >
              {member.contribution}
            </motion.p>

            <motion.div
              className="mt-4 pt-4 border-t border-amber-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-amber-600 text-sm font-medium">
                Haz click para más información
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-amber-800"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};