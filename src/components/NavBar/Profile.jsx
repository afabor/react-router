import React from "react";
import "./Profile.css";

export default function Profle(props) {
  const { profileName, profileAge, profileRole } = props;
  return (
    <div className="profile-card">
      <p>Name: {profileName}</p>
      <p>Age: {profileAge}</p>
      <p>Role: {profileRole}</p>
    </div>
  );
}
