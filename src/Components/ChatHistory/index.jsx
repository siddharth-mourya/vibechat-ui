import React, { useState } from "react";
import styles from "./index.module.scss";
import { mockChatHistory } from "../../mockdata/MockChatHistory";

const ChatHistory = ({ openChat }) => {
  const [activeChat, setActiveChat] = useState("");
  return (
    <div>
      <div className="w-100 p-2">
        <input
          type="text"
          className={`${styles["search-box"]} border shadow-sm p-2 rounded w-100`}
          placeholder="Search profiles"
        />
      </div>
      {mockChatHistory.map((chat, index) => (
        <div
          key={index}
          className={`d-flex p-2 border-bottom justify-content-start ${styles["last-chat"]}`}
        >
          <img className="profile-pic" src={chat.profilePic} />
          <div className="w-100 mx-2" onClick={openChat}>
            <span className="fw-bold mb-0">{chat.name}</span>
            <div className="d-flex w-100 flex-nowrap justify-content-between">
              <p className="mb-0 mr-2 col-6 col-md-8 text-truncate">
                {chat.lastMessage}
              </p>
              <span className="ml-2">{chat.lastMessageTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
