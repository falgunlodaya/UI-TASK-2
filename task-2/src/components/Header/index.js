import React from "react";
import logo from "../../assets/images/logo.svg";
import iconmagnify from "../../assets/images/icon-magnify.svg";
import iconsetting from "../../assets/images/icon-setting.svg";
import Notification from "../Notification";
import Profile from "../Profile";
const Header = () => {
  return (
    <>
      <header className="bs-header">
        <div className="left-cont">
          <div className="logo-wrap">
            <a href="/">
              <img src={logo} alt="Bank dash" />
            </a>
          </div>
          <h1 className="title">Loans</h1>
        </div>
        <div className="right-cont">
          <ul className="action-list">
            <li className="item">
              <div className="bs-search">
                <img className="icon-img" src={iconmagnify} alt="icon search" />
                <input
                  placeholder="Search for Something"
                  type="text"
                  className="search-input"
                />
              </div>
            </li>
            <li className="item">
              <div className="cta-action">
                <img className="cta-img" src={iconsetting} alt="icon setting" />
              </div>
            </li>
            <li className="item">
              <Notification />
            </li>
            <li className="item">
              <Profile />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
