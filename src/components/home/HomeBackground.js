import desktop_image from "./leone-venter-unsplash.jpg";
import cell_image from "./leone-venter-unsplash-cell.jpg";
import tablet_image from "./leone-venter-unsplash-tablet.jpg";

import styled from "styled-components";

const HomeBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${cell_image});
  background-position: center top;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: right center;
  @media screen and (min-width: 525px) {
    background-image: url(${tablet_image});
    // background-position: left center;
  }
`;
export default HomeBackground;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
