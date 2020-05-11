//jshint esversion: 9
import React from "react";
import styled from "styled-components";

export default function H3({ text }) {
  const Wrapper = styled.h3`
    font-family: "Varela Round", sans-serif;
  `;
  return <Wrapper>{text}</Wrapper>;
}
