var systemUnit = "°C";
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

  getForecast(response.data.coord);
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "a9315f7ac8496f64eb8973821d440c90";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(setForecast);
}
function setForecast(forecastData) {
  console.log(forecastData);
  let nextHourTemperature = Math.round(forecastData.data.hourly[0].temp);
  let nextHourIcon = forecastData.data.hourly[0].weather[0].icon;
  setNextHour(nextHourTemperature, nextHourIcon);

  let sundayTemperature = Math.round(forecastData.data.daily[0].temp.day);
  let sundayIcon = forecastData.data.daily[0].weather[0].icon;
  setSundayTemperature(sundayTemperature, sundayIcon);

  let mondayTemperature = Math.round(forecastData.data.daily[1].temp.day);
  let mondayIcon = forecastData.data.daily[1].weather[0].icon;
  setMondayTemperature(mondayTemperature, mondayIcon);

  let tuesdayTemperature = Math.round(forecastData.data.daily[2].temp.day);
  let tuesdayIcon = forecastData.data.daily[2].weather[0].icon;
  setTuesdayTemperature(tuesdayTemperature, tuesdayIcon);

  let wednesdayTemperature = Math.round(forecastData.data.daily[3].temp.day);
  let wednesdayIcon = forecastData.data.daily[3].weather[0].icon;
  setWednesdayTemperature(wednesdayTemperature, wednesdayIcon);

  let thursdayTemperature = Math.round(forecastData.data.daily[4].temp.day);
  let thursdayIcon = forecastData.data.daily[4].weather[0].icon;
  setThursdayTemperature(thursdayTemperature, thursdayIcon);

  let fridayTemperature = Math.round(forecastData.data.daily[5].temp.day);
  let fridayIcon = forecastData.data.daily[5].weather[0].icon;
  setFridayTemperature(fridayTemperature, fridayIcon);

  let saturdayTemperature = Math.round(forecastData.data.daily[6].temp.day);
  let saturdayIcon = forecastData.data.daily[6].weather[0].icon;
  setSaturdayTemperature(saturdayTemperature, saturdayIcon);
}
function setNextHour(temperature, weatherIcon) {
  let nextHourIconElement = document.querySelector("#nextHourIcon");
  let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  nextHourIconElement.src = weatherIconURL;

  let nextHourTemperatureElement = document.querySelector(
    "#nextHourTemperature"
  );
  nextHourTemperatureElement.innerHTML = `<strong>${temperature} ${systemUnit}</strong>`;
}

function setSundayTemperature(temperature, weatherIcon) {
  let sundayIconElement = document.querySelector("#sundayIcon");
  let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  sundayIconElement.src = weatherIconURL;

  let sundayTemperatureElement = document.querySelector("#sundayTemperature");
  sundayTemperatureElement.innerHTML = `${temperature} ${systemUnit}`;
}

function setMondayTemperature(temperature, weatherIcon) {
  let mondayIconElement = document.querySelector("#mondayIcon");
  let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  mondayIconElement.src = weatherIconURL;

  let mondayTemperatureElement = document.querySelector("#mondayTemperature");
  mondayTemperatureElement.innerHTML = `${temperature} ${systemUnit}`;
}

function setTuesdayTemperature(temperature, weatherIcon) {
  let tuesdayIconElement = document.querySelector("#tuesdayIcon");
  let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  tuesdayIconElement.src = weatherIconURL;

  let tuesdayTemperatureElement = document.querySelector("#tuesdayTemperature");
  tuesdayTemperatureElement.innerHTML = `${temperature} ${systemUnit}`;
}

function setWednesdayTemperature(temperature, weatherIcon) {
  let wednesdayIconElement = document.querySelector("#wednesdayIcon");
  let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  wednesdayIconElement.src = weatherIconURL;

  let wednesdayTemperatureElement = document.querySelector(
    "#wednesdayTemperature"
  );
  wednesdayTemperatureElement.innerHTML = `${temperature} ${systemUnit}`;
}
function setThursdayTemperature(temperature, weatherIcon) {
  let thursdayIconElement = document.querySelector("#thursdayIcon");
  let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  thursdayIconElement.src = weatherIconURL;

  let thursdayTemperatureElement = document.querySelector(
    "#thursdayTemperature"
  );
  thursdayTemperatureElement.innerHTML = `${temperature} ${systemUnit}`;
}

function setFridayTemperature(temperature, weatherIcon) {
  let fridayIconElement = document.querySelector("#fridayIcon");
  let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  fridayIconElement.src = weatherIconURL;

  let fridayTemperatureElement = document.querySelector("#fridayTemperature");
  fridayTemperatureElement.innerHTML = `${temperature} ${systemUnit}`;
}

function setSaturdayTemperature(temperature, weatherIcon) {
  let saturdayIconElement = document.querySelector("#saturdayIcon");
  let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  saturdayIconElement.src = weatherIconURL;

  let saturdayTemperatureElement = document.querySelector(
    "#saturdayTemperature"
  );
  saturdayTemperatureElement.innerHTML = `${temperature} ${systemUnit}`;
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
