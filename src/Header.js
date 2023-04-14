import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn.iconscout.com/icon/free/png-512/linkedin-160-461814.png?f=avif&w=256" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/C4D03AQHtBBZRbXbwUA/profile-displayphoto-shrink_200_200/0/1667876653164?e=1686787200&v=beta&t=AMQhQ_EKSreM8JgagrAOCLmhcsdavd6zL3x3Xj5LgjY"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
