// Weather.js

import React, { useState, useEffect } from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import Header from "./Header";
import Footer from "./Footer";
import App from "../App.css"; // Import the CSS file

const api = {
  key: "c70b7c89e5e525983b5acd571c707a37",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [localTime, setLocalTime] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.cod && result.cod === "404") {
          // City not found
          setWeather(null); // Reset weather state
        } else {
          setWeather(result);
          fetchCityTime(result);
          fetchWeatherIcon(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const fetchCityTime = (result) => {
    if (result && result.timezone) {
      const currentTime = new Date().getTime();
      const offset = new Date().getTimezoneOffset() * 60000;
      const localTime = new Date(currentTime + offset + result.timezone * 1000)
        .toLocaleTimeString("en-US");
      setLocalTime(localTime);
    }
  };

  const fetchWeatherIcon = (result) => {
    if (result && result.weather && result.weather[0]) {
      const iconCode = result.weather[0].icon;
      setWeatherIcon(iconCode);
    }
  };

  useEffect(() => {
    if (weather && weather.timezone) {
      fetchCityTime(weather);
      fetchWeatherIcon(weather);
    }
  }, [weather]);

  return (
    <>
      <div className="bg4">
        <Header />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search any place"
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} className="search-button">
            Get Weather
          </button>
        </div>
        <div className="weather-info">
          {(weather && weather.name) ? (
            <>
              <h4 style={{ color: "white", marginTop: "20px" }}>{weather.name}, {weather.sys.country}</h4>
              <div className="weather-icon">
                {weatherIcon && (
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
                    alt="Weather Icon"
                    style={{ width: "60px", height: "60px" }}
                  />
                )}
              </div>
              {weather.main && (
                <div className="temperature-info">
                  <p style={{ color: "white", fontSize: "50px",color:'#F8DC7B' }}>{weather.main.temp}&deg; C</p>
                  <p style={{ color: "white" }}>feels_like: {weather.main.feels_like} </p>
                  <br></br>
                  <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      {weather.main.humidity !== undefined && (
                        <>
                          <p style={{ color: "white" , fontSize:"25px" ,paddingLeft:"20px" }}>
                            Humidity: <WiHumidity /> {weather.main.humidity}%
                          </p>
                          <p style={{ color: "white", fontSize:"25px" ,paddingLeft:"20px" }}>Description: {weather.weather[0].description} </p>
                        </>
                      )}
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      {weather.wind && weather.wind.speed !== undefined && (
                        <div className="wind-info">
                          <p style={{ color: "white" ,fontSize:"25px" ,paddingLeft:"20px"}}>
                            Wind: <WiStrongWind /> {weather.wind.speed} m/s
                          </p>
                        </div>
                      )}
                      {localTime && <p style={{ color: "white",fontSize:"25px" ,paddingLeft:"20px" }}>Local Time: {localTime}</p>}
                    </div>
                  </div>
                </div>
</div>              )}
            </>
          ) : (
            search.trim() !== "" && (
              <p style={{ color: "white", padding: "20px" }}>City not found. Please try again.</p>
            )
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
