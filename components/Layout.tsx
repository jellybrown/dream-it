import React, { ReactNode } from "react";
import Menu from "./Menu/Menu";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Menu />
    {children}
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
);

export default Layout;
