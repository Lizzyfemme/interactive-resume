import styled from "styled-components";
import { dark, light } from "../../styles/colors.js";
import { Abolition } from "../../styles/fonts";

const Summary = styled.div`
  background-color: ${light};
  color: ${dark};
  width: 400px;
  font-family: ${Abolition};
  padding: 10px;
  margin: 10px;
`;

export default Summary;
