import "./Inicio.css";
import { cleanPage } from "../../utils/cleanPage";
import { films } from "../../data/film"; 

export const Inicio = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section class="inicio">
      <h1>¡Bienvenidos a la mejor experiencia cinematográfica!</h1>
      <p>Explora nuestro catálogo de películas y vive la magia del cine desde la comodidad de tu hogar.</p>

      <div class="gallery">
        <button id="prevBtn" class="gallery-arrow">❮</button>
        <div class="gallery-track">
          ${films
            .slice(0, 10) 
            .map(
              (film) => `
              <div class="gallery-item">
                <img src="${film.image}" alt="${film.title}" />
                <div class="gallery-info">
                  <h2>${film.title}</h2>
                  <p>${film.description}</p>
                  <p class="ad">¡Disponible ahora en nuestra plataforma!</p>
                </div>
              </div>
            `
            )
            .join("")}
        </div>
        <button id="nextBtn" class="gallery-arrow">❯</button>
      </div>
    </section>
  `;


  const track = document.querySelector(".gallery-track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  const updateGallery = () => {
    const itemWidth = document.querySelector(".gallery-item").offsetWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < films.slice(0, 10).length - 1) {
      currentIndex++;
      updateGallery();
    }
  });

 
  window.addEventListener("resize", updateGallery);
};
