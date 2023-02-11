import { weather_data } from './data.js';


let loadDayForecastData = () => {
    const city = document.getElementById("city")
    city.innerHTML = weather_data[0]["city"]
    
    const date = document.getElementById("date")
    date.innerHTML = weather_data[0]["date"]
    
    const maxtemperature = document.getElementById("maxtemperature")
    maxtemperature.innerHTML = weather_data[0]["maxtemperature"]
    
    const mintemperature = document.getElementById("mintemperature")
    mintemperature.innerHTML = weather_data[0]["mintemperature"]
    
    const cloudiness = document.getElementById("cloudiness")
    cloudiness.innerHTML = weather_data[0]["cloudiness"]
    
    const wind = document.getElementById("wind")
    wind.innerHTML = weather_data[0]["wind"]

    const rainfall = document.getElementById("rainfall")
    rainfall.innerHTML = weather_data[0]["rainfall"]
    
    const late_text = document.getElementById("late_text")
    late_text.innerHTML = weather_data[0]["forecast_today"][0]["temperature"]
   
    const late_temperature = document.getElementById("late_temperature")
    late_temperature.innerHTML = weather_data[0]["forecast_today"][0]["text"]

    
    const late_forecast = document.getElementById("late_forecast")
    late_forecast.innerHTML = weather_data[0]["forecast_today"][0]["forecast"]

    const late_icon = document.getElementById("late_icon")
    late_icon.innerHTML = weather_data[0]["forecast_today"][0]["icon"]

    const night_text = document.getElementById("night_text")
    night_text.innerHTML = weather_data[0]["forecast_today"][1]["text"]

    const night_temperature = document.getElementById("night_temperature")
    night_temperature.innerHTML = weather_data[0]["forecast_today"][1]["temperature"]

    const night_forecast = document.getElementById("night_forecast")
    night_forecast.innerHTML = weather_data[0]["forecast_today"][1]["forecast"]

    const night_icon = document.getElementById("night_icon")
    night_icon.innerHTML = weather_data[0]["forecast_today"][1]["icon"]

}

let loadWeekForecastData = () => {
	
	
}


loadDayForecastData();
loadWeekForecastData();