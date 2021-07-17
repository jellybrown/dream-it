import {
  OuterItem,
  OuterList,
  Svg,
  Title,
  TopContent,
  Wrapper,
} from "./Menu.style";
import NextArrowIcon from "../../public/arrow-next.svg";
import CloseIcon from "../../public/close.svg";
import { menuData } from "./menuData";
import SubMenu from "./SubMenu";

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
          <OuterItem key={data.id}>
            <Title>
              <a>{data.title}</a>
              <Svg className="next">
                <NextArrowIcon />
              </Svg>
            </Title>
            <SubMenu data={data.subMenu} />
          </OuterItem>
        ))}
      </OuterList>
    </Wrapper>
  );
};

export default Menu;
