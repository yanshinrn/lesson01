document.getElementById('searchButton').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  if (city) {
      displayWeather(city);
  }
});

function displayWeather(city) {
  const weatherData = getWeatherData(city);
  if (weatherData) {
      const { description, temperature } = weatherData;
      document.getElementById('weatherResult').innerHTML = `
          <h2>${city}の天気</h2>
          <p>天気: ${description}</p>
          <p>気温: ${temperature}°C</p>
      `;
  } else {
      document.getElementById('weatherResult').innerText = '天気情報が見つかりませんでした';
  }
}

function getWeatherData(city) {
  const data = {
      '東京': { description: '晴れ', temperature: 25 },
      '大阪': { description: '曇り', temperature: 22 },
      '札幌': { description: '雨', temperature: 18 }
  };

  return data[city] || null;
}
