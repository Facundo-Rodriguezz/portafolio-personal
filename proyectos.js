const proyectos = [
  {
    titulo: "Elohim Descartables",
    descripcion:
      "Página web de ventas para un local de descartables, desarrollada con Astro y Tailwind CSS, optimizada para rendimiento y desplegada en Netlify.",
    tecnologias: ["Astro", "Tailwind CSS", "JavaScript", "Netlify"],
    imagen: "/archivos/imagendescrtable.png",
    github: "https://github.com/Facundo-Rodriguezz/FrontElohim",
    demo: "https://elohimdescartabless.netlify.app/",
  },
  {
    titulo: "Formulario Dinámico",
    descripcion:
      "Formulario web interactivo creado con JavaScript, estilizado con CSS y desplegado en Netlify. Permite validar datos de manera dinámica y mejorar la experiencia del usuario.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Netlify"],
    imagen: "/archivos/imagen formulario.png",
    github: "https://github.com/Facundo-Rodriguezz/portafolio-personal",
    demo: "https://formulario-javascriptt.netlify.app/",
  },
  {
    titulo: "Landing Page",
    descripcion: "Landing moderna para un negocio local con diseño responsive.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    imagen: "images/landing.png",
    github: "https://github.com/Facundo-Rodriguezz/landing-page",
    demo: "#",
  },
];

const contenedor = document.getElementById("contenedor-proyectos");
proyectos.forEach((proyecto) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
    <div class="card-content">
      <h3>${proyecto.titulo}</h3>
      <p>${proyecto.descripcion}</p>
      <div class="tecnologias">
        ${proyecto.tecnologias.map((t) => `<span>${t}</span>`).join("")}
      </div>
      <div class="card-links">
        <a href="${proyecto.github}" target="_blank">GitHub</a>
        <a href="${proyecto.demo}" target="_blank">Demo</a>
      </div>
    </div>
  `;

  contenedor.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const destinatario = "fakundor05@gmail.com";
    const subject = encodeURIComponent(`Contacto de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    );
    // Detectar si es móvil
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // En móvil abre la app de correo
      const mailtoUrl = `mailto:${destinatario}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    } else {
      // En PC abre Gmail en navegador
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }
  });
});
