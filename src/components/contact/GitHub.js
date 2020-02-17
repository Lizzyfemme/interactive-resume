import github from "./github.png";
// import cell from "./github_cell.png";
import styled from "styled-components";

const GitHub = styled.button`
  background-image: url(${github});
  object-fit: cover;
  margin-left: auto;
  margin-top: 10px;
  border: none;
  height: 115px;
  width: 100px;
  background-color: transparent;
  background-size: cover;
  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 600px) {
    height: 230px;
    width: 200px;
  }
  @media screen and (min-width: 1000px) {
    height: 338px;
    width: 300px;

    @media screen and (min-width: 1400px) {
      height: 400px;
      width: 355px;
    }
`;
export default GitHub;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
