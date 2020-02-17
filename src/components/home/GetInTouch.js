import contact_desktop from "./contact_desktop.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const GetInTouch = styled.button`
  background-image: url(${contact_desktop});
  object-fit: cover;
  width: 100px;
  height: 85px;
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
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
