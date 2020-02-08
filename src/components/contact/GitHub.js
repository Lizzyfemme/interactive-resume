import github from "./github.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const GitHub = styled.button`
  background-image: url(${github});
  object-fit: cover;
  margin-left: auto;
  margin-top: 15px;
  border: none;
  height: 225px;
  width: 200px;
  background-color: transparent;
  background-size: cover;
  &:focus {
    outline: 0;
  }
`;
export default GitHub;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
