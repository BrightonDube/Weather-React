//jshint esversion: 9
import React from "react";
import styled from "styled-components";
import Location, { H1, H3 } from "./Location";

export default function WeatherCard() {
  const Wrapper = styled.div`
    color: white;
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
    width: 200px;
    max-height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-image: linear-gradient(to top, red, orange);
    box-shadow: 8px 4px 3px 6px rgba(0, 0, 255, 0.2);
  `;
  return (
    <Wrapper>
      <Location />
      <img className="icon" src="" alt="Weather Icon" />
      <H1 temperature>20 &deg;C</H1>
      <H3>Clouds</H3>
    </Wrapper>
  );
}
