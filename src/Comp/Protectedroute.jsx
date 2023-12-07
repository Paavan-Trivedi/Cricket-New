import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protectedroute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  
  useEffect(() => {
    const data = localStorage.getItem("login");
    if (!data) {
      navigate("/login");
    } 
  });

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protectedroute;
