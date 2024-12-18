import "./SeriesCard.css";

export const SeriesCard = (serie) => `
  <div class="serie-card">
    <img src="${serie.image}" alt="${serie.title}" class="serie-image"/>
    <div class="serie-header">
      <h2>${serie.title}</h2>
      <div>
        <a href="${serie.caracteristicas}" target="_blank" rel="noopener noreferrer">
          <button class="serie-details-btn">Ver más</button>
        </a>
      </div>
    </div>
    <div class="serie-detail">
      <p class="serie-description">${serie.description}</p>
      <p class="serie-tech">Año: ${serie.tech}</p>
      <p class="serie-genre">Género: ${serie.genre}</p>
    </div>
  </div>
`;
