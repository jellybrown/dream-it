import React, { ReactNode } from "react";
import useToggle from "../../hooks/useToggle";
import MenuIcon from "../../public/menu.svg";
import Menu from "../Menu/Menu";
import { LayoutContent, LayoutWrapper, Svg } from "./Layout.style";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [openedMenu, toggleMenu] = useToggle(true);

  return (
    <LayoutWrapper>
      <Menu openedMenu={openedMenu} toggleMenu={toggleMenu} />
      <LayoutContent openedMenu={openedMenu}>
        <Svg openedMenu={openedMenu} onClick={toggleMenu}>
          <MenuIcon width="25" height="25" fill="gray" />
        </Svg>
        {children}
        <footer>
          <span>I'm here to stay (Footer)</span>
        </footer>
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default Layout;
