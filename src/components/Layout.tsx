import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutPropsTypes = {};

const Layout: React.FC<PropsWithChildren<LayoutPropsTypes>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
