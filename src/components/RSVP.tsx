// "use client"; // Esencial porque ahora usamos estados interactivos

// import { useState } from "react";

// export default function RSVP() {
//   // Estados para el selector de CANTIDAD DE PERSONAS
//   const [personas, setPersonas] = useState("1 persona");
//   const [isOpenPersonas, setIsOpenPersonas] = useState(false);
//   const opcionesPersonas = ["1 persona", "2 personas", "3 personas", "4 personas", "5 personas", "6 personas", "7 personas"];

//   // Estados para el selector de ALIMENTACIÓN
//   const [comida, setComida] = useState("Ninguno");
//   const [isOpenComida, setIsOpenComida] = useState(false);
//   const opcionesComida = ["Ninguno", "Celíaco", "Vegetariano", "Vegano"];

//   return (
//     <section className="bg-[#939F8C] py-24 px-6 flex flex-col items-center text-white text-center">

//       {/* ESTILOS GLOBALES: Scrollbar personalizado súper fino y elegante */}
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(255, 255, 255, 0.5);
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(255, 255, 255, 0.8);
//         }
//       `}</style>

//       {/* Ícono de Carta/Invitación */}
//       <div className="mb-6">
//         <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
//           <rect x="3" y="5" width="18" height="14" rx="2" />
//         </svg>
//       </div>

//       <h2 className="text-base md:text-lg font-montserrat tracking-[0.3em] uppercase font-bold mb-3">
//         Confirmá tu asistencia
//       </h2>

//       <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold mb-12">
//         Antes del 8 de noviembre
//       </p>

//       <form className="w-full max-w-[320px] flex flex-col items-center">

//         {/* ========================================= */}
//         {/* SELECTOR PERSONALIZADO: CANTIDAD DE PERSONAS */}
//         {/* ========================================= */}
//         <div className="w-full flex flex-col items-start mb-6 text-left relative z-50">
//           <label className="text-[10px] md:text-xs font-montserrat uppercase font-bold tracking-widest mb-2">
//             Número de personas a confirmar
//           </label>

//           <div className="relative w-full">
//             {/* Botón que simula el input */}
//             <div
//               onClick={() => {
//                 setIsOpenPersonas(!isOpenPersonas);
//                 setIsOpenComida(false); // Cierra el otro select por si estaba abierto
//               }}
//               className="w-full bg-transparent border-b border-white py-2 text-xs md:text-sm font-bold text-white cursor-pointer flex justify-between items-center transition-colors hover:border-white/70"
//             >
//               <span>{personas}</span>
//               <svg className={`w-4 h-4 transition-transform duration-300 ${isOpenPersonas ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </div>

//             {/* Lista Desplegable Estilizada */}
//             {isOpenPersonas && (
//               <div className="absolute top-full left-0 w-full mt-1 bg-[#939F8C] border border-white/50 rounded-sm shadow-2xl max-h-48 overflow-y-auto custom-scrollbar">
//                 {opcionesPersonas.map((opcion, index) => (
//                   <div
//                     key={index}
//                     onClick={() => {
//                       setPersonas(opcion);
//                       setIsOpenPersonas(false);
//                     }}
//                     className="px-4 py-3 text-xs md:text-sm font-bold text-white hover:bg-white/20 cursor-pointer border-b border-white/10 last:border-0 transition-colors"
//                   >
//                     {opcion}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Tarjeta del Invitado */}
//         <div className="w-full bg-white/10 rounded-sm p-6 text-left flex flex-col gap-6 relative z-10">

//           <h3 className="text-xs md:text-sm font-montserrat font-bold tracking-widest uppercase">
//             Invitado/a
//           </h3>

//           <input
//             type="text"
//             placeholder="Nombre *"
//             required
//             className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
//           />

//           <input
//             type="text"
//             placeholder="Apellido *"
//             required
//             className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
//           />

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

//           <input
//             type="text"
//             placeholder="¿Qué canción no puede faltar?"
//             className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
//           />

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

"use client";

import { useState } from "react";

