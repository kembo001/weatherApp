
// selectors 
var API_KEY = "09243ce323687d1e2cca04c05b950491";
var uxIndex = document.getElementById('uxIndex');
var searchBar = document.getElementById('searchBar');
var btn = document.getElementById('btn');

// global variables



// functions
function getWeatherData(inputCity){
    var inputCity = searchBar.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=imperial`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherData);
} 

var list = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var mS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function showWeatherData(weather){
    console.log(weather)
    let city = document.getElementById('city');
    let dateEL = document.getElementById('date');
    setInterval(()=>{
        const time = new Date();
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();
    
        dateEL.innerHTML = list[day] + `, ` + date+ ` `+ mS[month]
    }, 1000);

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
