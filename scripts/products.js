const yearSpan = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;


const products = [
  { id: "p100", name: "Smart Thermostat" },
  { id: "p101", name: "Wireless Doorbell" },
  { id: "p102", name: "Security Camera" },
  { id: "p103", name: "Smart Light Bulb" }
];

const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});