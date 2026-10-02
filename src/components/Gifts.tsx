"use client";

import { useState } from "react";

export default function Gifts() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiado, setCopiado] = useState("");

  // Función para copiar datos fácilmente
  const copiarDato = (texto: string, campo: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(campo);
    setTimeout(() => setCopiado(""), 2000);
  };

  return (
    <>
      {/* SECCIÓN PRINCIPAL */}
      <section className="bg-[#FAFAFA] py-24 px-6 md:px-12 flex flex-col items-center text-center text-[#374151]" id="regalos">
        
        {/* Ícono de Regalo */}
        <div className="mb-6 opacity-80">
          <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 12 20 22 4 22 4 12"></polyline>
            <rect x="2" y="7" width="20" height="5"></rect>
            <line x1="12" y1="22" x2="12" y2="7"></line>
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
          </svg>
        </div>

        <h2 className="text-2xl md:text-xl font-montserrat tracking-[0.25em] uppercase mb-6 opacity-70">
          Regalos
        </h2>
        
        <p className="text-sm md:text-sm font-montserrat tracking-[0.15em] uppercase leading-relaxed max-w-lg mb-10 opacity-70">
          Nuestro mejor regalo es que estés con nosotros en nuestro día, pero si quieres hacernos un obsequio, aquí está nuestra cuenta
        </p>

        <button 
          onClick={() => setIsOpen(true)}
          className="border border-[#374151]/50 py-3 px-8 text-xs md:text-sm font-montserrat tracking-widest uppercase hover:bg-[#374151] hover:text-white transition-all duration-300"
        >
          Ver cuenta
        </button>
      </section>

      {/* VENTANA EMERGENTE (MODAL) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)} // <-- AGREGADO: Cierra al tocar el fondo oscuro
        >
          
          {/* Contenedor del Modal */}
          <div 
            className="relative w-full max-w-sm bg-[#939F8C] p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // <-- AGREGADO: Frena el clic para que no se cierre al tocar la tarjeta
          >
            
            {/* Botón Cerrar (X) por fuera del borde interno */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 md:-right-12 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Borde interno blanco estilo tarjeta */}
            <div className="border border-white/50 p-8 flex flex-col items-center text-center text-white">
              
              {/* Ícono interno */}
              <div className="mb-4">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                  <rect x="2" y="7" width="20" height="5"></rect>
                  <line x1="12" y1="22" x2="12" y2="7"></line>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
              </div>

              <h3 className="text-base md:text-lg font-montserrat tracking-[0.25em] uppercase font-bold mb-8">
                Regalos
              </h3>

              {/* Lista de Datos Bancarios */}
              <div className="flex flex-col gap-5 w-full font-montserrat text-sm md:text-sm tracking-widest uppercase">
                
                <div>
                  <p className="font-bold mb-1">Titular:</p>
                  <p className="opacity-90">Mirian Lourdes Herrera</p>
                </div>

                {/* Alias (Click para copiar) */}
                <div 
                  onClick={() => copiarDato("mirmig2026", "alias")}
                  className="cursor-pointer group relative"
                  title="Haz clic para copiar"
                >
                  <p className="font-bold mb-1 group-hover:text-[#D4AF37] transition-colors">Alias:</p>
                  <p className="opacity-90 group-hover:text-[#D4AF37] transition-colors">mirmig2026</p>
                  {copiado === "alias" && <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[10px] text-green-300 bg-black/50 px-2 py-1 rounded">¡Copiado!</span>}
                </div>

                {/* CBU (Click para copiar) */}
                <div 
                  onClick={() => copiarDato("4530000800012633916045", "cbu")}
                  className="cursor-pointer group relative"
                  title="Haz clic para copiar"
                >
                  <p className="font-bold mb-1 group-hover:text-[#D4AF37] transition-colors">CBU:</p>
                  <p className="opacity-90 break-all group-hover:text-[#D4AF37] transition-colors">4530000800012633916045</p>
                  {copiado === "cbu" && <span className="absolute -right-2 top-1/2 -translate-y-1/2 text-[10px] text-green-300 bg-black/50 px-2 py-1 rounded">¡Copiado!</span>}
                </div>

                <div>
                  <p className="font-bold mb-1">CUIL:</p>
                  <p className="opacity-90">27414956314</p>
                </div>

                <div>
                  <p className="font-bold mb-1">Cuenta:</p>
                  <p className="opacity-90 leading-relaxed">Caja de ahorro en pesos<br/>1263391604</p>
                </div>

                <div>
                  <p className="font-bold mb-1">Entidad:</p>
                  <p className="opacity-90">Naranja X</p>
                </div>

              </div>
              
              <p className="mt-8 text-[13px] opacity-45 normal-case tracking-normal">
                (Toca el Alias o el CBU para copiarlos)
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}