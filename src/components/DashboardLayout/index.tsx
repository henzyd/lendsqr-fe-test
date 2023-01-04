import React from "react";
import SideBar from "../SideBar";
import "./DashboardLayout.style.scss";

type DashboardLayoutProps = {
  mainContent: React.ReactElement;
  showMenu: Boolean;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className="dashboard-layout">
      <SideBar showMenu={props.showMenu} />
      <div className="dashboard-outlet-container">{props.mainContent}</div>
    </div>
  );
};

export default DashboardLayout;
