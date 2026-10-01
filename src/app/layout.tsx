import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

// 1. Configuramos las 3 fuentes
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const greatVibes = Great_Vibes({
  weight: "400", // Great Vibes suele tener solo peso 400
  subsets: ["latin"],
  variable: "--font-greatvibes",
});

export const metadata: Metadata = {
  // ACÁ VA EL LINK EXACTO DE TU PÁGINA EN VERCEL
  metadataBase: new URL('https://mirianmiguel.vercel.app'),
  title: "Mirian & Miguel",
  description: "¡Nos casamos! Hacé clic para abrir nuestra invitación.",
  openGraph: {
    title: "MIRIAN & MIGUEL",
    description: "¡NOS CASAMOS!",
    url: "/",
    siteName: "Boda Mirian & Miguel",
    images: [
      {
        // Esta es la foto que va a salir en WhatsApp. 
        // Estamos usando la que ya tenés en la carpeta public.
        url: "/M3.webp", 
        width: 1200,
        height: 630,
        alt: "Mirian y Miguel",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* 2. Inyectamos las variables CSS de las fuentes en el body */}
      <body className={`${montserrat.variable} ${playfair.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}