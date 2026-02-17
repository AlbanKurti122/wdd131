const places = [
  {name:"Tirana", type:"city", img:"images/tirana.jpg"},
  {name:"Berat", type:"city", img:"images/berat.webp"},
  {name:"Saranda", type:"beach", img:"images/sarande.webp"},
  {name:"Theth", type:"mountain", img:"images/theth.jpg"},
];

const cardContainer = document.querySelector("#cards");

if (cardContainer) {
  places.forEach(place => {
    cardContainer.innerHTML += `
      <div class="card">
        <img src="${place.img}" loading="lazy">
        <h3>${place.name}</h3>
        <button onclick="saveFavorite('${place.name}')">Favorite</button>
      </div>
    `;
  });
}

function saveFavorite(place) {
  localStorage.setItem("favorite", place);
  alert(`${place} saved!`);
}

const destContainer = document.querySelector("#destinations");
const filter = document.querySelector("#filter");

function showPlaces(list) {
  destContainer.innerHTML = "";
  list.forEach(p => {
    destContainer.innerHTML += `
      <div class="card">
        <img src="${p.img}" loading="lazy">
        <h3>${p.name}</h3>
      </div>
    `;
  });
}

if (destContainer) {
  showPlaces(places);
}

if (filter) {
  filter.addEventListener("change", () => {
    const value = filter.value;
    const filtered = value === "all"
      ? places
      : places.filter(p => p.type === value);
    showPlaces(filtered);
  });
}

const form = document.querySelector("#tripForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const place = document.querySelector("#place").value;
    const days = document.querySelector("#days").value;

    localStorage.setItem("trip", `${name}-${place}-${days}`);

    document.querySelector("#message").textContent =
      `Trip planned for ${name} to ${place} for ${days} days!`;
  });
}
