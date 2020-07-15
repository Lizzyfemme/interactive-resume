import desktop from "./palette_desktop.png";
// import cell from "./contact_guy_cell.png";
// import tablet from "./contact_guy_tablet.png";
import styled from "styled-components";
const Palette = styled.div`
  background-image: url(${desktop});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  width: auto;
  z-index: 3;
`;
export default Palette;
