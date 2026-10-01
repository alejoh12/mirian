"use client";

import { useState, useRef } from "react";

export default function FloatingMusic() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setHasEntered(true);
    setIsPlaying(true);
    audioRef.current?.play();
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Reproductor oculto */}
      <audio ref={audioRef} src="/cancion-romantica4.mp3" loop />

      {/* PANTALLA DE BIENVENIDA ESTILO TARJETA */}
      {!hasEntered && (
        // Fondo general (Gris muy clarito / FAFAFA)
        <div className="fixed inset-0 z-[9999] bg-[#FAFAFA] flex items-center justify-center p-4 transition-opacity duration-1000">
          
          {/* Tarjeta Blanca Centrada (Imita el diseño de tu foto) */}
          <div className="w-full max-w-[360px] h-[75vh] max-h-[650px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-8 text-center animate-fade-in relative overflow-hidden">
            
            <h1 className="text-2xl md:text-3xl font-montserrat tracking-[0.15em] text-[#666666] mb-6 font-medium">
              MIRIAN & MIGUEL
            </h1>
            
            <p className="text-[13px] md:text-xs font-montserrat tracking-[0.2em] text-[#a3a3a3] uppercase leading-loose mb-12 px-2 font-semibold">
              Nuestra historia de amor<br/>
              merece ser celebrada con<br/>
              quienes más queremos
            </p>
            
            <button
              onClick={handleEnter}
              // Un color verde oliva/grisáceo idéntico al de tu referencia
              className="bg-[#7A8573] text-white px-10 py-3 text-xs md:text-sm font-montserrat tracking-[0.2em] uppercase hover:bg-[#656e5f] transition-colors"
            >
              Ingresar
            </button>
            
          </div>
        </div>
      )}

      {/* BOTÓN FLOTANTE (Solo aparece después de ingresar y queda pegado a la esquina) */}
      {hasEntered && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 w-15 h-15 md:w-12 md:h-12 bg-[#939F8C]/80 backdrop-blur-sm text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-fade-in"
          aria-label="Reproducir o pausar música"
        >
          {isPlaying ? (
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}