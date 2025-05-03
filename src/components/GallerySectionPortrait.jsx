import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";

// Lista de imágenes (guardadas en /public/gallery/)
const images = [
  "/gallery/pgallery1.png",
  "/gallery/pgallery2.png",
  "/gallery/pgallery3.png",
  "/gallery/pgallery4.png",
  "/gallery/pgallery5.png",
  "/gallery/pgallery6.png",
  "/gallery/pgallery7.png",
  "/gallery/pgallery8.png",
  "/gallery/pgallery9.png",
  "/gallery/pgallery10.png",
];

// Configuración de columnas para Masonry
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function GallerySectionPortrait() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Formato requerido por Lightbox
  const slides = images.map((src) => ({ src }));

  return (
    <section id="gallery" className="bg-white py-5 px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-black mb-6">Retratos</h3>
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
