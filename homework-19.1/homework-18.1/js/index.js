"use strict";

const ElContainer = document.querySelector(".container");
const ElArticle = document.querySelector("article");

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  return date.toLocaleDateString("en-US", options);
}

function getTime(date) {
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  return date.toLocaleTimeString("en-US", options);
}

function renderWeatherWidget(data) {
  const formattedDate = formatDate(new Date());
  const formattedTime = getTime(new Date());

  const html = `
        <div class="weather-widget__first-block">
          <h1 class="weather-widget__title">${data.name}</h1>
          <p class="weather-widget__formate-date">${formattedDate}</p>
          <p class="weather-widget__weather-main"><i class="fa-solid fa-clock"></i> ${data.weather[0].main}</p>
          <p class="weather-widget__humidity">Humidity: ${data.main.humidity}%</p>
          <p class="weather-widget__main-pressure">Pressure: ${data.main.pressure} hPa</p>
          <p class="weather-widget__wind"><i class="fa-solid fa-wind"></i> Wind: ${data.wind.speed} km/h SSE</p>
        </div>
        <div class="weather-widget__second-block">
          <img class="weather-widget__img" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather" />
          <p class="weather-widget__main-temp">${data.main.temp.toFixed(0)}&#176;C</p>
          <p class="weather-widget__main-feels-like">Feels Like: ${data.main.feels_like.toFixed(0)}&#176;C</p>
          <p class="weather-widget__weather-description">${data.weather[0].description}</p>
          <span class="weather-widget__formatted-time">${formattedTime}</span>
          <button class="weather-widget__refresh-btn"><i class="fa-solid fa-arrows-spin"></i></button>
        </div>
    `;
  ElArticle.innerHTML = "";
  ElArticle.insertAdjacentHTML("beforeend", html);
}

async function weatherWidget() {
  const lat = 51.517;
  const lon = 7.1;
  const APIKEY = "1baf1e850454abd74811ce420259bc47";
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    ElArticle.innerHTML = "";
    renderWeatherWidget(data);
    console.log(data);
    const ElBtnRefresh = document.querySelector(".weather-widget__refresh-btn");
    ElBtnRefresh.addEventListener("click", () => {
      ElBtnRefresh.classList.add("animate-spin", "rounded-full", "border-t-2", "border-blue-500", "border-solid");
      weatherWidget();
      setTimeout(() => {
        ElBtnRefresh.classList.remove("animate-spin");
      }, 1000);
    });
  } catch (err) {
    ElContainer.style.display = "none";
    const img = document.createElement("img");
    img.src = "https://miro.medium.com/v2/resize:fit:1200/1*MXyMqcEJ6Se0SCWcYCKZTQ.jpeg";
    img.alt = "Error Image";
    img.style.width = "100%";
    document.body.append(img);
    console.error(err);
    renderError(err.message);
  }
}

weatherWidget();
