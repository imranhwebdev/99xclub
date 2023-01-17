import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";

const Layout = ({ children }) => {
  return (
    <>
      <Header2 />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
