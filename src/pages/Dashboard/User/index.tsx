import React, { useEffect, useState } from "react";
import UserCards from "./components/UserCards";
import "./User.style.scss";

// ? Card
import UserIcon from "../../../assets/icons/users-page/users-icon.svg";
import ActiveUserIcon from "../../../assets/icons/users-page/active-users-icon.svg";
import UsersWithLoansIcon from "../../../assets/icons/users-page/users-with-loans-icon.svg";
import UsersWithSavingsIcon from "../../../assets/icons/users-page/users-with-savings-icon.svg";

import MenuIcon from "../../../assets/icons/users-page/menu-icon.svg";
import TableFilterIcon from "../../../assets/icons/users-page/table-filter-icon.svg";

type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
};

type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

type Socials = {
  facebook: string;
  instagram: string;
  twitter: string;
};

type userDataArrType = [
  {
    accountBalance: string;
    accountNumber: string;
    createdAt: string;
    education: Education;
    email: string;
    guarantor: Guarantor;
    id: string;
    lastActiveDate: string;
    orgName: string;
    phoneNumber: string;
    profile: Profile;
    socials: Socials;
    userName: string;
  }
];

const User = () => {
  const [userDataArr, setUserDataArr] = useState<userDataArrType | []>([]);
  const [userPathID, setUserPathID] = useState<number | null>(null);
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

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) =>
        response.json().then(
          (data) => setUserDataArr(data)
          // setUserDataArr((data) => {
          //   // let changedData: userDataArrType | []; //! FIXME
          //   // for (let i = 0; i < data.length; i++) {
          //   //   if (!(i >= 7)) {
          //   //     changedData.push();
          //   //   }
          //   // }
          //   // console.log(changedData);
          //   return data;
          // })
        )
      )
      .catch((error) => console.log(error));

    // *"orgName": "labore-dolor-et",
    // *"userName": "Wilburn.Rice",
    // *"email": "Maverick.Hyatt83@gmail.com",
    // *"phoneNumber": "(553) 208-0727 x31321",
    // *"createdAt": "2072-12-27T03:44:22.522Z", NOTE: this is the date joined
  });

  function userPathHandler(id: number) {
    setUserPathID(id);
  }

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

      <div className="table-container">
        <table className="user-table">
          <tbody>
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
                      {item.name}
                      <img src={TableFilterIcon} alt="table-filter-icon" />
                    </div>
                  </th>
                )
              )}
            </tr>
            {userDataArr.map((item) => (
              <tr
                className="user-table-body"
                key={item.id}
                onClick={() => userPathHandler(Number(item.id))}
              >
                <td>{item.orgName}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.createdAt}</td>
                <td colSpan={2}>Inactive</td>
                <td>
                  <img src={MenuIcon} alt="menu-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
