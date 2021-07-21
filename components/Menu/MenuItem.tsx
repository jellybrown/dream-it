import React, { Dispatch, SetStateAction } from "react";
import { InnerItem, InnerList, OuterItem, Title } from "./MenuItem.style";
import NextArrowIcon from "../../public/arrow-next.svg";
import DownArrowIcon from "../../public/arrow-down.svg";
import { Svg } from "./Menu.style";

interface Item {
  id: string;
  title: string;
  subMenu: any[];
}

interface MenuItemProps {
  data: Item;
  opened: boolean;
  setSubMenuId: Dispatch<SetStateAction<string>>;
}

const MenuItem: React.FC<MenuItemProps> = ({ data, opened, setSubMenuId }) => {
  const activeMenuName = "오시는 길";
  const menuId: string = data.id;

  return (
    <OuterItem>
      <Title onClick={() => setSubMenuId(menuId)}>
        <a>{data.title}</a>
        <Svg className="next">
          {opened ? <DownArrowIcon /> : <NextArrowIcon />}
        </Svg>
      </Title>
      <InnerList>
        {opened &&
          data.subMenu.map((item, id) => (
            <InnerItem key={id} active={item.name === activeMenuName}>
              <a href={item.location}>{item.name}</a>
            </InnerItem>
          ))}
      </InnerList>
    </OuterItem>
  );
};

export default MenuItem;
