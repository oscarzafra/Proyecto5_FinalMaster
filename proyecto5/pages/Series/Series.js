import "./Series.css";
import { cleanPage } from "../../utils/cleanPage";
import { series } from "../../data/serie";
import { SeriesCard } from "../../components/SeriesCard/SeriesCard";


const filterSeriesByGenre = (genre) => {
  return series.filter(serie => serie.genre.toLowerCase() === genre.toLowerCase());
};

export const Series = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  
  const genres = ["Drama", "Comedia", "Ciencia ficción", "Aventura", "Acción", "Fantasía"];
  let genreFilter = "Drama"; 
  main.innerHTML = `
    <section class="series">
      <h2 class="series-title">Series</h2>
      <div class="filter">
        <select id="genreFilter">
          ${genres.map(genre => `<option value="${genre}" ${genre === genreFilter ? "selected" : ""}>${genre}</option>`).join("")}
        </select>
      </div>
      <div class="series-container"></div>
    </section>
  `;

  
  const genreSelect = document.querySelector("#genreFilter");
  genreSelect.addEventListener("change", (event) => {
    genreFilter = event.target.value;
    displaySeries(filterSeriesByGenre(genreFilter));
  });

  const container = document.querySelector(".series-container");


  const displaySeries = (filteredSeries) => {
    container.innerHTML = ''; 
    filteredSeries.forEach(serie => {
      const figure = document.createElement("figure");
      figure.innerHTML = SeriesCard(serie);
      container.appendChild(figure);
    });
  };

  
  displaySeries(filterSeriesByGenre(genreFilter));
};
