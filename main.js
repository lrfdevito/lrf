
const map = L.map('map').setView([37.6, 25.15], 11); // Centered on Tinos
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example zones near coastal areas
const zones = [
  {
    name: "Σαργός Ζώνη 1",
    coords: [[
      [25.12, 37.59],
      [25.13, 37.59],
      [25.13, 37.60],
      [25.12, 37.60]
    ]],
    info: "Ιδανικό σημείο για σαργό, βάθος 4-8μ, ώρα αιχμής: 06:00-09:00"
  },
  {
    name: "Μελανούρι Ζώνη 1",
    coords: [[
      [25.14, 37.61],
      [25.15, 37.61],
      [25.15, 37.62],
      [25.14, 37.62]
    ]],
    info: "Μελανούρι κοντά σε βράχια, ώρα αιχμής: 19:00-21:00"
  }
];

zones.forEach(zone => {
  const polygon = L.polygon(zone.coords, {
    color: "blue",
    fillColor: "skyblue",
    fillOpacity: 0.5
  }).addTo(map);
  polygon.bindPopup(`<b>${zone.name}</b><br>${zone.info}`);
});
