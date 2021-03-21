import styled from "styled-components";

import desktopPic from "./hippo_desktop.png";
import tabletPic from "./hippo_tablet.jpg";
import phonePic from "./hippo_phone.jpg";


const ContactBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-image:url(${phonePic});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  @media screen and (min-width: 525px) {
    background-image:url(${tabletPic});
  }
  @media screen and (min-width: 1100px) {
    background-image:url(${desktopPic});
  }
`;
export default ContactBackground;
