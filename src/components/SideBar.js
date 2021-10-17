import React from "react";
import { Container } from "../styles/SideBar.style";
import { NavBarLeftContainer } from "./Nav";
import SideBarRows from "./SideBarRows";
const SideBar = ({ showSidebar, setShowSidebar }) => {
  return (
    <Container showSidebar={showSidebar}>
      <div style={{ padding: "0 10px" }}>
        <NavBarLeftContainer
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
      <SideBarRows />
    </Container>
  );
};

export default SideBar;
