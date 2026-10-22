// src/app/page.tsx
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Itinerary from "@/components/Itinerary";
import InfoBlocks from "@/components/InfoBlocks";
import RSVP from "@/components/RSVP";
import Phrase from "@/components/Phrase";
import Footer from "@/components/Footer";
import Playlist from "@/components/Playlist";
import ClosingPhoto from "@/components/ClosingPhoto";
import FloatingMusic from "@/components/FloatingMusic";
import Gifts from "@/components/Gifts";
import CarouselFirst from "@/components/CarouselFirst";
import CarouselSecond from "@/components/CarouselSecond";

export default function BodasMirian() {
  return (
    <main className="bg-boda-fondo text-boda-texto min-h-screen font-sans">
      <Hero />
      <Countdown />
      <Phrase>EL DÍA MÁS ESPERADO DE NUESTRAS VIDAS ESTÁ LLEGANDO...</Phrase>
      <CarouselFirst />
      <Itinerary />
      <InfoBlocks />
      <Gifts />
      <Phrase>UNA HISTORIA DE AMOR QUE VALE LA PENA CELEBRAR</Phrase>
      <CarouselSecond />
      <Playlist />
      <RSVP />
      <ClosingPhoto />
      <FloatingMusic />
      <Footer />
    </main>
  );
}
