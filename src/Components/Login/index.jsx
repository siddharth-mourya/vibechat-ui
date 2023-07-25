import React from "react";
import styles from "./index.module.scss";

const Login = () => {
  return (
    <>
      <div className={styles["login-wrapper"]}>
        <form>
          <div className="mb-3">
            <label htmlFor="LoginEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="LoginEmail"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LoginPassword" className="form-label">
              Password
            </label>
            <input
              type="LoginPassword"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
