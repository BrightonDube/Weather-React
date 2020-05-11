//jshint esversion: 9
import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
  font-size: ${(props) => (props.size ? "3rem" : "2.2rem")};
  font-family: ${(props) =>
    props.temperature
      ? '"Fira Sans", sans-serif'
      : '"Varela Round", sans-serif'};
`;
export default function H1({ text, type, big }) {
  return (
    <Wrapper size={big} temperature={type}>
      {text}
    </Wrapper>
  );
}
