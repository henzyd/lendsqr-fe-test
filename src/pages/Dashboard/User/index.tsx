import React, { useEffect, useState } from "react";
import UserCards from "./components/UserCards";
import "./User.style.scss";

// ? Card
import UserIcon from "../../../assets/icons/users-page/users-icon.svg";
import ActiveUserIcon from "../../../assets/icons/users-page/active-users-icon.svg";
import UsersWithLoansIcon from "../../../assets/icons/users-page/users-with-loans-icon.svg";
import UsersWithSavingsIcon from "../../../assets/icons/users-page/users-with-savings-icon.svg";

import { userDataArrType } from "../UserDataTypes.types";

// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
import UserTable from "./components/UserTable";

const User = () => {
  const [userDataArr, setUserDataArr] = useState<userDataArrType | []>([]);
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

      <UserTable userDataArr={userDataArr} />
      {/* <DataTable
          value={userDataArr}
          header="Scroll"
          responsiveLayout="scroll"
        >
          <Column field="code" header="Code" />
          <Column field="name" header="Name" />
          <Column field="category" header="Category" />
          <Column field="quantity" header="Quantity" />
          <Column
            field="inventoryStatus"
            header="Status"
            // body={statusTemplate}
          />
          <Column
            field="rating"
            header="Rating"
            // body={ratingTemplate}
          />
        </DataTable> */}
    </div>
  );
};

export default User;
