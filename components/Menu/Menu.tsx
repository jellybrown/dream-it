import { OuterList, Svg, TopContent, Wrapper } from "./Menu.style";
import CloseIcon from "../../public/close.svg";
import { menuData } from "./menuData";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <Wrapper>
      <TopContent>
        <h1>Dream It</h1>
        <Svg className="close">
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
