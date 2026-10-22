"use client";

import { useEffect, useState } from "react";

const photos = [
  "/M06.webp",
  "/M07.webp",
  "/M08.webp",
];

export default function CarouselSecond() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la foto cada 3 segundos automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-boda-durazno/20 pt-16 pb-13 relative">
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