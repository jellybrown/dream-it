import styled from "styled-components";
import { COMMON_PADDING } from "./Menu.style";

export const OuterItem = styled.li<{ onClick: any }>`
  padding: 1rem 0;
`;

export const Title = styled.div`
  display: flex;
  padding: 1.4rem ${COMMON_PADDING}rem;
  align-items: center;
  a {
    display: block;
    width: 100%;
    font-size: 2.1rem;
    font-weight: 400;
  }
`;

export const InnerList = styled.ul``;

export const InnerItem = styled.li`
  a {
    display: block;
    padding: 1.2rem 3rem;
    width: 100%;
    font-size: 1.6rem;
    color: #8e8e8e;
  }
`;
