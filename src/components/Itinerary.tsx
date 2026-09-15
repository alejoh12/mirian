// export default function Itinerary() {
//   const events = [
//     {
//       id: 1,
//       title: "CIVIL",
//       date: "21 DE ABRIL 2027",
//       time: "09:00 HS",
//       mapUrl: "#", // Reemplazar con el link de Google Maps real
//       icon: (
//         // Aumentamos el grosor (strokeWidth="1") y el tamaño para que se vea perfecto
//         <svg className="w-12 h-12 md:w-14 md:h-14 text-[#a3a3a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//           {/* Vestido */}
//           <path d="M9 4c-1 0-2 1-2 2l-3 14h8l-3-14c0-1-1-2-2-2z" />
//           {/* Traje */}
//           <path d="M15 4c1 0 2 1 2 2l3 14h-8l3-14c0-1 1-2 2-2z" />
//           <path d="M14 6l3 5 3-5" />
//         </svg>
//       )
//     },
//     {
//       id: 2,
//       title: "IGLESIA",
//       date: "21 DE ABRIL DE 2027", 
//       time: "11:00 HS",
//       mapUrl: "#",
//       icon: (
//         <svg className="w-12 h-12 md:w-14 md:h-14 text-[#a3a3a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M12 2v5" />
//           <path d="M10 4h4" />
//           <path d="M12 7l-6 6v9h12v-9l-6-6z" />
//           <path d="M10 22v-4h4v4" />
//         </svg>
//       )
//     },
//     {
//       id: 3,
//       title: "FIESTA",
//       date: "24 DE ABRIL 2027",
//       time: "19:00 HS",
//       mapUrl: "#",
//       icon: (
//         <svg className="w-12 h-12 md:w-14 md:h-14 text-[#a3a3a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="12" cy="12" r="8" />
//           <path d="M12 4v16" />
//           <path d="M8 4.5c1.5 4.5 1.5 10.5 0 15" />
//           <path d="M16 4.5c-1.5 4.5-1.5 10.5 0 15" />
//           <path d="M4 12h16" />
//           <path d="M4.5 8c4.5 1.5 10.5 1.5 15 0" />
//           <path d="M4.5 16c4.5-1.5 10.5-1.5 15 0" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <section className="bg-white py-16 px-6 text-center">
      
//       {/* ACÁ ESTÁ EL CAMBIO: El recuadro tipo tarjeta con fondo gris muy suave */}
//       <div className="relative w-full max-w-[320px] mx-auto bg-[#F7F7F7] border border-[#e0e0e0] py-14">
        
//         {/* LÍNEA VERTICAL CENTRAL (Pasa por detrás de todo) */}
//         <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-[#e0e0e0] z-0"></div>

//         {/* BLOQUE DEL TÍTULO: Usamos bg-[#F7F7F7] para tapar la línea y fusionarse con la tarjeta */}
//         <div className="relative z-10 flex flex-col items-center bg-[#F7F7F7] py-2 mb-10">
//           <div className="w-24 h-[1px] bg-[#d1d1d1] mb-5"></div>
//           <h2 className="text-xs md:text-sm font-montserrat tracking-[0.4em] text-[#a3a3a3] uppercase font-medium px-4">
//             Itinerario
//           </h2>
//           <div className="w-24 h-[1px] bg-[#d1d1d1] mt-5"></div>
//         </div>

//         {/* BLOQUES DE EVENTOS */}
//         <div className="flex flex-col items-center">
//           {events.map((event, index) => (
//             <div 
//               key={event.id} 
//               // bg-[#F7F7F7] acá tapa la línea vertical justo donde está el contenido
//               className={`relative z-10 flex flex-col items-center bg-[#F7F7F7] py-3 ${index !== events.length - 1 ? 'mb-8' : ''} w-full`}
//             >
              
//               <div className="mb-4 bg-[#F7F7F7] px-4">
//                 {event.icon}
//               </div>
              
//               <h3 className="text-sm md:text-base tracking-[0.3em] font-montserrat uppercase font-medium text-[#8c8c8c] mb-2">
//                 {event.title}
//               </h3>
              
//               <p className="text-[10px] md:text-xs tracking-[0.25em] font-montserrat uppercase font-light text-[#a3a3a3] mb-1">
//                 {event.date}
//               </p>
              
//               <p className="text-[10px] md:text-xs tracking-[0.25em] font-montserrat uppercase font-light text-[#a3a3a3] mb-5">
//                 {event.time}
//               </p>
              
