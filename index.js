'use strict'

  Toastify({
    text: "Weather API ga xush kelibsiz !",
    duration: 3500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black)",
      color: "red",
      border: "5px solid red",
      boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)"
    }
  }).showToast();

  Toastify({
    text: "Assalomu alaykum",
    duration: 3500,
    gravity: "top",
    position: "center",
    close: true,
    style: {
      background: "linear-gradient(to right, black, black)",
      color: "green",
      border: "5px solid green",
      boxShadow: "0 0 12px rgba(0, 255, 0, 0.6)"
    }
  }).showToast();

const input = document.querySelector(".search");
const cards = document.querySelector(".cards");
const API_KEY = "a4a98a36bca2be5e5ca560a6463500b9";

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather(input.value.trim());
  }
});

function getWeather(city) {
  if (city === "") {
      Toastify({
          text: "Shahar nomini kiriting !",
          duration: 3500,
          gravity: "top",
          position: "center",
          close: true,
          style: {
            background: "linear-gradient(to right, black, black)",
            color: "red",
            border: "5px solid red",
            boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)"
          }
      }).showToast();
    return;
  }

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(api)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data.cod === '404') {
        Toastify({
            text: "Shahar nomi xato kiritildi !",
            duration: 3500,
            gravity: "top",
            position: "center",
            close: true,
            style: {
                background: "linear-gradient(to right, black, black)",
                color: "red",
                border: "5px solid red",
                boxShadow: "0 0 12px rgba(255, 0, 0, 0.6)"
            }
        }).showToast();
      } else {
        showWeather(data);
      }
    });
}

function showWeather(data) {
  cards.innerHTML = `
    <div class="card">
      <h2>${data.name}</h2>
      <p>🌡️ ${data.main.temp} °C</p>
      <p>🍃 ${data.wind.speed} m/s</p>
    </div>
  `;
}