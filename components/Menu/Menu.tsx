import { OuterList, Svg, TopContent, Wrapper } from "./Menu.style";
import CloseIcon from "../../public/close.svg";
import HomeIcon from "../../public/home.svg";
import { menuData } from "./menuData";
import MenuItem from "./MenuItem";

interface MenuProps {
  openedMenu: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ openedMenu, toggleMenu }) => {
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
          <MenuItem data={data} />
        ))}
      </OuterList>
    </Wrapper>
  );
};

export default Menu;
