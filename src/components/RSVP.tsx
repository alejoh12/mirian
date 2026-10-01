// export default function RSVP() {
//   return (
//     <section className="bg-[#939F8C] py-24 px-6 flex flex-col items-center text-white text-center">
      
//       {/* Ícono de Carta/Invitación */}
//       <div className="mb-6">
//         <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
//           <rect x="3" y="5" width="18" height="14" rx="2" />
//         </svg>
//       </div>

//       {/* Título Principal */}
//       <h2 className="text-base md:text-lg font-montserrat tracking-[0.3em] uppercase font-bold mb-3">
//         Confirmá tu asistencia
//       </h2>
      
//       {/* Fecha límite */}
//       <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold mb-12">
//         Antes del 8 de noviembre
//       </p>

//       <form className="w-full max-w-[320px] flex flex-col items-center">
        
//         {/* Selector de cantidad de personas */}
//         <div className="w-full flex flex-col items-start mb-6 text-left">
//           <label className="text-[10px] md:text-xs font-montserrat uppercase font-bold tracking-widest mb-2">
//             Número de personas a confirmar
//           </label>
//           <div className="relative w-full">
//             <select className="w-full bg-transparent border-b border-white py-2 text-xs md:text-sm font-bold text-white outline-none appearance-none cursor-pointer">
//               <option className="text-gray-800" value="1">1 persona</option>
//               <option className="text-gray-800" value="2">2 personas</option>
//               <option className="text-gray-800" value="3">3 personas</option>
//               <option className="text-gray-800" value="4">4 personas</option>
//               <option className="text-gray-800" value="5">5 personas</option>
//               <option className="text-gray-800" value="6">6 personas</option>
//               <option className="text-gray-800" value="7">7 personas</option>
//             </select>
//             {/* Flechita del Select */}
//             <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         {/* Tarjeta del Invitado */}
//         <div className="w-full bg-white/10 rounded-sm p-6 text-left flex flex-col gap-6">
          
//           <h3 className="text-xs md:text-sm font-montserrat font-bold tracking-widest uppercase">
//             Invitado 1
//           </h3>

//           {/* Campo Nombre */}
//           <input 
//             type="text" 
//             placeholder="Nombre *" 
//             required
//             className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
//           />

//           {/* Campo Apellido */}
//           <input 
//             type="text" 
//             placeholder="Apellido *" 
//             required
//             className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
//           />

//           {/* Opciones de Asistencia */}
//           <div className="flex flex-col gap-3">
//             <label className="text-[10px] md:text-xs font-montserrat uppercase font-bold tracking-widest">
//               ¿Confirmas tu asistencia? *
//             </label>
//             <label className="flex items-center gap-3 cursor-pointer">
//               <input type="radio" name="asistencia" value="si" className="w-4 h-4 accent-white cursor-pointer" defaultChecked />
//               <span className="text-xs md:text-sm font-bold tracking-wider">¡Confirmo!</span>
//             </label>
//             <label className="flex items-center gap-3 cursor-pointer">
//               <input type="radio" name="asistencia" value="no" className="w-4 h-4 accent-white cursor-pointer" />
//               <span className="text-xs md:text-sm font-bold tracking-wider">No podré asistir</span>
//             </label>
//           </div>

//           {/* Selector de Alimentación */}
//           <div className="flex flex-col items-start w-full">
//             <label className="text-[10px] md:text-xs font-montserrat uppercase font-bold tracking-widest mb-2">
//               ¿Algún requerimiento en la alimentación?
//             </label>
//             <div className="relative w-full">
//               <select className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white outline-none appearance-none cursor-pointer focus:border-white">
//                 <option className="text-gray-800" value="ninguno">Ninguno</option>
//                 <option className="text-gray-800" value="celiaco">Celíaco</option>
//                 <option className="text-gray-800" value="vegetariano">Vegetariano</option>
//                 <option className="text-gray-800" value="vegano">Vegano</option>
//               </select>
//               <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
//                 <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Campo Canción */}
//           <input 
//             type="text" 
//             placeholder="¿Qué canción no puede faltar?" 
//             className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
//           />

//           {/* Botón Submit */}
//           <button 
//             type="submit"
//             className="mt-4 w-full bg-white text-[#939F8C] py-3 text-xs md:text-sm font-montserrat font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
//           >
//             Confirmar
//           </button>
//         </div>
//       </form>

