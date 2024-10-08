import React from "react";
import iconnotify from "../../assets/images/icon-notification.svg";
import iconclose from "../../assets/images/icon-close.svg";
const Notification = ({ isNotifyOpen, setIsNotifyOpen, handleNotifyClick }) => {
  return (
    <div className="bs-notify">
      <div className="cta-action" onClick={handleNotifyClick}>
        <img className="cta-img" src={iconnotify} alt="icon notify" />
      </div>
      <div className={`dropdown-notify ${isNotifyOpen ? "active" : ""}`}>
        <div className="title-action-wrap">
          <h4 className="title">Notifications</h4>
          <button className="cta-close" onClick={() => setIsNotifyOpen(false)}>
            <img src={iconclose} alt="icon close" />
          </button>
        </div>
        <ul className="notify-list">
          <li className="item">
            <div className="info">
              <h5 className="info-title">Lorem Ipsum</h5>
              <div className="info-desc">
                <p className="desc">Lorem Ipsum</p>
                <span className="date-time">1d ago</span>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="info">
              <h5 className="info-title">Lorem Ipsum</h5>
              <p className="desc">Lorem Ipsum</p>
              <span className="date-time">1d ago</span>
            </div>
          </li>
          <li className="item">
            <div className="info">
              <h5 className="info-title">Lorem Ipsum</h5>
              <p className="desc">Lorem Ipsum</p>
              <span className="date-time">1d ago</span>
            </div>
          </li>
          <li className="item">
            <div className="info">
              <h5 className="info-title">Lorem Ipsum</h5>
              <p className="desc">Lorem Ipsum</p>
              <span className="date-time">1d ago</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
