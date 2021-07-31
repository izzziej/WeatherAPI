var userFormEl = document.querySelector('#user-form');
var cityInputEl = document.querySelector('#city');
var button = document.querySelector('.submit')

localStorage.setItem(cityInputEl)
function Form() {
    var input = document.getElementById("user-form").value;
    alert(input);
}

var formSubmitHandler = function (event) {
  event.preventDefault();

  var city = cityInputEl.value.trim();

  if (city) {
    getWeather(city);

  } else {
    alert('Please enter in a City');
  }
};

var getWeather = function (user) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInputEl.value+'bb5560b70758058ea0163b85a33c91a6')
 
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayWeather(data, user);
        });
      } else {
        alert('Error: ' + Error);
      }
    })
    .catch(function (error) {
      alert('Unable to get weather');
    });
};

userFormEl.addEventListener('submit', formSubmitHandler);
languageButtonsEl.addEventListener('click', buttonClickHandler);