export default function RSVP() {
  const [personas, setPersonas] = useState("1 persona");
  const [isOpenPersonas, setIsOpenPersonas] = useState(false);
  const opcionesPersonas = ["1 persona", "2 personas", "3 personas", "4 personas", "5 personas", "6 personas", "7 personas"];

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [asistencia, setAsistencia] = useState("si");
  const [cancion, setCancion] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsSubmitting(true);

    const datosInvitado = { nombre, apellido, personas, asistencia, cancion };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosInvitado),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Hubo un problema al enviar. Por favor, intentá de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión al servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#939F8C] py-24 px-4 md:px-12 flex flex-col items-center text-white text-center" id="rsvp">
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.5); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.8); }
      `}</style>

      {/* Ícono */}
      <div className="mb-6">
        <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
        </svg>
      </div>

      <h2 className="text-2xl md:text-2xl font-montserrat tracking-[0.2em] uppercase font-bold mb-4">
        Confirmá tu asistencia
      </h2>
      
      <p className="text-sm md:text-base tracking-[0.15em] font-montserrat uppercase font-semibold mb-12">
        Antes del 8 de noviembre
      </p>

      {/* LÓGICA CONDICIONAL: Cartel de éxito o Formulario */}
      {isSuccess ? (
        <div className="w-full max-w-md bg-white/10 rounded-md p-10 text-center animate-fade-in border border-white/20">
          <svg className="w-20 h-20 mx-auto mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg md:text-xl font-montserrat font-bold tracking-widest uppercase mb-3">
            ¡Gracias!
          </h3>
          <p className="text-sm md:text-base font-montserrat tracking-[0.1em] uppercase opacity-90">
            Tu respuesta fue enviada exitosamente.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
          
          {/* SELECTOR: CANTIDAD DE PERSONAS */}
          <div className="w-full flex flex-col items-start mb-10 text-left relative z-50">
            <label className="text-sm md:text-sm font-montserrat uppercase font-bold tracking-widest mb-3 opacity-90">
              Número de personas a confirmar
            </label>
            <div className="relative w-full">
              <div 
                onClick={() => setIsOpenPersonas(!isOpenPersonas)}
                className="w-full bg-transparent border-b border-white py-3 text-base md:text-lg font-bold text-white cursor-pointer flex justify-between items-center transition-colors hover:border-white/70"
              >
                <span>{personas}</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${isOpenPersonas ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {isOpenPersonas && (
                <div className="absolute top-full left-0 w-full mt-1 bg-[#939F8C] border border-white/50 rounded-sm shadow-2xl max-h-56 overflow-y-auto custom-scrollbar">
                  {opcionesPersonas.map((opcion, index) => (
                    <div 
                      key={index}
                      onClick={() => { setPersonas(opcion); setIsOpenPersonas(false); }}
                      className="px-5 py-4 text-base md:text-lg font-bold text-white hover:bg-white/20 cursor-pointer border-b border-white/10 last:border-0 transition-colors"
                    >
                      {opcion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* TARJETA DEL INVITADO */}
          <div className="w-full bg-white/10 rounded-md p-8 md:p-10 text-left flex flex-col gap-8 relative z-10 border border-white/20">
            <h3 className="text-sm md:text-base font-montserrat font-bold tracking-widest uppercase opacity-90">
              Invitado/a
            </h3>

            <input 
              type="text" 
              placeholder="Nombre *" 
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full bg-transparent border-b border-white/60 py-3 text-base md:text-lg font-bold text-white placeholder-white/70 outline-none focus:border-white transition-colors"
            />

            <input 
              type="text" 
              placeholder="Apellido *" 
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full bg-transparent border-b border-white/60 py-3 text-base md:text-lg font-bold text-white placeholder-white/70 outline-none focus:border-white transition-colors"
            />

            <div className="flex flex-col gap-4 mt-2">
              <label className="text-sm md:text-sm font-montserrat uppercase font-bold tracking-widest opacity-90">
                ¿Confirmas tu asistencia? *
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input 
                  type="radio" 
                  name="asistencia" 
                  value="si"
                  checked={asistencia === "si"}
                  onChange={(e) => setAsistencia(e.target.value)}
                  className="w-5 h-5 accent-white cursor-pointer" 
                />
                <span className="text-base md:text-lg font-bold tracking-wider">¡Confirmo!</span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input 
                  type="radio" 
                  name="asistencia" 
                  value="no" 
                  checked={asistencia === "no"}
                  onChange={(e) => setAsistencia(e.target.value)}
                  className="w-5 h-5 accent-white cursor-pointer" 
                />
                <span className="text-base md:text-lg font-bold tracking-wider">No podré asistir</span>
              </label>
            </div>

            <input 
              type="text" 
              placeholder="¿Qué canción no puede faltar?" 
              value={cancion}
              onChange={(e) => setCancion(e.target.value)}
              className="w-full bg-transparent border-b border-white/60 py-3 text-base md:text-lg font-bold text-white placeholder-white/70 outline-none focus:border-white transition-colors mt-2"
            />

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 w-full bg-white text-[#939F8C] py-4 text-sm md:text-base font-montserrat font-bold uppercase tracking-widest transition-colors rounded-sm shadow-md ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Confirmar'}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}