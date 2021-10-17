import styled from "styled-components";
import { backgroundColor } from "../styles/colors/Color";
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 240px;
  background-color: ${backgroundColor};
  z-index: 11;
  transition: all 0.35s ease-in-out;
  transform: ${({ showSidebar }) =>
    showSidebar ? "translateX(0%)" : "translateX(-100%)"};
`;
