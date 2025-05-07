import React from "react";
import PostCard from "./postCard";

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-gray-100 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Columna izquierda */}
        <div className="flex flex-col items-center gap-4 md:mr-20">
          <PostCard img={"/images/model2.png"} />
          <blockquote className="border-l-4 border-black pl-4 text-gray-800 text-lg sm:text-xl font-medium mr-27">
            <span className="text-2xl mr-2">“</span>
            Luz, estilo y<br />
            pasión en cada
            <br />
            detalle.
          </blockquote>
        </div>

        {/* Columna central completa: About + Servicios */}
        <div className="text-center md:text-left space-y-6">
          <div>
            <h1 className="text-gray-400 text-3xl sm:text-4xl mb-3">Hello!</h1>
            <h2 className="text-black text-3xl sm:text-4xl font-bold mb-4">
              Soy Bryan Adon
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              <strong>Fotógrafo</strong> profesional, <strong>editor</strong> y{" "}
              <strong>filmmaker</strong>.<br />
              Capturo momentos que cuentan historias, con pasión por la{" "}
              <strong>creatividad</strong> y la <strong>perfección</strong> visual.
            </p>

            <hr className="border-gray-400 my-6" />

            <h3 className="text-gray-400 text-3xl sm:text-4xl">
              Mis <br />
              <span className="font-bold text-black">Servicios</span>
            </h3>
          </div>

          {/* Servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* EVENTOS */}
            <div className="relative w-full h-56 md:h-72 overflow-hidden group rounded shadow-lg">
              <img
                src="/images/events.jpg"
                alt="Eventos"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <a href="#gallery">
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  EVENTOS
                </span>
              </div>
              </a>
            </div>

            {/* RETRATO */}
            <div className="relative w-full h-56 md:h-72 overflow-hidden group rounded shadow-lg">
              
              <img
                src="/images/portrait.png"
                alt="Retrato"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <a href="#portrait">
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  RETRATO
                </span>
              </div>
              </a>
              
              
            </div>

           {/* Bodas */}
           <div className="relative w-full h-56 md:h-72 overflow-hidden group rounded shadow-lg">
              <img
                src="/images/boda.png"
                alt="Retrato"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  BODAS
                </span>
              </div>
            </div>


            {/* Cumpleaños */}
           <div className="relative w-full h-56 md:h-72 overflow-hidden group rounded shadow-lg">
              <img
                src="/images/birthday.png"
                alt="Retrato"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  CUMPLES
                </span>
              </div>
            </div>

            {/* 15 */}
           <div className="relative w-full h-56 md:h-72 overflow-hidden group rounded shadow-lg">
              <img
                src="/images/quince.png"
                alt="Retrato"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  15
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col gap-10 items-center md:ml-20">
          <PostCard
            img={"/images/model1.png"}
            rotate="rotate-6"
            iconColor="text-black"
          />
          <PostCard
            img={"/images/model3.png"}
            rotate="-rotate-6"
            iconColor="text-pink-500"
          />
        </div>
      </div>
    </section>
  );
}
