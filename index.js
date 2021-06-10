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

function setTemperature(newTemperature) {
  let temperature = Math.round(newTemperature);
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = temperature;
}
function getWeatherData(response) {
  let temperature = response.data.main.temp;
  setTemperature(temperature);

  let wind = response.data.wind.speed;
  setWind(wind);

  let humidity = response.data.main.humidity;
  setHumidity(humidity);

  let weatherDescription = response.data.weather;
  setWeatherDescription(weatherDescription);
}

function setWind(newWind) {
  let wind = Math.round(newWind);
  let windElement = document.querySelector("#windNow");
  windElement.innerHTML = `Wind: ${wind} km/h`;
}
function setHumidity(newHumidity) {
  let humidity = Math.round(newHumidity);
  let humidityElement = document.querySelector("#humidityNow");
  humidityElement.innerHTML = `Humidity: ${humidity}%`;
}
function setWeatherDescription(newWeatherDescription) {
  let weatherDescriptionElement = document.querySelector("#descriptionNow");
  weatherDescriptionElement.innerHTML = newWeatherDescription;
}

function getTemperature(cityName) {
  let apiKey = "a9315f7ac8496f64eb8973821d440c90";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWeatherData);
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
