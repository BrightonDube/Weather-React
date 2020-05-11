//jshint esversion: 9
import React from "react";
import styled from "styled-components";
import H1 from "./H1";
import H3 from "./H3";

const Wrapper = styled.div`
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

function Location({ city, country }) {
  return (
    <Wrapper>
      <H1 text={city} type="" />
      <H3 text={country} />
    </Wrapper>
  );
}
export default Location;
export { H1, H3 };
