import React, { useRef } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import sweetalert from "sweetalert2";
import Swal from "sweetalert2";
import { IconBase } from "react-icons";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      .then(
        (result) => {
          Swal.fire({
            title: "¡Mensaje enviado!",
            text: "Gracias por tu mensaje, me pondré en contacto contigo pronto.",
            icon: "success",
          });
          form.current.reset(); // limpia el formulario
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
            icon: "error",
          });
        }
      );
  };

  return (
    <section id="contacto" className="bg-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-400 mb-2">Contacto</h2>
        <h3 className="text-2xl font-semibold text-black mb-8">
          ¿En qué puedo servirte?
        </h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Mensaje"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Enviar
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 my-10">
          <span className="w-1/4 h-px bg-gray-300"></span>
          <span className="text-black">o</span>
          <span className="w-1/4 h-px bg-gray-300"></span>
        </div>

        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.instagram.com/bryantadonv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
