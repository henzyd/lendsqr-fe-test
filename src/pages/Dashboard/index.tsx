import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar, DashboardLayout } from "../../components";
import "./Dashboard.style.scss";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  function showMenuHandler() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="Dashboard">
      <NavBar showMenuHandler={showMenuHandler} />
      <DashboardLayout showMenu={showMenu} mainContent={<Outlet />} />
    </div>
  );
};

export default Dashboard;
