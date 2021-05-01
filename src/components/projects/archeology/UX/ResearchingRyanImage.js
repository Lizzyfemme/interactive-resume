import styled from "styled-components";

import desktopPic from "../../images/researching_ryan.png";
import tabletPic from "../../images/researching_ryan.png";
import phonePic from "../../images/researching_ryan.png";


const ContactBackground = styled.div`
  height: 100vw;
  width: 100vw;
  background-image:url(${phonePic});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  @media screen and (min-width: 525px) {
    background-image:url(${tabletPic});
    height: 500px;
    width: 500px;
  }
  @media screen and (min-width: 1100px) {
    background-image:url(${desktopPic});
    height: 500px;
    width: 500px;
  }
`;
export default ContactBackground;
