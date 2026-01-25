const yearSpan = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Static weather values
const temperature = 8; // °C
const windSpeed = 10;  // km/h

function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

document.getElementById("windchill").textContent = windChill;