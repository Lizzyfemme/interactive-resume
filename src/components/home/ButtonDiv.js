import styled from "styled-components";

const ButtonDiv = styled.div`
  width: 50vw;
  height: 50vh;
  padding-top: 15vh;
  margin: auto;
  background-color: transparent;
  border: none;
  &:active {
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;
export default ButtonDiv;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
