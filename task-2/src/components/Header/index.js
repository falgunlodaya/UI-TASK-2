import React, { useEffect, useRef } from "react";
import iconmagnify from "../../assets/images/icon-magnify.svg";
import iconsetting from "../../assets/images/icon-setting.svg";
import Notification from "../Notification";
import Profile from "../Profile";
const Header = () => {
  const [isNotifyOpen, setIsNotifyOpen] = React.useState(false);
  const [isprofileOpen, setIsProfileOpen] = React.useState(false);
  const notifyRef = useRef();
  const profileRef = useRef();
  const handleNotifyClick = () => {
    setIsNotifyOpen((prevState) => !prevState);
    setIsProfileOpen(false);
  };
  const handleProfileClick = () => {
    setIsProfileOpen((prevState) => !prevState);
    setIsNotifyOpen(false);
  };

  /* dropdown outside click functionality */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifyRef.current && !notifyRef.current.contains(event.target)) {
        setIsNotifyOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="bs-header">
        <div className="left-cont">
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
            <li className="item" ref={notifyRef}>
              <Notification
                isNotifyOpen={isNotifyOpen}
                handleNotifyClick={handleNotifyClick}
                setIsNotifyOpen={setIsNotifyOpen}
              />
            </li>
            <li className="item" ref={profileRef}>
              <Profile
                isprofileOpen={isprofileOpen}
                handleProfileClick={handleProfileClick}
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
