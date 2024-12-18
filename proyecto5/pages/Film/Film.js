import "./Film.css";
import { cleanPage } from "../../utils/cleanPage";
import { films } from "../../data/film";
import { FilmCard } from "../../components/FilmCard/FilmCard";


const filterFilmsByGenre = (genre) => {
  return films.filter(film => film.genre.toLowerCase() === genre.toLowerCase());
};

export const Films = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  
  const genres = ["Ciencia ficción", "Acción", "Crimen", "Aventura", "Drama", "Fantasía", "Suspense"];
  let genreFilter = "Ciencia ficción";
  main.innerHTML = `
    <section class="films">
      <h2 class="films-title">Películas</h2>
      <div class="filter">
        <select id="genreFilter">
          ${genres.map(genre => `<option value="${genre}" ${genre === genreFilter ? "selected" : ""}>${genre}</option>`).join("")}
        </select>
      </div>
      <div class="films-container"></div>
    </section>
  `;

 
  const genreSelect = document.querySelector("#genreFilter");
  genreSelect.addEventListener("change", (event) => {
    genreFilter = event.target.value;
    displayFilms(filterFilmsByGenre(genreFilter));
  });

  const container = document.querySelector(".films-container");


  const displayFilms = (filteredFilms) => {
    container.innerHTML = ''; 
    filteredFilms.forEach(film => {
      const figure = document.createElement("figure");
      figure.innerHTML = FilmCard(film);
      container.appendChild(figure);
    });
  };

  displayFilms(filterFilmsByGenre(genreFilter));
};
