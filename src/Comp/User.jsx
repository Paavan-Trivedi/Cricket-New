import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const User = () => {
  const { name,setName } = useAuth();
  // const fetchdata = () => {
  //   axios
  //     .get("http://192.168.29.84:8000/api/user/")
  //     .then((response) => {
  //       console.log(response.data);
  //       setName(response.data.name);
  //     })
  //     .catch((error) => {
  //       console.warn("Error fetching data:", error);
  //     });
  // };
  // useEffect(() => {
  //   fetchdata();
  // },[setName,name])

  return (
    <div>
      <h1>Hi ; {name}</h1>
    </div>
  );
};

export default User;
