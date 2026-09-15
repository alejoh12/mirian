"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  // 1. Definimos la fecha de la boda (Año, Mes (0-11), Día, Hora, Minuto)
  // Nota: Los meses en JavaScript empiezan en 0, por lo que Noviembre es el mes 10.
  const targetDate = new Date(2026, 10, 21, 0, 0, 0).getTime();

  // 2. Estado para guardar el tiempo restante
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 3. Lógica del contador
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
        // Si el contador llega a cero, se queda en 0.
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="bg-white py-14 px-4 text-center border-b border-gray-50">
      <p className="text-[19px] tracking-[0.4em] text-[#a3a3a3] uppercase mb-10 font-montserrat font-light pl-1">
        ¡Nos casamos!
      </p>
      
      {/* Contenedor del cronómetro con los datos en tiempo real */}
      <div className="flex justify-center items-center gap-2 md:gap-5 text-[#A3A3A3] font-montserrat">
        
        <div className="flex flex-col items-center w-14">
          <span className="text-4xl md:text-5xl font-light leading-none">
            {timeLeft.days}
          </span>
          <span className="text-[7px] uppercase tracking-[0.4em] text-[#a3a3a3] mt-4 pl-1">Días</span>
        </div>
        
        <span className="text-2xl font-light text-[#e0e0e0] leading-none pb-5">:</span>
        
        <div className="flex flex-col items-center w-14">
          <span className="text-4xl md:text-5xl font-light leading-none">
            {timeLeft.hours}
          </span>
          <span className="text-[7px] uppercase tracking-[0.4em] text-[#a3a3a3] mt-4 pl-1">Horas</span>
        </div>
        
        <span className="text-2xl font-light text-[#e0e0e0] leading-none pb-5">:</span>
        
        <div className="flex flex-col items-center w-14">
          <span className="text-4xl md:text-5xl font-light leading-none">
            {timeLeft.minutes}
          </span>
          <span className="text-[7px] uppercase tracking-[0.4em] text-[#a3a3a3] mt-4 pl-1">Minutos</span>
        </div>
        
        <span className="text-2xl font-light text-[#e0e0e0] leading-none pb-5">:</span>
        
        <div className="flex flex-col items-center w-14">
          <span className="text-4xl md:text-5xl font-light leading-none">
            {timeLeft.seconds}
          </span>
          <span className="text-[7px] uppercase tracking-[0.4em] text-[#a3a3a3] mt-4 pl-1">Segundos</span>
        </div>

      </div>
    </section>
  );
}