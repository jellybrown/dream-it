import { OuterList, Svg, TopContent, Wrapper } from "./Menu.style";
import CloseIcon from "../../public/close.svg";
import HomeIcon from "../../public/home.svg";
import { menuData } from "./menuData";
import MenuItem from "./MenuItem";

import { useState } from "react";
import { changeOuterMenu, MenuId } from "../../redux/postsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface MenuProps {
  openedMenu: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ openedMenu, toggleMenu }) => {
  const dispatch = useAppDispatch();
  const outerMenu = useAppSelector((state) => state.posts.currentMenu.oneDepth);
  //   const [openedSubMenuId, setSubMenuId] = useState<MenuId>("intro");

  const onChangeSubMenuId = (stringId: string) => {
    dispatch(changeOuterMenu(stringId));
  };

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
            opened={outerMenu === data.id}
            onChangeSubMenuId={onChangeSubMenuId}
          />
        ))}
      </OuterList>
    </Wrapper>
  );
};

export default Menu;
