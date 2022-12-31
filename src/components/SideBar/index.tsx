import React from "react";
import "./Sidebar.scss";

//? Icons
import CustomersUserIcon from "../../assets/icons/sidebar/customers-user-icon.svg";

const SideBar = () => {
  const sideBarData = [
    {
      "section-name": "CUSTOMERS",
      contents: [
        {
          name: "Users",
          icon: CustomersUserIcon,
        },
        {
          name: "Guarantors",
          icon: CustomersUserIcon,
        },
        {
          name: "Loans",
          icon: CustomersUserIcon,
        },
        {
          name: "Decision Models",
          icon: CustomersUserIcon,
        },
        {
          name: "Savings",
          icon: CustomersUserIcon,
        },
      ],
    },
    {
      "section-name": "BUSINESSES",
      contents: [
        {
          name: "Organizations",
          icon: CustomersUserIcon,
        },
        {
          name: "Loan Products",
          icon: CustomersUserIcon,
        },
        {
          name: "Savings Products",
          icon: CustomersUserIcon,
        },
        {
          name: "Fees and Charges",
          icon: CustomersUserIcon,
        },
        {
          name: "Transactions",
          icon: CustomersUserIcon,
        },
      ],
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-switch-org">
        <img src="" alt="switch-organization-icon" />
        <p>Switch Organization</p>
        <img src="" alt="sidebar-arrow-down" />
      </div>
      <div className="sidebar-dashboard">
        <img src="" alt="dashboard-icon" />
        <p>Dashboard</p>
      </div>
      <div className="sidebar-main-container">
        {sideBarData.map((item) => {
          return (
            <div key={item["section-name"]}>
              <h3>{item["section-name"]}</h3>
              <div>
                {item.contents.map((item) => {
                  return (
                    <div key={item.name}>
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
          <img src="" alt="logout-icon" />
          <p>Logout</p>
        </div>
        <p>v1.2.0</p>
      </div>
    </div>
  );
};

export default SideBar;
