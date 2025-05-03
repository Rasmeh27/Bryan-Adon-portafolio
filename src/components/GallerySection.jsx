import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";

// Lista de imágenes (guardadas en /public/gallery/)
const images = [
  "/gallery/egallery1.png",
  "/gallery/egallery2.png",
  "/gallery/egallery3.png",
  "/gallery/egallery4.png",
  "/gallery/egallery5.png",
  "/gallery/egallery6.png",
  "/gallery/egallery7.png",
  "/gallery/egallery8.png",
  "/gallery/egallery9.png",
  "/gallery/egallery10.png",
];

// Configuración de columnas para Masonry
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Formato requerido por Lightbox
  const slides = images.map((src) => ({ src }));

  return (
    <section id="gallery" className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-400 mb-2">Galería</h2>
        <h3 className="text-2xl font-semibold text-black mb-6">Eventos</h3>
        <hr className="mb-8" />

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`gallery-${i}`}
              className="rounded-lg shadow-md mb-6 w-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            />
          ))}
        </Masonry>

        {/* Lightbox activado al hacer clic */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={index}
          />
        )}
      </div>
    </section>
  );
}
