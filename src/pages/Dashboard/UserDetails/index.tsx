import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserDetails.style.scss";

import UserDetailsBackIcon from "../../../assets/icons/user-details-back-icon.svg";
import UserDetailsProfileIcon from "../../../assets/icons/user-detail-profile-icon.svg";
import StarActiveIcon from "../../../assets/icons/star-active.svg";
import StarInactiveIcon from "../../../assets/icons/star-inactive.svg";
import { userDataArrType } from "../UserDataTypes.types";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<userDataArrType | []>([]);
  useEffect(() => {
    const num = Number(id);
    if (Number.isInteger(num)) {
      console.log(num);
      fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
        .then((response) =>
          response.json().then((data) => {
            console.log(data);
            return setUserData([{ ...data }]);
          })
        )
        .catch((err) => console.log(err));
    } else {
      navigate("/*");
    }
  }, [setUserData, id, navigate]);

  return (
    <div className="user-details-page">
      <div className="going-back" onClick={() => navigate("/users")}>
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

      {userData.map((item) => {
        return (
          <div className="user-details-main" key={item.id}>
            <div className="user-details-main-top">
              {item.profile.avatar ? (
                <figure className="profile-photo">
                  <img src={item.profile.avatar} alt="profile-img" />
                </figure>
              ) : (
                <figure>
                  <div></div>
                  <img
                    src={UserDetailsProfileIcon}
                    alt="user-detail-profile-icon"
                  />
                </figure>
              )}
              <div className="full-name">
                <h2>{`${item.profile.firstName} ${item.profile.lastName}`}</h2>
                <p>{item.accountNumber}</p>
              </div>
              <span></span>
              <div className="users-tier">
                <p>User's Tier</p>
                <div>
                  <img src={StarActiveIcon} alt="star-active" />
                  <img src={StarInactiveIcon} alt="star-inactive" />
                  <img src={StarInactiveIcon} alt="star-inactive" />
                </div>
              </div>
              <span></span>
              <div className="amount-in-bank">
                <h2>{`${item.profile.currency}${item.accountBalance}`}</h2>
                <p>{item.profile.bvn}/Providus Bank</p>
              </div>
            </div>
            <div className="user-details-main-bottom">
              <p
                style={{ borderBottom: "2px solid #39CDCC", color: "#39CDCC" }}
              >
                General Details
              </p>
              <p>Documents</p>
              <p>Bank Details</p>
              <p>Loans</p>
              <p>Savings</p>
              <p>App and System</p>
            </div>
          </div>
        );
      })}

      {userData.map((item) => {
        return (
          <div className="general-details" key={item.id}>
            <div className="general-details-personal-info general">
              <h3>Personal Information</h3>
              <div className="general-details-outside-container">
                <div className="general-details-inside-container">
                  <p className="general-details-top">FULL NAME</p>
                  <p className="general-details-bottom">{`${item.profile.firstName} ${item.profile.lastName}`}</p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">PHONE NUMBER</p>
                  <p className="general-details-bottom">
                    {item.profile.phoneNumber}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">EMAIL ADDRESS</p>
                  <p className="general-details-bottom">{item.email}</p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">BVN</p>
                  <p className="general-details-bottom">{item.profile.bvn}</p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">GENDER</p>
                  <p className="general-details-bottom">
                    {item.profile.gender}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">MARITAL STATUS</p>
                  <p className="general-details-bottom">Single</p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">CHILDREN</p>
                  <p className="general-details-bottom">None</p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">TYPE OF RESIDENCE</p>
                  <p className="general-details-bottom">
                    {item.profile.address}
                  </p>
                </div>
              </div>
            </div>
            <span></span>
            <div className="general-details-education-and-employment general">
              <h3>Education and Employment</h3>
              <div className="general-details-outside-container">
                <div className="general-details-inside-container">
                  <p className="general-details-top">LEVEL OF EDUCATION</p>
                  <p className="general-details-bottom">
                    {item.education.level}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">employment status</p>
                  <p className="general-details-bottom">
                    {item.education.employmentStatus}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">sector of employment</p>
                  <p className="general-details-bottom">
                    {item.education.sector}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">Duration of employment</p>
                  <p className="general-details-bottom">
                    {item.education.duration}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">office email</p>
                  <p className="general-details-bottom">
                    {item.education.officeEmail}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">Monthly income</p>
                  <p className="general-details-bottom">
                    {`${item.education.monthlyIncome[0]} - ${item.education.monthlyIncome[1]}`}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">loan repayment</p>
                  <p className="general-details-bottom">
                    {item.education.loanRepayment}
                  </p>
                </div>
              </div>
            </div>
            <span></span>
            <div className="general-details-socials general">
              <h3>Socials</h3>
              <div className="general-details-outside-container">
                <div className="general-details-inside-container">
                  <p className="general-details-top">Twitter</p>
                  <p className="general-details-bottom">
                    {item.socials.twitter}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">Facebook</p>
                  <p className="general-details-bottom">
                    {item.socials.facebook}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">Instagram</p>
                  <p className="general-details-bottom">
                    {item.socials.instagram}
                  </p>
                </div>
              </div>
            </div>
            <span></span>
            <div className="general-details-guarantor general">
              <h3>Guarantor</h3>
              <div className="general-details-outside-container">
                <div className="general-details-inside-container">
                  <p className="general-details-top">full Name</p>
                  <p className="general-details-bottom">
                    {`${item.guarantor.firstName} ${item.guarantor.lastName}`}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">Phone Number</p>
                  <p className="general-details-bottom">
                    {`${item.guarantor.phoneNumber}`}
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">Email Address</p>
                  <p className="general-details-bottom">
                    dh jdiinjdndjnjn knjd
                  </p>
                </div>
                <div className="general-details-inside-container">
                  <p className="general-details-top">Relationship</p>
                  <p className="general-details-bottom">
                    dh jdiinjdndjnjn knjd
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
