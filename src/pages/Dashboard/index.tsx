import React from "react";
import { NavBar, SideBar, DashboardLayout } from "../../components";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <NavBar />
      <DashboardLayout mainContent={<SideBar />} />
    </div>
  );
};

export default Dashboard;