//               <a 
//                 href={event.mapUrl} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 // El fondo del botón es transparente para que tome el color de la tarjeta
//                 className="px-8 py-2.5 border border-[#d1d1d1] text-[#a3a3a3] text-[10px] md:text-xs tracking-[0.3em] uppercase bg-transparent hover:bg-white transition-colors"
//               >
//                 Cómo llegar
//               </a>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

export default function Itinerary() {
  const events = [
    {
      id: 1,
      title: "CIVIL",
      date: "21 DE ABRIL 2027",
      time: "09:00 HS",
      mapUrl: "#", // Reemplazar con el link de Google Maps real
      icon: (
        // Aumentamos el grosor (strokeWidth="1") y el tamaño para que se vea perfecto
        <svg className="w-12 h-12 md:w-14 md:h-14 text-[#a3a3a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          {/* Vestido */}
          <path d="M9 4c-1 0-2 1-2 2l-3 14h8l-3-14c0-1-1-2-2-2z" />
          {/* Traje */}
          <path d="M15 4c1 0 2 1 2 2l3 14h-8l3-14c0-1 1-2 2-2z" />
          <path d="M14 6l3 5 3-5" />
        </svg>
      )
    },
    {
      id: 2,
      title: "IGLESIA",
      date: "21 DE ABRIL DE 2027", 
      time: "11:00 HS",
      mapUrl: "#",
      icon: (
        <svg className="w-12 h-12 md:w-14 md:h-14 text-[#a3a3a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v5" />
          <path d="M10 4h4" />
          <path d="M12 7l-6 6v9h12v-9l-6-6z" />
          <path d="M10 22v-4h4v4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "FIESTA",
      date: "24 DE ABRIL 2027",
      time: "19:00 HS",
      mapUrl: "#",
      icon: (
        <svg className="w-12 h-12 md:w-14 md:h-14 text-[#a3a3a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16" />
          <path d="M8 4.5c1.5 4.5 1.5 10.5 0 15" />
          <path d="M16 4.5c-1.5 4.5-1.5 10.5 0 15" />
          <path d="M4 12h16" />
          <path d="M4.5 8c4.5 1.5 10.5 1.5 15 0" />
          <path d="M4.5 16c4.5-1.5 10.5-1.5 15 0" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-16 px-6 text-center">
      
      {/* ANIMACIÓN: Movimiento suave hacia arriba y abajo */}
      <style>{`
        @keyframes suave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-suave {
          animation: suave 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Recuadro tipo tarjeta con fondo gris muy suave */}
      <div className="relative w-full max-w-[320px] mx-auto bg-[#F7F7F7] border border-[#e0e0e0] py-14">
        
        {/* LÍNEA VERTICAL CENTRAL */}
        <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-[#e0e0e0] z-0"></div>

        {/* BLOQUE DEL TÍTULO */}
        <div className="relative z-10 flex flex-col items-center bg-[#F7F7F7] py-2 mb-10">
          <div className="w-24 h-[1px] bg-[#d1d1d1] mb-5"></div>
          {/* TÍTULO EN BOLD Y MÁS GRANDE */}
          <h2 className="text-sm md:text-base font-montserrat tracking-[0.4em] text-[#a3a3a3] uppercase font-bold px-4">
            Itinerario
          </h2>
          <div className="w-24 h-[1px] bg-[#d1d1d1] mt-5"></div>
        </div>

        {/* BLOQUES DE EVENTOS */}
        <div className="flex flex-col items-center">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`relative z-10 flex flex-col items-center bg-[#F7F7F7] py-3 ${index !== events.length - 1 ? 'mb-8' : ''} w-full`}
            >
              
              <div className="mb-4 bg-[#F7F7F7] px-4 animate-suave">
                {event.icon}
              </div>
              
              {/* NOMBRE DEL EVENTO EN BOLD */}
              <h3 className="text-base md:text-lg tracking-[0.3em] font-montserrat uppercase font-bold text-[#8c8c8c] mb-2">
                {event.title}
              </h3>
              
              {/* FECHA EN BOLD Y MÁS GRANDE */}
              <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold text-[#a3a3a3] mb-1">
                {event.date}
              </p>
              
              {/* HORA EN BOLD Y MÁS GRANDE */}
              <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold text-[#a3a3a3] mb-5">
                {event.time}
              </p>
              
              {/* BOTÓN EN BOLD Y MÁS GRANDE */}
              <a 
                href={event.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-2.5 border border-[#d1d1d1] text-[#a3a3a3] text-xs md:text-sm font-bold tracking-[0.3em] uppercase bg-transparent hover:bg-white transition-colors"
              >
                Cómo llegar
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}