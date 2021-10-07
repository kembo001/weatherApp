// fetch
// fetch("https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
// 		"x-rapidapi-key": "3b927d5230mshbfb31e7e4a7d896p147e62jsn7142af571498"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });




// selectors 
var API_KEY = "09243ce323687d1e2cca04c05b950491";
var date = document.getElementById('date');
var city = document.getElementById('city');
var temp = document.getElementById('temp');
var wind = document.getElementById('wind');
var humidity = document.getElementById('humidity');
var uxIndex = document.getElementById('uxIndex');
var searchBar = document.getElementById('searchBar');
var btn = document.getElementById('btn');
var uxIndex = document.getElementById('uxIndex');

// global variables



// functions
function showWeatherData(data){

}
// getWeatherData()
// function getWeatherData(city){
//     navigator.geolocation.getCurrentPosition((success) =>{
//         console.log(success);

//         // var {latitude, longitude} = success.coords;
//         fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city 
//         +"&units=metric&appid=" 
//         +  API_KEY)
//         .then(response => response.json())
//         .then((data) => {

//             console.log(data)
//             showWeatherData(data);
//         })
//     })
// }

function getWeatherData(){
    var inputCity = searchBar.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}&units=imperial`)
        .then(response => response.json())
        .then((data) => {

            console.log(data)
            // showWeatherData(data);
            //within here perform another fetch request to the OneCall API in the weather documentation

        })
}

btn.addEventListener("click", getWeatherData)

// function showWeatherData(data){
    
// }
// getWeatherData()
// function getWeatherData(){
//     fetch("api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}").then((response)=> response.json())
//     .then((data) => console.log(data));
// }
// execute code
