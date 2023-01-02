import React from "react";
import UserCards from "./components/UserCards";
import "./User.style.scss";

// ? Card
import UserIcon from "../../../assets/icons/users-page/users-icon.svg";
import ActiveUserIcon from "../../../assets/icons/users-page/active-users-icon.svg";
import UsersWithLoansIcon from "../../../assets/icons/users-page/users-with-loans-icon.svg";
import UsersWithSavingsIcon from "../../../assets/icons/users-page/users-with-savings-icon.svg";
import TableFilterIcon from "../../../assets/icons/table-filter-icon.svg";

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
        p: "USERS WITH SAVINGS",
        bgc: "#FF3366",
      },
      p: "ACTIVE USERS",
      h2: "102,453",
    },
  ];

  return (
    <div className="UserPage">
      <h1>Users</h1>
      <div className="main-cards-container">
        {cardData.map((item) => (
          <UserCards
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
      <table></table>
    </div>
  );
};

export default User;
