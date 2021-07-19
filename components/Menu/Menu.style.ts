import styled from "styled-components";

export const COMMON_PADDING = 2.8; // 양옆 공통여백

export const Wrapper = styled.aside<{ opened: boolean }>`
  width: 300px;
  height: 100vh;
  position: fixed;
  background-color: #f8f8f8;
  left: ${({ opened }) => (opened ? "0" : "-300px")};
  transition: 0.3s;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${COMMON_PADDING}rem;
  margin: 2rem 0 2.5rem 0;

  h1 {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    background-color: #2f2f2f;
    padding: 1rem 2rem;
  }
`;

export const Svg = styled.span<{ onClick?: any }>`
  cursor: pointer;

  &.close svg {
    transform: scale(0.8);
  }
  &.next svg {
    width: 12px;
    fill: #878787;
  }
`;

export const OuterList = styled.ul``;
