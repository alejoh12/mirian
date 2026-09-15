import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        boda: {
          verde: '#A8B5A1', // El verde salvia exacto del mockup
          fondo: '#FFFFFF', // Blanco puro
          texto: '#595959', // Gris neutro para textos
          lineas: '#E5E7EB', // Gris extra claro para separadores
        }
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        montserrat: ['var(--font-montserrat)'],
      }
    },
  },
  plugins: [],
};
export default config;