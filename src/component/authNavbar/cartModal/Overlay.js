import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const Overlay = styled.div`
  background-color: rgba(128, 128, 128, 0.5);
  position: fixed;
  z-index: 2;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  display: ${({ open }) => (open ? "block" : "none")};
`;
