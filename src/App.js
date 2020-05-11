//jshint esversion: 9
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import "./App.css";
import WeatherCard from "./components/Weather-Card";

function App() {
  const API_KEY = "2b807d1ac4eecb9fa1025ea5f19c7f47";
  const [city, setCity] = useState("London");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  //Fetch posts from subreddit and store them in state
  const [data, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //use effect is used to store the returned posts in state
  //it must have an empty array as a second argument to avoid re-fetching infinitely.
  useEffect(() => {
    //use fetch to get data from API and destructure it
    async function getWeather() {
      const response = await axios(url);
      setIsLoading(true);
      setWeather(response.data);
      setIsLoading(false);
    }
    getWeather();
  }, [url]);
  const { main } = data;

  console.log(main);
  let temperature = -30;
  const iconUrl =
    "https://cdn0.iconfinder.com/data/icons/weather-filled-outline-6/64/weather_cloud_sun_moon_rain-49-128.png";
  const Wrapper = styled.div`
    min-height: 100vh;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 1000px 80px;
    grid-gap: 1.5rem;
  `;
  return isLoading ? (
    <div>"Loading..."</div>
  ) : (
    <Wrapper>
      <WeatherCard
        temp={temperature}
        icon="https://cdn0.iconfinder.com/data/icons/weather-filled-outline-6/64/weather_cloud_sun_moon_rain-21-128.png"
        city={city}
        country={`AU`}
        description={`Clouds`}
      />
      <WeatherCard
        temp={20}
        city="Wellington"
        icon={iconUrl}
        country="NZ"
        description={`Clouds`}
      />
    </Wrapper>
  );
}

export default App;
