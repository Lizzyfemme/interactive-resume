// import cell from "./linkedin_cell.png";
import linkedin from "./linkedin.png";

import styled from "styled-components";

const LinkedIn = styled.button`
  background-image: url(${linkedin});
  object-fit: cover;
  height: 100px;
  width: 100px;
  margin-left: 75px;
  border: none;
  background-color: transparent;
  background-size: cover;

  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 600px) {
    height: 200px;
    width: 200px;
  }
  @media screen and (min-width: 1000px) {
    height: 300px;
    width: 300px;
  }
  @media screen and (min-width: 1400px) {
    height: 400px;
    width: 400px;
  }
`;
export default LinkedIn;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
