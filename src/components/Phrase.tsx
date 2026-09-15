export default function Phrase({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[#A6B39E] py-24 px-6 flex flex-col items-center justify-center text-center">
      
      {/* Cambiamos w-100 por w-full (o w-[80%] si querés que tenga un margen a los lados) */}
      <div className="w-full max-w-sm h-[3px] bg-white/60 mb-8"></div>
      
      <h2 className="text-sm md:text-xl font-montserrat tracking-[0.4em] text-white uppercase leading-[2.5] font-bold pl-2">
        {children}
      </h2>
      
      <div className="w-full max-w-sm h-[3px] bg-white/60 mt-8"></div>
      
    </section>
  );
}