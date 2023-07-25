import React, { useState } from "react";
import styles from "./index.module.scss";

const getTabTitle = (title) => title.split(" ").join("_");

const TabPane = ({ tabConfig }) => {
  const [activeTab, setActiveTab] = useState(
    getTabTitle(tabConfig[0].tabTitle)
  );

  return (
    <>
      <div id="Tab" className={styles["tab-pane-wrapper"]}>
        <ul className="nav nav-pills">
          {tabConfig.map((tab, i) => {
            const tabTitle = getTabTitle(tab.tabTitle);
            return (
              <li
                className={activeTab === tabTitle ? styles["active"] : ""}
                key={tabTitle.concat(i)}
              >
                <a
                  onClick={() => setActiveTab(tabTitle)}
                  href={`#${tabTitle}`}
                  data-toggle="tab"
                >
                  {tab.tabTitle}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="tab-content clearfix mt-3">
          {tabConfig.map((tab, i) => {
            const tabTitle = getTabTitle(tab.tabTitle);
            return (
              <div
                className={`tab-pane ${styles["tab-pane"]} ${
                  activeTab === tabTitle ? styles["active"] : ""
                }`}
                id={tabTitle}
                key={tabTitle.concat(i)}
              >
                {tab.componentToRender}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TabPane;
