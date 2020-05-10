//jshint esversion: 9
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;
const H1 = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
  font-family: ${(props) =>
    props.temperature ? '"Fira Sans"' : '"Varela Round"'};
`;
const H3 = styled.h3`
  font-family: "Varela Round", sans-serif;
`;

function Location() {
  return (
    <Wrapper>
      <H1>Sidney</H1>
      <H3>AU</H3>
    </Wrapper>
  );
}
export default Location;
export { H1, H3 };
