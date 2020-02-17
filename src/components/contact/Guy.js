import desktop from "./contact_guy_desktop.png";
import cell from "./contact_guy_cell.png";
import tablet from "./contact_guy_tablet.png";
import styled from "styled-components";

const Guy = styled.div`
  height: 350px;
  width: 220px;
  position: fixed;
  bottom: 0;
  z-index: 2;

  background-image: url(${cell});

  background-size: cover;
  @media screen and (min-width: 600px) {
    height: 500px;
    width: 300px;
  }
  @media screen and (min-width: 1000px) {
    background-image: url(${tablet});
    height: 600px;
    width: 350px;

    @media screen and (min-width: 1400px) {
      background-image: url(${desktop});
      height: 700px;
      width: 450px;
`;
export default Guy;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
