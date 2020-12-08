import styled from "styled-components";
import { highlight2, highlight2Gradient } from "../../styles/colors.js";

const ContactBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(0.2turn, ${highlight2Gradient}, ${highlight2});
  z-index: 0;
  position:relative;
`;
export default ContactBackground;
