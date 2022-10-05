'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
    .then((response) => response.text())
    .then((fortune) => {
      document.querySelector('#fortune-text').innerText = fortune;
    });
};
document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const zipcode = document.querySelector('#zipcode-field').value;
  // ALT:
  // const queryString = new URLSearchParams({ zipcode : zipcode }).toString();
  // const url = `weather.json?${queryString}`;
  // then fetch(url)

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`/weather.json?zipcode=${zipcode}`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      document.querySelector('#weather-info').innerHTML = jsonResponse.forecast;
    });
}
document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

}
document.querySelector('#order-form').addEventListener('submit', orderMelons);

