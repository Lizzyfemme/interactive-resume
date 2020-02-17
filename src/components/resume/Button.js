import styled from "styled-components";
import { dark } from "../../styles/colors.js";
// import { bello } from "../../styles/fonts";

const Button = styled.button`
  border: none;
  background-color: ${dark};
  margin: 0;
  margin-top: 10px;
  margin-bottom: 5px;
  &:active {
    outline: 0;
    color: transparent;
  }
`;
export default Button;
