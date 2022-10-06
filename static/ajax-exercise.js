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

  // melon_type in formInputs needs to be the exact variable name as what's in server.py.
  // request.json.get('melon_type')
  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };
  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((jsonResponse) => {
      document.querySelector('#order-status').innerHTML = jsonResponse.msg;
      if (jsonResponse.code === 'ERROR') {
        console.log('in if')
        document.querySelector('#order-status').classList.add('order-error');
      }
    });

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

}
document.querySelector('#order-form').addEventListener('submit', orderMelons);

// Further Study
document.querySelector('#get-dog-image').addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((jsonResponse) => {
      const imgUrl = jsonResponse.message;
      document
        .querySelector('#dog-image')
        .insertAdjacentHTML('beforeend', `<div><img src=${imgUrl}></div>`);
    });
});


