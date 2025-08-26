const monasteries = [
  {
    name: "Rumtek Monastery",
    coords: [27.333, 88.620],
    location: "East Sikkim",
    established: "1740",
    rating: 4.8,
    sect: "Kagyü Sect",
    tourUrl: "#"
  },
  {
    name: "Pemayangtse Monastery",
    coords: [27.250, 88.250],
    location: "West Sikkim",
    established: "1705",
    rating: 4.7,
    sect: "Nyingma Sect",
    tourUrl: "#"
  },
  {
    name: "Tashiding Monastery",
    coords: [27.200, 88.300],
    location: "West Sikkim",
    established: "1717",
    rating: 4.6,
    sect: "Nyingma Sect",
    tourUrl: "#"
  }
];

const map = L.map('sikkimMap').setView([27.3, 88.6], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

monasteries.forEach(m => {
  L.circleMarker(m.coords, {
    radius: 8,
    color: '#f4a261',
    fillColor: '#f4a261',
    fillOpacity: 0.9
  }).addTo(map)
    .bindPopup(`<strong>${m.name}</strong><br>${m.location}<br><a href="${m.tourUrl}">Virtual Tour</a>`);

  const card = document.createElement('div');
  card.className = 'monastery-card';
  card.innerHTML = `
    <h4>${m.name}</h4>
    <p><strong>Location:</strong> ${m.location}</p>
    <p><strong>Established:</strong> ${m.established}</p>
    <p><strong>Rating:</strong> ${m.rating} ★</p>
    <span class="tag">${m.sect}</span>
    <br><button onclick="window.location='${m.tourUrl}'">Virtual Tour</button>
  `;
  document.getElementById('monasteryCards').appendChild(card);
});
