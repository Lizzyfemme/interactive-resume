import desktop_image from "./leone-venter-unsplash.jpg";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const HomeBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${desktop_image});
  background-position: center top;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
export default HomeBackground;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
