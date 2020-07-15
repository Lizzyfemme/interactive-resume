import styled from "styled-components";

const PaintingContainer = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 25px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 40vw 40vw;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 30vw 30vw;
    grid-gap: 50px;
  }
`;
export default PaintingContainer;

// margin: auto;
// width: 60vw;
// background-color: transparent;
// display: grid;
// grid-template-columns: auto auto;
// grid-gap: 25px;
