import contact_desktop from "./getInTouch.svg";
import styled from "styled-components";

const GetInTouch = styled.button`
  background-image: url(${contact_desktop});
  object-fit: cover;
  width: 602px;
  height: 506px;
  position: fixed;
  top: 75px;
  left: 65px;
  background-size: cover;
  transform: rotate(20deg);
  border: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 450px) {
    width: 205px;
    height: 175px;
  }

  @media screen and (min-width: 700px) {
    width: 250px;
    height: 210px;
    left: 100px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 340px;
    top: 130px;
  }
`;
export default GetInTouch;
