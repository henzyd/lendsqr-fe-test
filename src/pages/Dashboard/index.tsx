import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, DashboardLayout } from "../../components";
import "./Dashboard.style.scss";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <NavBar />
      <DashboardLayout mainContent={<Outlet />} />
    </div>
  );
};

export default Dashboard;
