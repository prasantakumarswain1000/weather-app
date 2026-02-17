const cityName = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const pressure = document.getElementById('pressure');
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');
const weatherIcon = document.getElementById('weatherIcon');
serchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const city = serchInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
      .then(response => response.json())
      .then(data => {   
        if (data.cod === 200) {
          cityName.textContent = data.name;
          humidity.textContent = `Humidity: ${data.main.humidity}%`;
          wind.textContent = `Wind: ${data.wind.speed} km/h`;
          pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
          description.textContent = data.weather[0].description;
          temperature.textContent = `${Math.round(data.main.temp)}°C`;
          weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;     }})
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });   }});