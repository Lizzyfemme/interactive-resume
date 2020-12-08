import desktop from "./palette_desktop.png";
import styled from "styled-components";

const Palette = styled.div`
  background-image: url(${desktop});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left top;
  height: 100vh;
  width:100%;
  z-index: 3;
  position: absolute;
  top:0;
  left:0;
`;
export default Palette;
