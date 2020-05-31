//jshint esversion: 9
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import "./App.css";
import WeatherCard from "./components/Weather-Card";

//Styled components
const Wrapper = styled.div`
  min-height: 100vh;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: 1000px 80px;
  grid-gap: 1.5rem;
`;

function App() {
  //Logic
  const API_KEY = "2b807d1ac4eecb9fa1025ea5f19c7f47";
  const [city, setCity] = useState("Johannesburg");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  //Fetch posts from subreddit and store them in state
  const [data, setData] = useState({
    city: "",
    country: "",
    icon: "",
    temp: "",
    condition: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  //use effect is used to store the returned posts in state
  //it must have an empty array as a second argument to avoid re-fetching infinitely.
  useEffect(() => {
    //use fetch to get data from API and destructure it
    async function getWeather() {
      const response = await axios(url);
      setIsLoading(true);
      const weather = await response.data;
      setData({
        city: weather.name,
        country: weather.sys.country,
        icon: weather.weather[0].icon,
        temp: Math.round(weather.main.temp),
        description: weather.weather[0].description,
      });
      setIsLoading(false);
    }
    getWeather().catch((err) => console.log(err));
  }, [url]);

  let temperature = data.temp;

  const iconUrl = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;

  return isLoading ? (
    <div>"Loading..."</div>
  ) : (
    <Wrapper>
      <WeatherCard
        temp={temperature}
        icon={iconUrl}
        city={data.city}
        country={data.country}
        description={data.description}
      />
    </Wrapper>
  );
}

export default App;
