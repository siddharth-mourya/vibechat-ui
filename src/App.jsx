import { useState } from "react";
import styles from "./App.module.scss";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Route, Router } from "react-router-dom";
import LoginAndRegister from "./Pages/LoginAndRegister";

function App() {
  const isAuthenicated = true;
  return (
    <>
      <div className={styles["app"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["content"]}>
          {isAuthenicated ? <Home /> : <LoginAndRegister />}
        </div>
      </div>
    </>
  );
}

export default App;
