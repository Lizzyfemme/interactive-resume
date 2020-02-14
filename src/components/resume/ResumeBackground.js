import styled from "styled-components";
import desktop_image from "./josephine-bredehoft-unsplash.jpg";

const ResumeBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${desktop_image});
  background-position: center top;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
export default ResumeBackground;
