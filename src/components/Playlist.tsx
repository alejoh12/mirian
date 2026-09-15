export default function Playlist() {
  return (
    <section className="bg-white py-24 px-6 text-center flex flex-col items-center">
      
      {/* 🎵 Animación CSS suave (la misma que usamos en el itinerario) */}
      <style>{`
        @keyframes suave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-suave {
          animation: suave 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Ícono de Música con movimiento suave */}
      <div className="mb-6 animate-suave text-[#a3a3a3]">
        <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </div>

      {/* Título en bold y grande */}
      <h2 className="text-base md:text-lg font-montserrat tracking-[0.35em] uppercase font-bold text-[#a3a3a3] mb-4">
        Bailemos Juntos
      </h2>
      
      {/* Texto descriptivo en bold para lectura fácil */}
      <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold text-[#a3a3a3] leading-loose mb-10 max-w-[280px] md:max-w-[320px]">
        Queremos disfrutar juntos de la mejor música, por lo que te pedimos sumar tu tema a nuestra playlist
      </p>
      
      {/* Botón hacia Spotify (con link incluido) */}
      <a 
        href="https://open.spotify.com/playlist/2ogJinDtluQ9ZOpxGDuCCd?si=RgqRnJawSZaoTPsQDTwFRA&utm_source=copy-link&pt=7bd682cc61e92760e7d12694ab55b494&pi=xqICbRdORQyYt" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-8 py-3 border border-[#d1d1d1] text-[#a3a3a3] text-xs md:text-sm font-bold tracking-[0.3em] uppercase bg-transparent hover:bg-gray-50 transition-colors"
      >
        Playlist
        {/* Ícono chiquito de música al lado del texto del botón */}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </a>
      
    </section>
  );
}