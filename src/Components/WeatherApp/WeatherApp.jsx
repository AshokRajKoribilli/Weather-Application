import React, { useState } from "react"
import "./WeatherApp.css"

let sunny = "https://cdn-icons-png.flaticon.com/128/869/869869.png"
let cloudy = "https://cdn-icons-png.flaticon.com/128/1146/1146869.png"
let drizzle = "https://cdn-icons-png.flaticon.com/128/2675/2675876.png"
let humidity = "https://cdn-icons-png.flaticon.com/128/1621/1621724.png"
let rain = "https://cdn-icons-png.flaticon.com/128/4088/4088981.png"
let searches = "https://img.icons8.com/?size=1x&id=132&format=png"
let snow = "https://cdn-icons-png.flaticon.com/128/7334/7334205.png"
let wind = "https://cdn-icons-png.flaticon.com/128/237/237853.png"

const WeatherApp = () => {

    let api_key = "b7a08d51f2edbcbd5646b3b7e06d91d1"
    const [wicon, setWicon] = useState(cloudy)


    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === ""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json()
        const hum = document.getElementsByClassName("humidity-percent")
        const win = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        hum[0].innerHTML = data.main.humidity+" %";
        win[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp)+"°c";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon === "01n"){
            setWicon(sunny)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon === "02n"){
            setWicon(cloudy)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon === "03n"){
            setWicon(drizzle)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon === "04n"){
            setWicon(drizzle)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon === "09n"){
            setWicon(rain)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon === "10n"){
            setWicon(rain)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon === "13n"){
            setWicon(snow)
        }
        else{
            setWicon(sunny)
        }

    }

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search"/>
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={searches} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">Dallas</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">20 km/h</div>
                        <div className="text">Wind Spped</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp