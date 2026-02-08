const yearSpan = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;


let count = localStorage.getItem("reviewCount");

if (!count) {
  count = 0;
}

count++;
localStorage.setItem("reviewCount", count);

document.getElementById("reviewCount").textContent = count;