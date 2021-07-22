import React, { ReactNode } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import MenuIcon from "../../public/menu.svg";
import Menu from "../Menu/Menu";
import { LayoutContent, LayoutWrapper, Svg, H1 } from "./Layout.style";

interface Props {
  title?: string;
  children?: ReactNode;
}

// page 안 공통 wrapper
export const CommonWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Layout: React.FC<Props> = ({ title, children }) => {
  const [openedMenu, toggleMenu] = useToggle(true);

  return (
    <LayoutWrapper>
      <Menu openedMenu={openedMenu} toggleMenu={toggleMenu} />
      <LayoutContent openedMenu={openedMenu}>
        <Svg openedMenu={openedMenu} onClick={toggleMenu}>
          <MenuIcon width="25" height="25" fill="gray" />
        </Svg>
        {title && <H1>{title}</H1>}
        {children}
        <footer style={{ backgroundColor: "dodgerblue", padding: "2rem" }}>
          <span style={{ fontSize: "20px" }}>I'm here to stay (Footer)</span>
        </footer>
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default Layout;
