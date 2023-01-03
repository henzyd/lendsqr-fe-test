import React from "react";
import ViewDetailsIcon from "../../../../assets/icons/view-details-icon.svg";
import BlacklistUserIcon from "../../../../assets/icons/blacklist-user-icon.svg";
import ActivateUserIcon from "../../../../assets/icons/activate-user-icon.svg";
import "../User.style.scss";

type DropdownProps = {
  styles: React.CSSProperties;
};

const Dropdown = (props: DropdownProps) => {
  return (
    <div className="user-dropdown" style={props.styles}>
      <div>
        <img src={ViewDetailsIcon} alt="view-details-icon" />
        <p>View Details</p>
      </div>
      <div>
        <img src={BlacklistUserIcon} alt="blacklist-user-icon" />
        <p>Blacklist User</p>
      </div>
      <div>
        <img src={ActivateUserIcon} alt="activate-user-icon" />
        <p>Activate User</p>
      </div>
    </div>
  );
};

export default Dropdown;
