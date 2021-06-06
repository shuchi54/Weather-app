// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 6bcf7f811b08ea13f1364232af815860

const weatherApi = {
  key: "6bcf7f811b08ea13f1364232af815860",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


//event listener function on keypress
const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {

  if(event.keyCode == 13){
  console.log(searchInputBox.value);
  getWeatherReport(searchInputBox.value);
  document.querySelector('.weather-body').style.display = "block";
  }


});


//get weather reports

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
  .then(weather => {
    return weather.json();
  }).then(showWeatherReport);
}


//show weather report
function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById('city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.getElementById('temp');
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxTemp = document.getElementById('min-max');
  minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;`

  let weatherType = document.getElementById('weather');
  weatherType.innerText = `${weather.weather[0].main}`;

  let date = document.getElementById('date');
  let todayDate =  new Date();
  date.innerText = dateManage(todayDate);
  if(weatherType.textContent == 'Clear'){
    document.body.style.backgroundImage = "url('images/clear.jfif')";
  } 
  else if(weatherType.textContent == 'Clouds') {
    document.body.style.backgroundImage = "url('images/cloud.jpg')";
    console.log("here");
  }
  else if(weatherType.textContent == 'Rain') {
    document.body.style.backgroundImage = "url('images/rain.jpg')";
  }

  else if(weatherType.textContent == 'Snow') {
    document.body.style.backgroundImage = "url('images/snow.png')";
  }

  else if(weatherType.textContent == 'Sunny') {
    document.body.style.backgroundImage = "url('images/sunny.jpg')";
  }

  else if(weatherType.textContent == 'Thunderstorm') {
    document.body.style.backgroundImage = "url('images/thunderstorm.jfif')";
  }
  else if(weatherType.textContent == 'Haze') {
    document.body.style.backgroundImage = "url('images/haze.jpg')";
  }

  else if(weatherType.textContent == 'Smoke') {
    document.body.style.backgroundImage = "url('images/smoke.jfif')";
  }




}


//date manage
function dateManage(dateArg){
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

  let months = ["January", "February", "March", "April" , "May", "June", "July", "August", "September", "October", "November", "December"];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return  `${date} ${month} (${day}) , ${year}`;
  
}
