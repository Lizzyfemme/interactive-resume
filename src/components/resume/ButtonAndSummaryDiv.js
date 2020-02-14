import styled from "styled-components";

const ButtonAndSummaryDiv = styled.div`
  display: flex;

  background-color: transparent;
  border: none;
  &:active {
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;
export default ButtonAndSummaryDiv;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
