import React from "react";
import { ReactComponent as HomeSVG } from "./svg/home.svg";
import styled from "styled-components";

const HomeButton = styled.button`
  height: 100px;
  width: 130px;
  border: none;
  justify-self: start;
  background-color: transparent;
  background-size: cover;

  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 600px) {
    height: 200px;
    width: 260px;
  }
  @media screen and (min-width: 1000px) {
    height: 229px;
    width: 300px;
  }
  @media screen and (min-width: 1000px) {
    height: 305px;
    width: 400px;
  }
`;
export default function Home() {
  return (
    <HomeButton>
      <HomeSVG />
    </HomeButton>
  );
}
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
