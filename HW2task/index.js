// script.js
const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио', 'Париж'];
const temperatures = [];

for (let city of cities) {
  let temperature = parseFloat(prompt(`Введите температуру для города ${city}:`));
  temperatures.push(temperature);
}

const temperatureList = document.createElement('ul');

for (let i = 0; i < cities.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
  temperatureList.appendChild(listItem);
}

document.body.appendChild(temperatureList);

let maxTemperature = -Infinity;
let minTemperature = Infinity;

for (let temperature of temperatures) {
  if (!isNaN(temperature)) {
    maxTemperature = Math.max(maxTemperature, temperature);
    minTemperature = Math.min(minTemperature, temperature);
  }
}

const temperatureInfo = document.createElement('p');
temperatureInfo.textContent = `Максимальная температура: ${maxTemperature}°C, Минимальная температура: ${minTemperature}°C`;
document.body.appendChild(temperatureInfo);
