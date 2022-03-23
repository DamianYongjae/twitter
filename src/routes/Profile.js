import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory;
  const onLogOutClick = async e => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <span>Profile</span>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
