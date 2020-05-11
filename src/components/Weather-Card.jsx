//jshint esversion: 9
import React from "react";
import styled from "styled-components";
import Location from "./Location";
import H1 from "./H1";
import H3 from "./H3";

const Img = styled.img`
  margin: 0 auto;
`;
export default function WeatherCard({
  temp,
  city,
  country,
  icon,
  description,
}) {
  let start, end;
  if (temp <= 12) {
    let high = ((12 - temp) / 42) * 255;
    let low = high - 150;
    start = `rgb(0, ${high}, 255)`;
    end = `rgb(0,${low},255)`;
  } else if (temp > 12) {
    let high = (1 - (temp - 12) / 38) * 255;
    let low = high - 150;
    start = `rgb(255,${high},0)`;
    end = `rgb(255,${low},0)`;
  }

  const Wrapper = styled.div`
    color: white;
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
    width: 240px;
    max-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-image: linear-gradient(to top, ${start}, ${end});
    box-shadow: 8px 4px 3px 6px rgba(0, 0, 255, 0.2);
  `;

  return (
    <Wrapper>
      <Location city={city} country={country} />
      <Img src={icon} alt="Weather Icon" />
      <H1 type="temperature" big="size" text={`${temp} °C`} />
      <H3 text={description} />
    </Wrapper>
  );
}
