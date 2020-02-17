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
    width: 200px;
    height: 175px;
  }

  @media screen and (min-width: 660px) {
    width: 350px;
    height: 300px;
    left: 100px;
  }
`;
export default GetInTouch;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }

// width: 350px;
// height: 300px;
