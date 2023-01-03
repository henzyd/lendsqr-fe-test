import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.style.scss";

import UserDetailsBackIcon from "../../../assets/icons/user-details-back-icon.svg";
import UserDetailsProfileIcon from "../../../assets/icons/user-detail-profile-icon.svg";
import StarActiveIcon from "../../../assets/icons/star-active.svg";
import StarInactiveIcon from "../../../assets/icons/star-inactive.svg";
import { UserDataType } from "../UserDataTypes.types";

const UserDetails = () => {
  const { id } = useParams();
  const [UserData, setUserData] = useState<UserDataType | {}>({});
  useEffect(() => {
    fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    )
      .then((response) =>
        response.json().then((data) => setUserData(new Map({ ...data })))
      )
      .catch((err) => console.log(err));
  });
  return (
    <div className="user-details-page">
      <div className="going-back">
        <img src={UserDetailsBackIcon} alt="user-details-back-icon" />
        <p>Back to Users</p>
      </div>

      <div className="user-details-title">
        <h1>User Details</h1>
        <div>
          <button>BLACKLIST</button>
          <button>ACTIVATE USER</button>
        </div>
      </div>

      <div className="user-details-main">
        <div className="user-details-main-top">
          <figure>
            <div></div>
            <img src={UserDetailsProfileIcon} alt="user-detail-profile-icon" />
          </figure>
          <div className="full-name">
            <h2>pokjplo</h2>
            <p>ojdjbbdfijbf</p>
          </div>
          <div className="users-tier">
            <p>User's Tier</p>
            <div>
              <img src={StarActiveIcon} alt="star-active" />
              <img src={StarInactiveIcon} alt="star-inactive" />
              <img src={StarInactiveIcon} alt="star-inactive" />
            </div>
          </div>
          <div className="amount-in-bank">
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className="user-details-main-bottom">
          <p style={{ borderBottom: "2px solid #39CDCC", color: "#39CDCC" }}>
            General Details
          </p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
      <div className="general-details">
        <div className="general-details-personal-info general">
          <h3>Personal Information</h3>
          <div className="general-details-outside-container">
            <div className="general-details-inside-container">
              <p className="general-details-top">FULL NAME</p>
              <p className="general-details-bottom">dh jdiinjdndjnjn knjd</p>
            </div>
            <div className="general-details-inside-container">
              <p className="general-details-top">FULL NAME</p>
              <p className="general-details-bottom">dh jdiinjdndjnjn knjd</p>
            </div>
            <div className="general-details-inside-container">
              <p className="general-details-top">FULL NAME</p>
              <p className="general-details-bottom">dh jdiinjdndjnjn knjd</p>
            </div>
            <div className="general-details-inside-container">
              <p className="general-details-top">FULL NAME</p>
              <p className="general-details-bottom">dh jdiinjdndjnjn knjd</p>
            </div>
          </div>
        </div>
        <span></span>
        <div className="general-details-education-and-employment general">
          <h3>Education and Employment</h3>
          <div className="general-details-outside-container">
            <div className="general-details-inside-container">
              <p className="general-details-top">FULL NAME</p>
              <p className="general-details-bottom">dh jdiinjdndjnjn knjd</p>
            </div>
            <div className="general-details-inside-container">
              <p className="general-details-top">FULL NAME</p>
              <p className="general-details-bottom">dh jdiinjdndjnjn knjd</p>
            </div>
            <div className="general-details-inside-container">
              <p className="general-details-top">FULL NAME</p>
              <p className="general-details-bottom">dh jdiinjdndjnjn knjd</p>
            </div>
            <div className="general-details-inside-container">
              <p className="general-details-top">FULL NAME</p>
              <p className="general-details-bottom">dh jdiinjdndjnjn knjd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
