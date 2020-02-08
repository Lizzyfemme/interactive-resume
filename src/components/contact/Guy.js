import desktop_guy from "./contact_guy.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const Guy = styled.div`
  height: 520px;
  width: 300px;
  position: fixed;

  z-index: 2;

  background-image: url(${desktop_guy});

  background-size: cover;
`;
export default Guy;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
