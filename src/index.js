let currentTime = new Date();
let timeNow = document.querySelector("#now");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[currentTime.getDay()];
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

timeNow.innerHTML = `${day}, ${hours}:${minutes}`;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = `${temperature}`;
}

function getTemperature(cityName) {
  let apiKey = "a9315f7ac8496f64eb8973821d440c90";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function yourLocationSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#locationInput");
  let searchCity = document.querySelector("#locationNow");
  searchCity.innerHTML = searchInput.value;
  
  getTemperature(searchInput.value);
}

let form = document.querySelector("#currentForm");
form.addEventListener("submit", yourLocationSearch);
