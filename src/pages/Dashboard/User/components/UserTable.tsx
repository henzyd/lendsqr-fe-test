import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuIcon from "../../../../assets/icons/users-page/menu-icon.svg";
import TableFilterIcon from "../../../../assets/icons/users-page/table-filter-icon.svg";
import { userDataArrType } from "../../UserDataTypes.types";
import Dropdown from "./Dropdown";

type UserTableProps = {
  userDataArr: userDataArrType | [];
};

const UserTable = (props: UserTableProps) => {
  // const [userPathID, setUserPathID] = useState<number | null>(null);
  const [displayDropdown, setDisplayDropdown] = useState("none");
  const [itemDisplayed, setItemDisplayed] = useState<number | null>(null);
  const navigate = useNavigate();
  const [filterContainerDisplay, setFilterContainerDisplay] = useState("none");
  const [filterItem, setFilterItem] = useState<number | string>("");

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

  function userPathHandler(id: number) {
    // setUserPathID(id);
    console.log(id);

    const x = new Date();
    console.log(x);
    navigate(`${id}`);
  }

  function DisplayMenuHandler(id: number) {
    setItemDisplayed(id);
    setDisplayDropdown(displayDropdown === "none" ? "flex" : "none");
  }
  function filterContainerDisplayHandler(name: string) {
    setFilterItem(name);
    setFilterContainerDisplay(
      filterContainerDisplay === "none" ? "block" : "none"
    );
  }
  return (
    <article className="table-container">
      <table className="user-table">
        <thead>
          <tr className="user-table-header">
            {tableHeadData.map((item) =>
              item.name === "MENU" ? (
                <th
                  key={item.name}
                  style={{ visibility: "hidden", padding: "0 12px" }}
                >
                  {item.name}
                </th>
              ) : (
                <th key={item.name}>
                  <div>
                    <p>{item.name}</p>
                    <img
                      style={{ cursor: "pointer" }}
                      src={TableFilterIcon}
                      alt="table-filter-icon"
                      onClick={() => filterContainerDisplayHandler(item.name)}
                    />
                  </div>
                  {filterItem === item.name ? (
                    <div
                      className="Filter-container"
                      style={{ display: filterContainerDisplay }}
                    >
                      <div className="input-filter-all">
                        <div className="Organization-filter">
                          <label htmlFor="Organization-filter">
                            Organization
                          </label>
                          <select
                            name="Organization-filter"
                            id="Organization-filter"
                          >
                            <option value="one"></option>
                            <option value="two"></option>
                          </select>
                        </div>
                        <div className="username-filter">
                          <label htmlFor="username-filter">Username</label>
                          <input type="text" placeholder="User" />
                        </div>
                        <div className="email-filter">
                          <label htmlFor="email-filter">Email</label>
                          <input
                            type="email"
                            name="email-filter"
                            id="email-filter"
                          />
                        </div>
                        <div className="date-filter">
                          <label htmlFor="date-filter">Date</label>
                          <input
                            type="date"
                            name="date-filter"
                            id="date-filter"
                          />
                        </div>
                        <div className="phone-number-filter">
                          <label htmlFor="phone-number-filter">
                            Phone Number
                          </label>
                          <input
                            type="number"
                            name="phone-number-filter"
                            id="phone-number-filter"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="status-filter">
                          <label htmlFor="status-filter">Status</label>
                          <select name="status-filter" id="status-filter">
                            <option value="Active"></option>
                            <option value="inactive"></option>
                          </select>
                        </div>
                      </div>
                      <div className="filter-action btns">
                        <button>Reset</button>
                        <button>Filter</button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {props.userDataArr.map((item) => (
            <tr
              className="user-table-body"
              key={item.id}
              onClick={() => userPathHandler(Number(item.id))}
            >
              <td>{item.orgName}</td>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{Date.parse(item.createdAt)}</td>
              <td colSpan={2}>Inactive</td>
              <td>
                <img
                  src={MenuIcon}
                  alt="menu-icon"
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: "3",
                  }}
                  onClick={() => DisplayMenuHandler(Number(item.id))}
                />
                <Dropdown
                  styles={{
                    display: `${
                      itemDisplayed === Number(item.id)
                        ? displayDropdown
                        : "none"
                    }`,
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default UserTable;
