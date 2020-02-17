// import cell from "./home_cell.png";
import home from "./home.png";
import styled from "styled-components";

const Home = styled.button`
  background-image: url(${home});
  object-fit: cover;
  height: 100px;
  width: 130px;
  border: none;
  justify-self: start;
  background-color: transparent;
  background-size: cover;

  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 600px) {
    height: 200px;
    width: 260px;
  }
  @media screen and (min-width: 1000px) {
    height: 229px;
    width: 300px;
  }
  @media screen and (min-width: 1000px) {
    height: 305px;
    width: 400px;
  }
`;
export default Home;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
