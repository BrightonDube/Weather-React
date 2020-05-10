//jshint esversion: 9
import React from "react";
import styled from "styled-components";
import "./App.css";
import WeatherCard from "./components/Weather-Card";

function App() {
  const Wrapper = styled.div`
    min-height: 100vh;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 1000px 80px;
    grid-gap: 1.5rem;
  `;
  return (
    <Wrapper>
      <WeatherCard />
      <WeatherCard />
    </Wrapper>
  );
}

export default App;
