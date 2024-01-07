const apiKey = "faeef537be5414427a6c70a51cd4c87e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

function getTempCity(event) {
event.preventDefault();

let cityInput = document.querySelector("#searchInput");

let city = document.querySelector("#city");
city.innerHTML = cityInput.ariaValueMax;

fetch(`${apiUrl}q=${cityInput.value}&appid=${apiKey}&units=metric`)
.then((response) => response.json())
.then((response) => {
const currentTemperature = Math.round(response.main.temp);

let tempValue = document.querySelector("#temp");
tempValue.innerHTML = `${currentTemperature} C`;
});




}

let search = document.querySelector("#button");
search.addEventListener("click", getTempCity);