//     </section>
//   );
// }

"use client"; // Esencial porque ahora usamos estados interactivos

import { useState } from "react";

export default function RSVP() {
  // Estados para el selector de CANTIDAD DE PERSONAS
  const [personas, setPersonas] = useState("1 persona");
  const [isOpenPersonas, setIsOpenPersonas] = useState(false);
  const opcionesPersonas = ["1 persona", "2 personas", "3 personas", "4 personas", "5 personas", "6 personas", "7 personas"];

  // Estados para el selector de ALIMENTACIÓN
  const [comida, setComida] = useState("Ninguno");
  const [isOpenComida, setIsOpenComida] = useState(false);
  const opcionesComida = ["Ninguno", "Celíaco", "Vegetariano", "Vegano"];

  return (
    <section className="bg-[#939F8C] py-24 px-6 flex flex-col items-center text-white text-center">
      
      {/* ESTILOS GLOBALES: Scrollbar personalizado súper fino y elegante */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.8);
        }
      `}</style>

      {/* Ícono de Carta/Invitación */}
      <div className="mb-6">
        <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
        </svg>
      </div>

      <h2 className="text-base md:text-lg font-montserrat tracking-[0.3em] uppercase font-bold mb-3">
        Confirmá tu asistencia
      </h2>
      
      <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold mb-12">
        Antes del 8 de noviembre
      </p>

      <form className="w-full max-w-[320px] flex flex-col items-center">
        
        {/* ========================================= */}
        {/* SELECTOR PERSONALIZADO: CANTIDAD DE PERSONAS */}
        {/* ========================================= */}
        <div className="w-full flex flex-col items-start mb-6 text-left relative z-50">
          <label className="text-[10px] md:text-xs font-montserrat uppercase font-bold tracking-widest mb-2">
            Número de personas a confirmar
          </label>
          
          <div className="relative w-full">
            {/* Botón que simula el input */}
            <div 
              onClick={() => {
                setIsOpenPersonas(!isOpenPersonas);
                setIsOpenComida(false); // Cierra el otro select por si estaba abierto
              }}
              className="w-full bg-transparent border-b border-white py-2 text-xs md:text-sm font-bold text-white cursor-pointer flex justify-between items-center transition-colors hover:border-white/70"
            >
              <span>{personas}</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isOpenPersonas ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            {/* Lista Desplegable Estilizada */}
            {isOpenPersonas && (
              <div className="absolute top-full left-0 w-full mt-1 bg-[#939F8C] border border-white/50 rounded-sm shadow-2xl max-h-48 overflow-y-auto custom-scrollbar">
                {opcionesPersonas.map((opcion, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      setPersonas(opcion);
                      setIsOpenPersonas(false);
                    }}
                    className="px-4 py-3 text-xs md:text-sm font-bold text-white hover:bg-white/20 cursor-pointer border-b border-white/10 last:border-0 transition-colors"
                  >
                    {opcion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>


        {/* Tarjeta del Invitado */}
        <div className="w-full bg-white/10 rounded-sm p-6 text-left flex flex-col gap-6 relative z-10">
          
          <h3 className="text-xs md:text-sm font-montserrat font-bold tracking-widest uppercase">
            Invitado/a
          </h3>

          <input 
            type="text" 
            placeholder="Nombre *" 
            required
            className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
          />

          <input 
            type="text" 
            placeholder="Apellido *" 
            required
            className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
          />

          <div className="flex flex-col gap-3">
            <label className="text-[10px] md:text-xs font-montserrat uppercase font-bold tracking-widest">
              ¿Confirmas tu asistencia? *
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="asistencia" value="si" className="w-4 h-4 accent-white cursor-pointer" defaultChecked />
              <span className="text-xs md:text-sm font-bold tracking-wider">¡Confirmo!</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="asistencia" value="no" className="w-4 h-4 accent-white cursor-pointer" />
              <span className="text-xs md:text-sm font-bold tracking-wider">No podré asistir</span>
            </label>
          </div>

          <input 
            type="text" 
            placeholder="¿Qué canción no puede faltar?" 
            className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
          />

          <button 
            type="submit"
            className="mt-4 w-full bg-white text-[#939F8C] py-3 text-xs md:text-sm font-montserrat font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
          >
            Confirmar
          </button>
        </div>
      </form>
    </section>
  );
}