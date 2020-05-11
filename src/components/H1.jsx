//jshint esversion: 9
import React from "react";
import styled from "styled-components";

export default function H1({ text, type }) {
  const Wrapper = styled.h1`
    font-family: ${(props) =>
      props.temperature
        ? '"Fira Sans", sans-serif'
        : '"Varela Round", sans-serif'};
  `;
  return <Wrapper temperature={type}>{text} </Wrapper>;
}
