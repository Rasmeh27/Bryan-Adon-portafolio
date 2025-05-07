import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import photographer from "/images/fotographer.png";
import logo from "/images/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`bg-black text-white transition-all duration-500 sticky top-0 z-50 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-10 w-full">
        {/* Imagen del fotógrafo - solo en desktop y no scrolled */}
        {!scrolled && (
          <img
            src={photographer}
            alt="photographer"
            loading="lazy"
            className="hidden md:block w-[730px] h-auto object-cover transition-all duration-500"
          />
        )}

        {/* Logo */}
        {!scrolled && (
          <>
            {/* Mobile: logo más pequeño y centrado */}
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              className="block md:hidden w-24 h-24"
            />

            {/* Desktop: logo grande */}
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              className="hidden md:block w-48 h-48"
            />
          </>
        )}

        {/* Nav principal - visible solo en desktop */}
        <nav
          className={`hidden md:flex transition-all duration-500 ${
            scrolled ? "mx-auto" : "mb-85 mr-10"
          }`}
        >
          <ul className="flex space-x-8 text-white text-xl">
            <li>
              <a href="#inicio" className="hover:text-red-500">
                Inicio
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-red-500">
                Galería
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-red-500">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón hamburguesa - visible solo en móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 py-4 space-y-4 text-center text-xl">
          <a
            href="#inicio"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            Inicio
          </a>
          <a
            href="#gallery"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            Galería
          </a>
          <a
            href="#contacto"
            className="block hover:text-red-500"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
