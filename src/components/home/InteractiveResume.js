import interactiveResume from "./interactive_resume.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const InteractiveResume = styled.button`
  background-image: url(${interactiveResume});
  object-fit: cover;
  height: 300px;
  width: 250px;
  background-size: cover;
  transform: rotate(-20deg);
  &:focus {
    outline: 0;
  }
`;
export default InteractiveResume;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
