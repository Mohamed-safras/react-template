import React from "react";
import SideBarRow from "./SideBarRow";
import styled from "styled-components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
const SideBarRows = () => {
  return (
    <Container>
      <SideBarRow title="Home" Icon={HomeRoundedIcon} />
      <SideBarRow title="Explore" Icon={ExploreRoundedIcon} />
      <SideBarRow title="Subscriptions" Icon={SubscriptionsRoundedIcon} />
      <Border />
      <SideBarRow title="Library" Icon={VideoLibraryOutlinedIcon} />
      <SideBarRow title="History" Icon={RestoreOutlinedIcon} />
      <SideBarRow title="Watch later" Icon={WatchLaterOutlinedIcon} />
    </Container>
  );
};

export default SideBarRows;

const Container = styled.div`
  margin-top: 10px;
`;

const Border = styled.div`
  border-top: 1px solid rgb(255 255 255 / 10%);
  margin-top: 12px;
  padding-top: 12px;
  display: block;
`;
