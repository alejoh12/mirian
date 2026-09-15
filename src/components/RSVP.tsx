export default function RSVP() {
  return (
    <section className="bg-[#939F8C] py-24 px-6 flex flex-col items-center text-white text-center">
      
      {/* Ícono de Carta/Invitación */}
      <div className="mb-6">
        <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
        </svg>
      </div>

      {/* Título Principal */}
      <h2 className="text-base md:text-lg font-montserrat tracking-[0.3em] uppercase font-bold mb-3">
        Confirmá tu asistencia
      </h2>
      
      {/* Fecha límite */}
      <p className="text-xs md:text-sm tracking-[0.25em] font-montserrat uppercase font-bold mb-12">
        Antes del 1 de marzo
      </p>

      <form className="w-full max-w-[320px] flex flex-col items-center">
        
        {/* Selector de cantidad de personas */}
        <div className="w-full flex flex-col items-start mb-6 text-left">
          <label className="text-[10px] md:text-xs font-montserrat uppercase font-bold tracking-widest mb-2">
            Número de personas a confirmar
          </label>
          <div className="relative w-full">
            <select className="w-full bg-transparent border-b border-white py-2 text-xs md:text-sm font-bold text-white outline-none appearance-none cursor-pointer">
              <option className="text-gray-800" value="1">1 persona</option>
              <option className="text-gray-800" value="2">2 personas</option>
              <option className="text-gray-800" value="3">3 personas</option>
            </select>
            {/* Flechita del Select */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Tarjeta del Invitado */}
        <div className="w-full bg-white/10 rounded-sm p-6 text-left flex flex-col gap-6">
          
          <h3 className="text-xs md:text-sm font-montserrat font-bold tracking-widest uppercase">
            Invitado 1
          </h3>

          {/* Campo Nombre */}
          <input 
            type="text" 
            placeholder="Nombre *" 
            required
            className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
          />

          {/* Campo Apellido */}
          <input 
            type="text" 
            placeholder="Apellido *" 
            required
            className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
          />

          {/* Opciones de Asistencia */}
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

          {/* Selector de Alimentación */}
          <div className="flex flex-col items-start w-full">
            <label className="text-[10px] md:text-xs font-montserrat uppercase font-bold tracking-widest mb-2">
              ¿Algún requerimiento en la alimentación?
            </label>
            <div className="relative w-full">
              <select className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white outline-none appearance-none cursor-pointer focus:border-white">
                <option className="text-gray-800" value="ninguno">Ninguno</option>
                <option className="text-gray-800" value="celiaco">Celíaco</option>
                <option className="text-gray-800" value="vegetariano">Vegetariano</option>
                <option className="text-gray-800" value="vegano">Vegano</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Campo Canción */}
          <input 
            type="text" 
            placeholder="¿Qué canción no puede faltar?" 
            className="w-full bg-transparent border-b border-white/70 py-2 text-xs md:text-sm font-bold text-white placeholder-white/80 outline-none focus:border-white transition-colors"
          />

          {/* Botón Submit */}
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