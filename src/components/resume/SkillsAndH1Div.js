import styled from "styled-components";
import { dark, highlight } from "../../styles/colors.js";
import { bello } from "../../styles/fonts";

const SkillsAndH1Div = styled.div`
  display: flex;
  flex-direction: column;

  background-color: transparent;
  border: none;
  background-color: ${highlight};
  color: ${dark};
  font-family: ${bello};
`;
export default SkillsAndH1Div;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
