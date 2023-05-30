import styled from "styled-components";
import signupVerImage from "../Assets/verification-image.png";

// eslint-disable-next-line import/prefer-default-export
export const RightSideImage = styled.div`
  width: 50%;
  min-height: 100vh;
  background-image: url(${signupVerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 830px) {
    display: none;
  }
`;
