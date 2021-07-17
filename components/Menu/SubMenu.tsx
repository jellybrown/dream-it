import React from "react";
import { InnerList, InnerItem } from "./SubMenu.style";

interface SubMenu {
  name: string;
  location: string;
}

interface SubMenuProps {
  data: SubMenu[];
}

const SubMenu: React.FC<SubMenuProps> = ({ data }) => {
  return (
    <InnerList>
      {data &&
        data.map((item, idx) => (
          <InnerItem key={idx}>
            <a href={item.location}>{item.name}</a>
          </InnerItem>
        ))}
    </InnerList>
  );
};

export default SubMenu;
