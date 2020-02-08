import email from "./email.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const GitHub = styled.button`
  background-image: url(${email});
  object-fit: cover;
  height: 150px;
  width: 200px;
  margin-top: 50px;
  margin-left: 10px;
  background-color: transparent;
  background-size: cover;
  border: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
`;
export default GitHub;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
