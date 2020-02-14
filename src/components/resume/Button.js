import styled from "styled-components";
import { dark, light } from "../../styles/colors.js";
import { bello } from "../../styles/fonts";

const Button = styled.button`
  width: 150px;
  height: 80px;
  color: ${light};
  margin: 10px;
  background-color: ${dark};
  border: none;
  font-family: ${bello};
  font-size: 28px;
`;
export default Button;
