import React from "react";

import FollowingNav from "./FollowingNav";
import SideNav from "./SideNav";
import MainNav from "./MainNav";

const NavBar = props => {
  return (
    <div>
      {/* <FollowingNav />
      <SideNav /> */}
      <MainNav />
    </div>
  );
};

export default NavBar;
