import React from "react";
import styles from "./index.styles.module.scss";
import ProfilePhoto from "../ProfilePhoto";

const Navbar = () => {
  const defaultProfilePicPath = `${process.env.PUBLIC_URL}/assets/profilePic/default-profile-pic.png`;
  return (
    <>
      <nav
        className={`${styles["navbar"]} w-100 navbar px-2 bg-white z-index-3 navbar-light position-fixed `}
      >
        <a className={`navbar-brand ${styles['navbar-brand']} font-weight-bold fs-4`} href="#">
          Vibe<span className="text-warning">Chat</span>
        </a>
        <div id="navbarText">
          <ul className="navbar-nav me-auto d-flex flex-row">
            <li className="nav-item my-auto">
              <i className="fa-solid fa-bell mb-0"></i>
            </li>
            <li className="nav-item">
              <span>
                <ProfilePhoto
                  src={defaultProfilePicPath}
                  alt="profile"
                  width={30}
                  height={30}
                />
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
