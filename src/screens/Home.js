import React, { useState } from "react";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import { Container } from "../styles/Home.style";
const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Container>
      <Nav showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </Container>
  );
};

export default Home;
