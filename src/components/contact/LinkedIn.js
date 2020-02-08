import linkedin from "./linkedin.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const LinkedIn = styled.button`
  background-image: url(${linkedin});
  object-fit: cover;
  height: 202px;
  width: 200px;
  background-size: cover;

  &:focus {
    outline: 0;
  }
`;
export default LinkedIn;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
