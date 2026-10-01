export default function InfoBlocks() {
  return (
    <section className="bg-[#939F8C] py-24 px-6 text-center flex flex-col items-center text-white">
      
      {/* 💎 Animación CSS personalizada para el diamante */}
      <style>{`
        @keyframes flotar {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-flotar {
          animation: flotar 3s ease-in-out infinite;
        }
      `}</style>

      {/* Ícono Diamante con el movimiento aplicado */}
      <div className="mb-6 animate-flotar">
        <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.7 8.3L12 21l9.3-12.7L17.5 3h-11L2.7 8.3z" />
          <path d="M2.7 8.3h18.6" />
          <path d="M8.5 3l3.5 5.3L15.5 3" />
          <path d="M12 21V8.3" />
        </svg>
      </div>

      {/* TÍTULO EN BOLD Y MÁS GRANDE */}
      <h2 className="text-lg md:text-xl font-montserrat tracking-[0.35em] uppercase font-bold mb-3">
        Dress Code
      </h2>
      
      {/* SUBTÍTULO EN BOLD Y MÁS GRANDE */}
      <p className="text-sm md:text-base tracking-[0.25em] font-montserrat uppercase font-bold mb-10">
        Elegante Sport
      </p>

    </section>
  );
}