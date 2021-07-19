import React from "react";
import { InnerItem, InnerList, OuterItem, Title } from "./MenuItem.style";
import NextArrowIcon from "../../public/arrow-next.svg";
import DownArrowIcon from "../../public/arrow-down.svg";
import { Svg } from "./Menu.style";
import useToggle from "../../hooks/useToggle";

interface MenuItem {
  title: string;
  subMenu: any[];
}

interface MenuItemProps {
  data: MenuItem;
}

const MenuItem: React.FC<MenuItemProps> = ({ data }) => {
  const [opened, toggleOpened] = useToggle();
  const activeMenuName = "오시는 길";

  return (
    <OuterItem>
      <Title onClick={toggleOpened}>
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
