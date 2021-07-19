import styled from "styled-components";
import { COMMON_PADDING } from "./Menu.style";

export const OuterItem = styled.li`
  padding: 1rem 0;
`;

export const Title = styled.div<{ onClick: any }>`
  display: flex;
  padding: 1.4rem ${COMMON_PADDING}rem;
  align-items: center;
  a {
    display: block;
    width: 100%;
    font-size: 2.1rem;
    font-weight: 400;
    cursor: pointer;
  }
`;

export const InnerList = styled.ul``;

export const InnerItem = styled.li<{ active: boolean }>`
  a {
    display: block;
    padding: 1.8rem 3rem;
    width: 100%;
    font-size: 1.6rem;
    color: #8e8e8e;
    transition: 0.3s;
    background-color: ${({ active }) => (active ? "#eaeaea" : "none")};
    &:hover {
      background-color: ${({ active }) => (active ? "#eaeaea" : "#f1f1f1")};
    }
  }
`;
