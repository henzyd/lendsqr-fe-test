import React from "react";
import SideBar from "../SideBar";

type DashboardLayoutProps = {
  mainContent: JSX.Element;
};

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div>
      <SideBar />
      {props.mainContent}
    </div>
  );
};

export default DashboardLayout;
