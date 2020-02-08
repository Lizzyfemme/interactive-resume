import home from "./home.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const Home = styled.button`
  background-image: url(${home});
  object-fit: cover;
  height: 145px;
  width: 190px;
  background-size: cover;

  &:focus {
    outline: 0;
  }
`;
export default Home;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
