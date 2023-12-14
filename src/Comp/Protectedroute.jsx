import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Protectedroute = (props) => {
  const { Cmp } = props;
  const { loggedin } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!loggedin) {
      navigate("/login");
    } 
  });

  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protectedroute;
