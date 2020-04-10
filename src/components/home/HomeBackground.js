import cell_image from "./leone-venter-unsplash-cell.jpg";
import tablet_image from "./leone-venter-unsplash-tablet.jpg";
import desktop_image from "./leone-venter-unsplash.jpg";

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
  }
  @media screen and (min-width: 1100px) {
    background-image: url(${desktop_image});
  }
`;
export default HomeBackground;
