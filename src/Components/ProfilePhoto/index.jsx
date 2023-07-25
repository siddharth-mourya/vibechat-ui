import React from "react";
import styles from "./index.styles.module.scss";

const ProfilePhoto = ({ src, alt, width, height }) => {
  return (
    <>
      <span>
        <img
          className="profile-pic"
          width={width}
          height={height}
          src={src}
          alt={alt}
        />
      </span>
    </>
  );
};
export default ProfilePhoto;
