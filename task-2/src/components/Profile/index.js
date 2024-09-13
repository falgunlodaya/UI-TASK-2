import React from "react";
import profileImg from "../../assets/images/profile-img.svg";

function Profile() {
  return (
    <div className="bs-profile">
      <div className="img-wrap">
        <img src={profileImg} alt="profile image" />
      </div>
    </div>
  );
}

export default Profile;
