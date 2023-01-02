import React from "react";
import "../User.style.scss";

type UserCardsProps = {
  img: {
    src: string;
    alt: string;
    bgc: string;
  };
  p: string;
  h2: string;
};

const UserCards = (props: UserCardsProps) => {
  return (
    <div className="sub-cards-container">
      <div className="user-card-img-container">
        <div style={{ backgroundColor: `${props.img.bgc}` }}></div>
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <p>{props.p}</p>
      <h2>{props.h2}</h2>
    </div>
  );
};

export default UserCards;
