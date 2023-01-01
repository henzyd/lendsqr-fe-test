import React from "react";
import "./NavBar.style.scss";

// ? Icons
import Logo from "../../assets/icons/logo.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";

// ?Images
import UserProfileIMG from "../../assets/images/user-profile-img.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <form className="nav-search-bar" method="get">
        <input type="text" placeholder="Search for anything" />
        <button type="submit">
          <img src={SearchIcon} alt="dashboard-search-bar-icon" />
        </button>
      </form>
      <div className="navbar-other">
        <p>Docs</p>
        <img src={NotificationIcon} alt="notification-icon" />
        <div>
          <figure>
            <img src={UserProfileIMG} alt="user-profile-img" />
          </figure>
          <p>Adedeji</p>
          <img src={ArrowDown} alt="arrow-down" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
