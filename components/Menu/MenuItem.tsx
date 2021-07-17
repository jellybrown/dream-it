import React from "react";
import { InnerItem, InnerList, OuterItem, Title } from "./MenuItem.style";
import NextArrowIcon from "../../public/arrow-next.svg";
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

  return (
    <OuterItem onClick={toggleOpened}>
      <Title>
        <a>{data.title}</a>
        <Svg className="next">
          <NextArrowIcon />
        </Svg>
      </Title>
      <InnerList>
        {opened &&
          data.subMenu.map((item, id) => (
            <InnerItem key={id}>
              <a href={item.location}>{item.name}</a>
            </InnerItem>
          ))}
      </InnerList>
    </OuterItem>
  );
};

export default MenuItem;
