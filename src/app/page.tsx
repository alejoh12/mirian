// src/app/page.tsx
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Carousel from "@/components/Carousel";
import Itinerary from "@/components/Itinerary";
import InfoBlocks from "@/components/InfoBlocks";
import RSVP from "@/components/RSVP";
import Phrase from "@/components/Phrase";
import Footer from "@/components/Footer";
import Playlist from "@/components/Playlist";
import ClosingPhoto from "@/components/ClosingPhoto";
import FloatingMusic from "@/components/FloatingMusic";

export default function BodasMirian() {
  return (
    <main className="bg-boda-fondo text-boda-texto min-h-screen font-sans">
      <Hero />
      <Countdown />
      <Phrase>EL DÍA MÁS ESPERADO DE NUESTRAS VIDAS ESTÁ LLEGANDO...</Phrase>
      <Carousel />
      <Itinerary />
      {/* <Phrase>UNA HISTORIA DE AMOR QUE VALE LA PENA CELEBRAR</Phrase> */}
      <InfoBlocks />
      <Playlist />
      <RSVP />
      <ClosingPhoto />
      <FloatingMusic />
      <Footer />
    </main>
  );
}
