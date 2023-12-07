import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";

const User = () => {
  const { name,setName } = useAuth();
 
  return (
    <div className="profile1">
      <h1><CgProfile /> {name}</h1>
    </div>
  );
};

export default User;
