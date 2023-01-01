import React from "react";
import SideBar from "../SideBar";
import "./DashboardLayout.style.scss";

type DashboardLayoutProps = {
  mainContent: React.ReactElement;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <div className="dashboard-outlet-container">{props.mainContent}</div>
    </div>
  );
};

export default DashboardLayout;
