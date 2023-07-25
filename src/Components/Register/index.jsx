import React from "react";
import styles from "./index.module.scss";

const Register = () => {
  return (
    <>
      <div className={styles["Register-wrapper"]}>
        <form>
          <div className="mb-3">
            <label htmlFor="RegisterEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="RegisterEmail"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Registerpassword" className="form-label">
              Password
            </label>
            <input
              type="Registerpassword"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
