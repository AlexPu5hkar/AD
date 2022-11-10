"use strict"

const weatherBlock = document.querySelector('#weather');

async function loaderWeather(e) {
    weatherBlock.innerHTML = `
    <div class="weather__loading">
        <img src="/src/img/load.gif" alt="loading...">
    </div>`;

    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&id=f7cd6dc20e574f037a11a4a2d8805ffe';
    const response = await fetch(server, {
        method: 'GET',
    });    
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data){
    const location = data.name;
    const temp = math.round(data.main.temp);
    const feelslike = Math.round(data.main/feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    const template =`
    <div class="weather__header">
        <div class="weather__main">
            <div class="weather__city">${lication}</div>
            <div class="weather__status">${weatherStatus}</div>
        </div>
        <div class="weather__icon">
        ${weatherIcon}>
        </div>
    </div>
    <div class="weather__temp">${temp}</div>
    <div class="weather__feels-like">${feelslike}</div>`;

    weatherBlock.innerHTML = template
}

if (weatherBlock) {
    loaderWeather();
}