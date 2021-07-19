import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const LayoutContent = styled.div<{ openedMenu: boolean }>`
  width: ${({ openedMenu }) => (openedMenu ? "calc(100% - 300px)" : "100%")};
  transition: 0.3s;
  position: absolute;
  right: 0;
  top: 0;
  min-height: 100vh;
`;

export const Svg = styled.span<{ openedMenu: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
  visibility: ${({ openedMenu }) => (openedMenu ? "hidden" : "visible")};
  opacity: ${({ openedMenu }) => (openedMenu ? "0" : "1")};
  transition: ${({ openedMenu }) => (openedMenu ? "0" : "1s")};
  transition-delay: ${({ openedMenu }) => (openedMenu ? "0" : "0.5s")};
`;
