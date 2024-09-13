import React from "react";
import profileImg from "../../assets/images/profile-img.svg";

const Profile = ({ isprofileOpen, handleProfileClick }) => {
  return (
    <div className="bs-profile">
      <div className="img-wrap" onClick={handleProfileClick}>
        <img src={profileImg} alt="profile image" />
      </div>
      <div className={`drodown-profile ${isprofileOpen ? "active" : ""}`}>
        <div className="img-info-wrap">
          <div className="img-wrap">
            <img src={profileImg} alt="profile imag" />
          </div>
          <div className="info">
            <h5 className="title">Grace John</h5>
            <div className="cont-details">
              <p>+91 9827839223 | gracejohn@gmail.com</p>
            </div>
          </div>
        </div>
        <ul className="list-wrap">
          <li className="item">Menu 1</li>
          <li className="item">Menu 2</li>
          <li className="item">Menu 3</li>
          <li className="item">Menu 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
