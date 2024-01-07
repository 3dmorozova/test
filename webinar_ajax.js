const apiKey = "faeef537be5414427a6c70a51cd4c87e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

function getTempCity(event) {
event.preventDefault();

let cityInput = document.querySelector("#searchInput");

let city = document.querySelector("#city");
city.innerHTML = cityInput.ariaValueMax;

let xhr = new XMLHttpRequest();
xhr.open('GET', `${apiUrl}q=${cityInput.value}&appid=${apiKey}&units=metric`);
xhr.responseType = 'json';

xhr.send();

xhr.onload = function () {
//console.log('xhr.response' , xhr.response);
const temp = Math.round(xhr.response.main.temp);

let tempValue = document.querySelector("#temp");
tempValue.innerHTML = `${temp} C`

}

xhr.onerror = function () {
alert('Ошибка соединения')

}

xhr.onprogress = function (event) {
// event.loaded - количество загруженных байт
// event.total - общее количество байт
// event.lengthComputable = равно true, если сервер присылает заголовок content-Length

}

}

let search = document.querySelector("#button");
search.addEventListener("click", getTempCity);