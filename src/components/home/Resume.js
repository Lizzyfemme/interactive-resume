import resume_desktop from "./resume_desktop.png";
// import resume_tablet from "./resume_tablet.png";
// import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const InteractiveResume = styled.button`
  background-image: url(${resume_desktop});
  object-fit: cover;
  height: 100px;
  width: 85px;
  background-size: cover;
  transform: rotate(-20deg);
  border: none;
  background-color: transparent;
  position: fixed;
  top: 150px;
  left: 100px;
  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 450px) {
    height: 200px;
    width: 175px;
    top: 250px;
    left: 130px;
  }

  @media screen and (min-width: 660px) {
    height: 300px;
    width: 250px;
    left: 230px;
  }
`;
export default InteractiveResume;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
