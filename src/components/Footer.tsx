// export default function Footer() {
//   return (
//     <footer className="w-full flex flex-col items-center">
      
//       {/* 1. Bloque superior con los nombres */}
//       <div className="bg-[#FAFAFA] w-full py-20 flex justify-center">
//         <h2 className="text-sm md:text-base font-montserrat tracking-[0.4em] text-[#a3a3a3] uppercase font-light">
//           Mirian & Miguel
//         </h2>
//       </div>

//       {/* 2. Barra inferior verde oliva */}
//       <div className="bg-[#939F8C] w-full py-6 px-6 flex flex-col items-center justify-center gap-4 text-white relative">
        
        
//         {/* TU FIRMA CENTRADA (Mismo formato estético que el original) */}
//         <div className="flex flex-col items-center leading-[1] font-playfair lowercase tracking-wide cursor-pointer hover:opacity-80 transition-opacity">
//           <span className="text-[13px] font-bold">&copy; Alejo Herrera 2026 - Todos los derechos reservados.</span>
//         </div>

//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center">
      
      {/* 1. Bloque superior con los nombres */}
      <div className="bg-[#FAFAFA] w-full py-20 flex justify-center">
        {/* NOMBRES EN BOLD Y MÁS GRANDES */}
        <h2 className="text-base md:text-lg font-montserrat tracking-[0.4em] text-[#a3a3a3] uppercase font-bold text-center px-4">
          Mirian & Miguel
        </h2>
      </div>

      {/* 2. Barra inferior verde oliva */}
      <div className="bg-[#939F8C] w-full py-8 px-6 flex flex-col items-center justify-center text-white relative">
        
        {/* TU FIRMA CENTRADA: Letra más grande, sin forzar minúsculas y con más aire */}
        <div className="flex flex-col items-center font-playfair tracking-wide cursor-pointer hover:opacity-80 transition-opacity text-center">
          <span className="text-sm md:text-base font-bold">
            &copy; Alejo Herrera 2026 - Todos los derechos reservados.
          </span>
        </div>

      </div>
    </footer>
  );
}