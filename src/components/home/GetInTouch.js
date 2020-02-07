import getInTouch from "./get_in_touch.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const GetInTouch = styled.button`
  background-image: url(${getInTouch});
  object-fit: cover;
  height: 300px;
  width: 250px;
  margin: 200px;
  background-size: cover;
  transform: rotate(-20deg);
`;
export default GetInTouch;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
