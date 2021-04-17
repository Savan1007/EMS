import React from "react";
import Navbar from "./Navbar";
import SideNavBar from "./SideNavBar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <SideNavBar {...props}></SideNavBar>
    </div>
  );
};

export default Layout;
