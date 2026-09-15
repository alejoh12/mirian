export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col items-center justify-end pb-10 overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img1.jpg')" }} 
      />
      
      {/* Degradado sutil solo en el tercio inferior */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Textos inferiores */}
      <div className="relative z-10 text-white text-center flex flex-col items-center gap-1">
        <p className="text-[15px] tracking-[0.3em] font-montserrat uppercase opacity-90">
          Llegó el día
        </p>
        <h1 className="text-4xl md:text-5xl font-montserrat tracking-widest uppercase mt-1">
          Mirian & Miguel
        </h1>
      </div>
    </section>
  );
}