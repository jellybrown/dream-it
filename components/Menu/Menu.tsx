import { OuterList, Svg, TopContent, Wrapper } from "./Menu.style";
import CloseIcon from "../../public/close.svg";
import HomeIcon from "../../public/home.svg";
import { menuData } from "./menuData";
import MenuItem from "./MenuItem";

import { useState } from "react";

interface MenuProps {
  openedMenu: boolean;
  toggleMenu: () => void;
}

export type MenuId = "intro" | "business" | "opened" | "volunteer";

const Menu: React.FC<MenuProps> = ({ openedMenu, toggleMenu }) => {
  const [openedSubMenuId, setSubMenuId] = useState<MenuId>("intro");

  return (
    <Wrapper opened={openedMenu}>
      <TopContent>
        <Svg className="home">
          <HomeIcon width="30" height="30" />
        </Svg>
        <Svg className="close" onClick={toggleMenu}>
          <CloseIcon />
        </Svg>
      </TopContent>
      <OuterList>
        {menuData.map((data) => (
          <MenuItem
            key={data.id}
            data={data}
            opened={openedSubMenuId === data.id}
            setSubMenuId={setSubMenuId}
          />
        ))}
      </OuterList>
    </Wrapper>
  );
};

export default Menu;
