# React + Vite

📸 Bryan Adon - Portafolio de Fotografía
Este es el sitio web oficial del fotógrafo Bryan Adon, desarrollado como una landing page responsiva con React y TailwindCSS. La plataforma muestra su trabajo fotográfico, servicios ofrecidos y un formulario de contacto funcional.

🧰 Tecnologías utilizadas
⚛️ React.js – Framework principal

🎨 TailwindCSS – Estilización con clases utilitarias

📦 Vite – Herramienta de bundling rápida

📸 yet-another-react-lightbox – Galería con visualización interactiva

🧱 react-masonry-css – Distribución tipo grid para galería

📩 EmailJS – Envío de formularios por correo electrónico

🖼️ React Icons – Íconos de redes sociales

📁 src/
├── assets/               → Imágenes del portafolio
├── components/
│   ├── Header.jsx        → Navegación superior responsiva
│   ├── HeroSection.jsx   → Sobre mí + servicios + frase
│   ├── GallerySection.jsx→ Galería interactiva de fotos
│   ├── ContactSection.jsx→ Formulario de contacto con EmailJS
│   ├── Footer.jsx        → Pie de página con redes
│   └── PostCard.jsx      → Componente reutilizable de imagen
├── App.jsx               → Composición general
└── main.jsx              → Entry point

🧭 Funcionalidades destacadas
✅ Responsive Design: completamente adaptado a móvil, tablet y escritorio.

✅ Navegación suave: scroll fluido entre secciones.

✅ Animaciones al hacer scroll: con AOS.

✅ Galería expandible: al estilo Instagram.

✅ Formulario funcional con EmailJS.

✅ Menú hamburguesa en mobile.

⚙️ Instalación
1. Clona el repositorio:
git clone https://github.com/tuusuario/portafolio-bryan-adon.git
cd portafolio-bryan-adon

2. instala dependencias
   npm install

3. Ejecuta el proyecto
   npm run dev


📬 Configuración de EmailJS
Crea una cuenta en EmailJS

Crea un servicio, plantilla y copia tu:

Service ID

Template ID

Public Key

Configura estos valores en el archivo del formulario (ContactSection.jsx) usando emailjs.send(...)


👨‍💻 Autor
Bryan Adon – Fotógrafo

Luis Herasme – Desarrollo y diseño web
@LuisHerasme




