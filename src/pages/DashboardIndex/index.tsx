import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardIndex = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  });
  return <div>Dashboard</div>;
};

export default DashboardIndex;
