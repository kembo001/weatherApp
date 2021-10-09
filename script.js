
// selectors 
var API_KEY = "09243ce323687d1e2cca04c05b950491";
// var date = document.getElementById('date');
// var city = document.getElementById('city');
var temp = document.getElementById('temp');
// var wind = document.getElementById('wind');
// var humidity = document.getElementById('humidity');
var uxIndex = document.getElementById('uxIndex');
var searchBar = document.getElementById('searchBar');
var btn = document.getElementById('btn');
var uxIndex = document.getElementById('uxIndex');

// global variables



// functions
// function showWeatherData(data){
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity} = data.main;
//     const { speed } = data.wind
//     console.log(name, icon, description, temp, humidity, speed )
// }

// function getWeatherData(inputCity){
//     var inputCity = searchBar.value
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=imperial`)
//         .then(response => response.json())
//         .then((showWeatherData) => {
//         })
//         // showWeatherData()
// } 
function getWeatherData(inputCity){
    var inputCity = searchBar.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=imperial`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherData);
} 
function showWeatherData(weather){
    console.log(weather)
    let city = document.getElementById('city');
    // let date = document.getElementById('date');
    let wind = document.querySelector('.wind');
    let temp = document.querySelector('.temp');
    let humidity = document.querySelector('.humidity');
    city.innerHTML = `${weather.name}`;
    temp.innerHTML = `${weather.main.temp}°F`
    wind.innerHTML = `${weather.wind.speed} MPH`
    humidity.innerHTML = `${weather.main.humidity}%`

}


btn.addEventListener("click", getWeatherData)


// execute code
