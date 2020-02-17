// import cell from "./email_cell.png";
import email from "./email.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const Email = styled.button`
  background-image: url(${email});
  object-fit: cover;
  height: 105px;
  width: 140px;
  justify-self: end;
  align-self: end;
  background-color: transparent;
  background-size: cover;
  border: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 600px) {
    width: 280px;
    height: 210px;
  }
  @media screen and (min-width: 1000px) {
    height: 227px;
    width: 300px;
  }
  @media screen and (min-width: 1400px) {
    height: 302px;
    width: 400px;
  }
`;
export default Email;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
