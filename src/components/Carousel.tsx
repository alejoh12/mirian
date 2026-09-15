"use client";

import { useEffect, useState } from "react";

const photos = [
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la foto cada 3 segundos automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-boda-durazno/20 py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 2. VISTA MÓVIL: Una sola foto con recuadro blanco y transición suave */}
        <div className="md:hidden relative w-full max-w-sm mx-auto aspect-square bg-white shadow-sm p-3">
          <div className="relative w-full h-full">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Preboda ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3. VISTA PC: 3 fotos cuadradas con recuadro blanco, estáticas y elegantes */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="bg-white p-3 shadow-sm">
              <img 
                src={photo} 
                alt={`Preboda ${index + 1}`} 
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}








// "use client";

// import { useEffect, useRef } from "react";

// export default function Carousel() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Lógica para que corra siempre a la misma velocidad, de forma infinita
//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;
    
//     let animationId: number;
    
//     const scroll = () => {
//       // Si llega a la mitad (donde termina el primer set de fotos), vuelve a 0 imperceptiblemente
//       if (container.scrollLeft >= container.scrollWidth / 2) {
//         container.scrollLeft = 0;
//       } else {
//         container.scrollLeft += 0.5; // Velocidad constante y suave
//       }
//       animationId = requestAnimationFrame(scroll);
//     };
    
//     animationId = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   // Tus fotos originales
//   const fotos = [
//     "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070",
//     "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
//     "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070"
//   ];
  
  
  
//   const fotosInfinitas = [...fotos, ...fotos];

//   return (
//     <section className="bg-white p-3 pb-8 relative">
      
//       {/* Contenedor de las fotos */}
//       <div 
//         ref={scrollRef}
//         className="flex overflow-hidden gap-3"
//       >
//         {fotosInfinitas.map((foto, index) => (
//           <div key={index} className="shrink-0 w-[55vw] md:w-[30vw] h-[45vh] md:h-[60vh]">
//             <img 
//               src={foto} 
//               alt={`Preboda ${index}`} 
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* BOTÓN DE MÚSICA FLOTANTE */}
//       <button className="fixed bottom-6 right-6 z-50 bg-boda-verde text-white p-4 rounded-full shadow-md hover:scale-105 transition-transform flex items-center justify-center">
//         <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
//           <rect x="5" y="2" width="4" height="20" rx="1" />
//           <rect x="15" y="2" width="4" height="20" rx="1" />
//         </svg>
//       </button>

//     </section>
//   );
// }
