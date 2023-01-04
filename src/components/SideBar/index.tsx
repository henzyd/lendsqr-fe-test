import React, { useState } from "react";
import "./Sidebar.style.scss";

//? Icons
import ArrowDown from "../../assets/icons/sidebar/sidebar-arrow-down.svg";
import SwitchOriganization from "../../assets/icons/sidebar/switch-organization-icon.svg";
import DashboardIcon from "../../assets/icons/sidebar/dashboard-icon.svg";
import LogoutIcon from "../../assets/icons/sidebar/logout-icon.svg";

//? Data
import sideBarData from "./data";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  showMenu: Boolean;
};

const SideBar = (props: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("Users");
  const navigate = useNavigate();

  function changeActiveItemHanler(item: string) {
    const path = item.toLocaleLowerCase().replace(" ", "-");
    navigate(`/${path}`);
    setActiveItem(item);
    // if (path === "users") {
    //   navigate(`/${path}`);
    //   setActiveItem(item);
    // } else {
    // }
  }
  return (
    <div
      className="sidebar"
      // style={{ display: `${props.showMenu ? "block" : "none"}` }}
    >
      <div className="sidebar-switch-org">
        <img src={SwitchOriganization} alt="switch-organization-icon" />
        <p>Switch Organization</p>
        <img src={ArrowDown} alt="sidebar-arrow-down" />
      </div>
      <div className="sidebar-dashboard">
        <img src={DashboardIcon} alt="dashboard-icon" />
        <p>Dashboard</p>
      </div>
      <div className="sidebar-main-container">
        {sideBarData.map((item) => {
          return (
            <div
              className="sidebar-main-container-inside"
              key={item["section-name"]}
            >
              <h3>{item["section-name"]}</h3>
              <div className="sidebar-main-container-outer">
                {item.contents.map((item) => {
                  return (
                    <div
                      className={`sidebar-main-container-inner ${
                        activeItem === item.name
                          ? "sidebar-main-container-inner-active-state"
                          : ""
                      }`}
                      key={item.name}
                      onClick={() => {
                        changeActiveItemHanler(item.name);
                      }}
                    >
                      <div className="sidebar-main-container-inner-bg"></div>
                      <img
                        src={item.icon}
                        alt={`sidebar-${item.name
                          .toLocaleLowerCase()
                          .replace(" ", "-")}`}
                      />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="sidebar-footer">
        <div>
          <img src={LogoutIcon} alt="logout-icon" />
          <p>Logout</p>
        </div>
        <p>v1.2.0</p>
      </div>
    </div>
  );
};

export default SideBar;
