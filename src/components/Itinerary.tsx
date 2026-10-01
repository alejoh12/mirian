"use client";

import { useState } from "react";

export default function Itinerary() {
  // Estado para controlar qué mapa está abierto. Si es null, el modal está cerrado.
  const [activeMap, setActiveMap] = useState<string | null>(null);

  const events = [
    {
      id: 1,
      title: "CIVIL",
      date: "19 DE NOVIEMBRE 2026",
      time: "11:00 HS",
      // IMPORTANTE: Acá va el link que sale de Google Maps -> Compartir -> Insertar un mapa -> src="..."
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.545178374969!2d-65.45758219999999!3d-27.3899163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423b98860fa1c39%3A0xd20eed872303c683!2sComuna%20de%20SANTA%20CRUZ%20Y%20LA%20TUNA!5e0!3m2!1ses!2sar!4v1790825489060!5m2!1ses!2sar", 
      icon: (
        <svg className="w-12 h-12 md:w-14 md:h-14 text-[#a3a3a3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 4c-1 0-2 1-2 2l-3 14h8l-3-14c0-1-1-2-2-2z" />
          <path d="M15 4c1 0 2 1 2 2l3 14h-8l3-14c0-1 1-2 2-2z" />
          <path d="M14 6l3 5 3-5" />
        </svg>
      )
    },
    {
      id: 2,
      title: "IGLESIA",
      date: "21 DE NOVIEMBRE DE 2026", 
      time: "21:00 HS",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.7663786180688!2d-65.4536512!3d-27.320499200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423b7ad6c7cc3dd%3A0x3543fb3a4728be43!2sCapilla%20Nuestra%20Se%C3%B1ora%20de%20Loudes!5e0!3m2!1ses!2sar!4v1790825011430!5m2!1ses!2sar",
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
      date: "21 DE NOVIEMBRE 2026",
      time: "22:30 HS",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.7663786180688!2d-65.4536512!3d-27.320499200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423b7ad6c7cc3dd%3A0x3543fb3a4728be43!2sCapilla%20Nuestra%20Se%C3%B1ora%20de%20Loudes!5e0!3m2!1ses!2sar!4v1790825011430!5m2!1ses!2sar",
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
      
      <style>{`
        @keyframes suave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-suave {
          animation: suave 3.5s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>

      <div className="relative w-full max-w-[320px] mx-auto bg-[#F7F7F7] border border-[#e0e0e0] py-14">
        
        <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-[#e0e0e0] z-0"></div>

        <div className="relative z-10 flex flex-col items-center bg-[#F7F7F7] py-2 mb-10">
          <div className="w-24 h-[1px] bg-[#d1d1d1] mb-5"></div>
          <h2 className="text-sm md:text-base font-montserrat tracking-[0.4em] text-[#a3a3a3] uppercase font-bold px-4">
            Itinerario
          </h2>
          <div className="w-24 h-[1px] bg-[#d1d1d1] mt-5"></div>
        </div>

        <div className="flex flex-col items-center">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`relative z-10 flex flex-col items-center bg-[#F7F7F7] py-3 ${index !== events.length - 1 ? 'mb-8' : ''} w-full`}
            >
              
              <div className="mb-4 bg-[#F7F7F7] px-4 animate-suave">
                {event.icon}
              </div>
              
              <h3 className="text-base md:text-lg tracking-[0.3em] font-montserrat uppercase font-bold text-[#8c8c8c] mb-2">
                {event.title}
              </h3>
              
              <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold text-[#a3a3a3] mb-1">
                {event.date}
              </p>
              
              <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold text-[#a3a3a3] mb-5">
                {event.time}
              </p>
              
              {/* BOTÓN ACTUALIZADO: Ahora setea el mapa activo en lugar de redirigir */}
              <button 
                onClick={() => setActiveMap(event.embedUrl)}
                className="px-8 py-2.5 border border-[#d1d1d1] text-[#a3a3a3] text-xs md:text-sm font-bold tracking-[0.3em] uppercase bg-transparent hover:bg-white transition-colors"
              >
                Cómo llegar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL EMERGENTE DE GOOGLE MAPS */}
      {activeMap && (
        <div 
          // 1. Agregamos el onClick al fondo oscuro para que cierre el mapa al tocar afuera
          onClick={() => setActiveMap(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 cursor-pointer"
        >
          <div 
            // 2. Frenamos el clic acá para que tocar el mapa o el recuadro blanco no cierre la ventana
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-2xl animate-fade-in cursor-auto"
          >
            
            {/* Botón de cerrar (X) flotante */}
            <button
              onClick={() => setActiveMap(null)}
              className="absolute top-3 right-3 z-10 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Cerrar mapa"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mapa inyectado vía Iframe */}
            <iframe
              src={activeMap}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full bg-gray-100"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
}