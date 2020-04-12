import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  position: relative;
  background-color: transparent;
  border: none;
  font-family: main;
  & h1 {
    font-family: main_bold;
    margin: 0;
    font-size: 42px;
    border-bottom: 5px;
    border-bottom-width: thick;
    border-bottom-style: solid;
  }
  @media screen and (min-width: 570px) {
    & h1 {
      font-size: 60px;
    }
  }
`;
export default Content;
