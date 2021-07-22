import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InnerItem, InnerList, OuterItem, Title } from "./MenuItem.style";
import NextArrowIcon from "../../public/arrow-next.svg";
import DownArrowIcon from "../../public/arrow-down.svg";
import { Svg } from "./Menu.style";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeMenu } from "../../redux/postsSlice";
import Link from "next/link";

interface Item {
  id: string;
  title: string;
  subMenu: any[];
}

interface MenuItemProps {
  data: Item;
  opened: boolean;
  onChangeSubMenuId: (stringId: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  data,
  opened,
  onChangeSubMenuId,
}) => {
  const menuId = useAppSelector((state) => state.posts.currentMenu.twoDepth);
  const dispatch = useAppDispatch();

  const onChangeMenuId = (id) => {
    dispatch(changeMenu(id));
  };

  return (
    <OuterItem>
      <Title onClick={() => onChangeSubMenuId(data.id)}>
        <a>{data.title}</a>
        <Svg className="next">
          {opened ? <DownArrowIcon /> : <NextArrowIcon />}
        </Svg>
      </Title>
      <InnerList>
        {opened &&
          data.subMenu.map((item, id) => (
            <InnerItem
              key={id}
              active={item.id === menuId}
              onClick={() => onChangeMenuId(item.id)}
            >
              <Link href={item.location}>{item.name}</Link>
            </InnerItem>
          ))}
      </InnerList>
    </OuterItem>
  );
};

export default MenuItem;
