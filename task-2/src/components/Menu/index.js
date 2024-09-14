import React from "react";
import logo from "../../assets/images/logo.svg";
function Menu() {
  return (
    <div className="bs-menu">
      <div className="logo-wrap">
        <a href="/">
          <img src={logo} alt="Bank dash" />
        </a>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#">
            <span className="icon icon-menu-home"></span>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon icon-menu-transfer"></span>
            <span className="text">Transactions</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon icon-menu-user"></span>
            <span className="text">Accounts</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon icon-menu-investment"></span>
            <span className="text">Investments</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon icon-menu-credit-card"></span>
            <span className="text">Credit Cards</span>
          </a>
        </li>
        <li className="nav-item active">
          <a href="#">
            <span className="icon icon-menu-loan"></span>
            <span className="text">Loans</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon icon-menu-service"></span>
            <span className="text">Services</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon icon-menu-metrices"></span>
            <span className="text">My Privileges</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon icon-menu-setting"></span>
            <span className="text">Setting</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
