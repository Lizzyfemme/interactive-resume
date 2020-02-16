import styled from "styled-components";
import { dark } from "../../styles/colors.js";

const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 100vh;
  position: sticky;

  top: 0;
  left: 0;

  background-color: ${dark};
`;
export default NavDiv;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
