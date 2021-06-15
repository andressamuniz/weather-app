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

function setCityName(newCityName) {
  let locationNowElement = document.querySelector("#locationNow");
  locationNowElement.innerHTML = newCityName;
}

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

  let weatherDescription = response.data.weather[0].description;
  setWeatherDescription(weatherDescription);

  let newCityName = response.data.name;
  setCityName(newCityName);

  celsiusTemperature = response.data.main.temp;
}
function setWeatherDescription(newWeatherDescription) {
  let weatherDescriptionElement = document.querySelector("#descriptionNow");
  weatherDescriptionElement.innerHTML = newWeatherDescription;
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

function getTemperature(cityName) {
  let apiKey = "a9315f7ac8496f64eb8973821d440c90";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWeatherData);
}

function yourLocationSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#locationInput");

  getTemperature(searchInput.value);
}

function showFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-now");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
function showCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = 20;

let form = document.querySelector("#currentForm");
form.addEventListener("submit", yourLocationSearch);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemperature);

getTemperature("Toronto");
