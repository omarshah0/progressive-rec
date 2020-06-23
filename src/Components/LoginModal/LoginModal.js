import React from "react";
import "./modal.css";

import SideMenu from "./SideMenu/SideMenu";
import LoginCard from "./LoginCard/LoginCard";

import "./SideMenu/SideMenu.css";
import "./LoginCard/LoginCard.css";

function LoginModal() {
  return (
    <div className="section-wrapper">
      <SideMenu />
      <LoginCard />
    </div>
  );
}

export default LoginModal;
