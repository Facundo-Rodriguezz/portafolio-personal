// Array con tus proyectos

const proyectos = [
  {
    titulo: "Sistema de Inventario",
    descripcion:
      "App web para gestionar productos, stock y reportes con autenticación JWT.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Node.js"],
    imagen: "images/inventario.png", // reemplazá con tu captura
    github: "https://github.com/Facundo-Rodriguezz/sistema-inventario",
    demo: "#",
  },
  {
    titulo: "Blog con Astro",
    descripcion: "Blog rápido y optimizado con Astro y Tailwind.",
    tecnologias: ["Astro", "Tailwind"],
    imagen: "images/blog.png",
    github: "https://github.com/Facundo-Rodriguezz/blog-astro",
    demo: "#",
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

// Contenedor donde van los proyectos
const contenedor = document.getElementById("contenedor-proyectos");

// Generar dinámicamente las cards
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
