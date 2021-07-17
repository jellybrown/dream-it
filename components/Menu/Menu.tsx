import { OuterItem, OuterList, Title, Wrapper } from "./Menu.style";
import NextArrow from "../../public/arrow-next.svg";
import { menuData } from "./menuData";
import SubMenu from "./SubMenu";

const Menu = () => {
  return (
    <Wrapper>
      <OuterList>
        {menuData.map((data) => (
          <OuterItem key={data.id}>
            <Title>
              <a>{data.title}</a>
              <NextArrow />
            </Title>
            <SubMenu data={data.subMenu} />
          </OuterItem>
        ))}
      </OuterList>
    </Wrapper>
  );
};

export default Menu;
