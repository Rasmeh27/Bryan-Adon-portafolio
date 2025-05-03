import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-sm text-center md:text-left">

        {/* Columna 1: Logo + info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
          <div className="space-y-1">
            <h4 className="text-white font-semibold">Bryan Adon</h4>
            <p>Fotógrafo, editor y filmmaker</p>
            <p>© 2025 Bryan Adon</p>
          </div>
        </div>

        {/* Columna 2: desarrollador */}
        <div className="flex items-center justify-center">
          <p>
            Developed & Designed by{" "}
            <span className="font-bold">Luis Herasme</span>
          </p>
        </div>

        {/* Columna 3: contacto */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold mb-2">CONTACTO</h4>
          <p className="flex justify-center md:justify-start items-center gap-2">
            <a href=""><FaWhatsapp className="text-green-500 text-xl" />
            +1 829-742-8634</a>
            
          </p>
          <p className="flex justify-center md:justify-start items-center gap-2">
            <a href="https://www.instagram.com/bryantadonv/"><FaInstagram className="text-pink-500 text-xl" />
            @bryantadonv</a>
            
          </p>
        </div>
      </div>
    </footer>
  );
}
