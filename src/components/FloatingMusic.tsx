"use client"; // Necesario porque usamos useState y useRef en el navegador

import { useState, useRef } from "react";

export default function FloatingMusic() {
  // Arrancamos en false porque los navegadores modernos bloquean el autoplay 
  // hasta que el usuario interactúa con la pantalla
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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
      {/* Reproductor oculto apuntando al archivo en la carpeta public */}
      <audio ref={audioRef} src="/cancion-romantica1.mp3" loop />

      {/* Botón Flotante */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 md:right-[calc(50%-13rem)] z-50 w-10 h-10 md:w-12 md:h-12 bg-[#939F8C]/80 backdrop-blur-sm text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Reproducir o pausar música"
      >
        {isPlaying ? (
          // Ícono de Pausa (Dos barritas)
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          // Ícono de Play (Triangulito)
          <svg className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        )}
      </button>
    </>
  );
}