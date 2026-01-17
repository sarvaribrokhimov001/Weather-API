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


const api = `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=metric&appid=a4a98a36bca2be5e5ca560a6463500b9`;

fetch(api)
.then(response => response.json())
.then(data => {
    console.log(data);
});