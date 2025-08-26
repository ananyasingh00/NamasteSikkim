fetch('data/monasteries.json')
  .then(res => res.json())
  .then(monasteries => {
    const regionFilter = document.getElementById('regionFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const cardContainer = document.getElementById('monasteryCards');

    function renderCards(data) {
      cardContainer.innerHTML = '';
      data.forEach(m => {
        const card = document.createElement('div');
        card.className = 'monastery-card';
        card.innerHTML = `
          <img src="${m.image}" alt="${m.name}" />
          <h3>${m.name}</h3>
          <p>${m.region}</p>
          <p>Rating: ${'★'.repeat(m.rating)}${'☆'.repeat(5 - m.rating)}</p>
          <a href="${m.streetViewUrl}" target="_blank">View 360°</a>
        `;
        cardContainer.appendChild(card);
      });
    }

    function applyFilters() {
      const region = regionFilter.value;
      const rating = parseInt(ratingFilter.value);
      const filtered = monasteries.filter(m => {
        return (!region || m.region === region) &&
               (!rating || m.rating === rating);
      });
      renderCards(filtered);
    }

    regionFilter.addEventListener('change', applyFilters);
    ratingFilter.addEventListener('change', applyFilters);

    renderCards(monasteries);
  });
