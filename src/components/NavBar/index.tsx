import React, { useState } from "react";
import "./NavBar.style.scss";

// ? Icons
import Logo from "../../assets/icons/logo.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import NotificationIcon from "../../assets/icons/notification-icon.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import { BiMenuAltLeft } from "react-icons/bi";

// ?Images
import UserProfileIMG from "../../assets/images/user-profile-img.png";
import { Link } from "react-router-dom";

type NavBarProps = {
  showMenuHandler: Function;
};

const NavBar = (props: NavBarProps) => {
  const [inputValue, setInputValue] = useState("");
  function seacrhHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setInputValue("");
  }
  return (
    <div className="NavBar">
      <Link to={"/"} className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <form className="nav-search-bar" method="get">
        <input
          type="text"
          placeholder="Search for anything"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            return seacrhHandler(e);
          }}
        >
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
      <div className="navbar-mobile-menu" onClick={() => props.showMenuHandler}>
        <BiMenuAltLeft size={28} />
      </div>
    </div>
  );
};

export default NavBar;
