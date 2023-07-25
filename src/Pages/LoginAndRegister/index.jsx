import React from "react";
import styles from "./index.module.scss";
import TabPane from "../../Components/shared/TabPane";
import Login from "../../Components/Login";
import Register from "../../Components/Register";

const LoginAndRegister = () => {
  return (
    <>
      <div
        className={`${styles["login-register-wrapper"]} container-fluid h-100`}
      >
        <div className="row gx-0 h-100 align-items-center justify-content-center">
          <div className="col-lg-4 col-md-5 col-sm-10 col-xs-10  border shadow-lg p-4 bg-white">
            <TabPane
              tabConfig={[
                { tabTitle: "Login", componentToRender: <Login /> },
                { tabTitle: "Register", componentToRender: <Register /> },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAndRegister;
