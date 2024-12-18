import "./FilmCard.css";

export const FilmCard = (film) => `
  <div class="film-card">
    <img src="${film.image}" class="film-image"/>
    <div class="film-header">
      <h2>${film.title}</h2>
      <div>
        <a href="${film.caracteristicas}" target="_blank" rel="noopener noreferrer">
          <button class="film-details-btn">Ver más</button>
        </a>
      </div>
    </div>
    <div class="film-detail">
      <p class="film-description">${film.description}</p>
      <p class="film-tech">Año: ${film.tech}</p>
      <p class="film-genre">Género: ${film.genre}</p>
    </div>
  </div>
`;
