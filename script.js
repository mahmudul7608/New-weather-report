function searchWeather() {
  var cityName = document.getElementById('search-input').value;


  var dummyData = {
      city: cityName,
      time: '12:00 PM',
      temperature: '25°C'
  };

  displayWeather(dummyData);
}

function displayWeather(data) {
  document.getElementById('city-name').innerText = data.city;
  document.getElementById('current-time').innerText = 'Current Time: ' + data.time;
  document.getElementById('temperature').innerText = 'Temperature: ' + data.temperature;
}