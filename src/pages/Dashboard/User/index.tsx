import React from "react";
import UserCards from "./components/UserCards";
import "./User.style.scss";

// ? Card
import UserIcon from "../../../assets/icons/users-page/users-icon.svg";
import ActiveUserIcon from "../../../assets/icons/users-page/active-users-icon.svg";
import UsersWithLoansIcon from "../../../assets/icons/users-page/users-with-loans-icon.svg";
import UsersWithSavingsIcon from "../../../assets/icons/users-page/users-with-savings-icon.svg";

import MenuIcon from "../../../assets/icons/users-page/menu-icon.svg";
import TableFilterIcon from "../../../assets/icons/users-page/table-filter-icon.svg";

const User = () => {
  const cardData = [
    {
      img: {
        src: UserIcon,
        alt: "users-icon",
        bgc: "#DF18FF",
      },
      p: "USERS",
      h2: "2,453",
    },
    {
      img: {
        src: ActiveUserIcon,
        alt: "active-users-icon",
        bgc: "#5718FF",
      },
      p: "ACTIVE USERS",
      h2: "2,453",
    },
    {
      img: {
        src: UsersWithLoansIcon,
        alt: "users-with-loans-icon",
        bgc: "#F55F44",
      },
      p: "USERS WITH LOANS",
      h2: "12,453",
    },
    {
      img: {
        src: UsersWithSavingsIcon,
        alt: "users-with-savings-icon",
        bgc: "#FF3366",
      },
      p: "USERS WITH SAVINGS",
      h2: "102,453",
    },
  ];

  const tableHeadData = [
    {
      name: "ORGANIZATION",
    },
    {
      name: "USERNAME",
    },
    {
      name: "EMAIL",
    },
    {
      name: "PHONE NUMBER",
    },
    {
      name: "DATE JOINED",
    },
    {
      name: "STATUS",
    },
    {
      name: "MENU",
    },
  ];

  return (
    <div className="UserPage">
      <h1>Users</h1>
      <div className="main-cards-container">
        {cardData.map((item) => (
          <UserCards
            key={item.p}
            img={{
              src: item.img.src,
              alt: item.img.alt,
              bgc: item.img.bgc,
            }}
            p={item.p}
            h2={item.h2}
          />
        ))}
      </div>

      <table className="user-table">
        <tbody>
          <tr className="user-table-header">
            {tableHeadData.map((item) =>
              item.name === "MENU" ? (
                <th style={{ visibility: "hidden", padding: "0 12px" }}>
                  {item.name}
                </th>
              ) : (
                <th>
                  <div>
                    {item.name}
                    <img src={TableFilterIcon} alt="table-filter-icon" />
                  </div>
                </th>
              )
            )}
          </tr>
          <tr className="user-table-body">
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td colSpan={2}>Inactive</td>
            <td>
              <img src={MenuIcon} alt="menu-icon" />
            </td>
          </tr>
          <tr className="user-table-body">
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td colSpan={2}>Inactive</td>
            <td>
              <img src={MenuIcon} alt="menu-icon" />
            </td>
          </tr>
          <tr className="user-table-body">
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td colSpan={2}>Inactive</td>
            <td>
              <img src={MenuIcon} alt="menu-icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
