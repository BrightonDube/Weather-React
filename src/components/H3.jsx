//jshint esversion: 9
import React from "react";
import styled from "styled-components";

const Wrapper = styled.h3`
  font-family: "Varela Round", sans-serif;
`;
export default function H3({ text }) {
  return <Wrapper>{text}</Wrapper>;
}
