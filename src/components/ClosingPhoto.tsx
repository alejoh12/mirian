export default function ClosingPhoto() {
  return (
    <section className="bg-[#FAFAFA] w-full pt-16 px-6 flex justify-center">
      <div className="w-full max-w-sm">
        <img
          // Podés reemplazar este link por la foto real de preboda de Mirian y su novio
          src="/M2.webp"
          alt="Mirian y Miguel"
          className="w-full h-[400px] md:h-[500px] object-cover shadow-sm"
        />
      </div>
    </section>
  );
}