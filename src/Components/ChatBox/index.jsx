import React, { useRef, useState } from "react";
import styles from "./index.module.scss";
import { mockChatData } from "../../mockdata/MockChatData";

const getDateTime = (dateStr) => {};

const ChatBox = ({ backToMessageHistory, isUserChatOpen }) => {
  const [messageInput, setMessageInput] = useState("");
  const [chatData, setChatData] = useState(mockChatData);
  const loggedInUserId = "user-1";
  const messageInputRef = useRef(null);

  const { receiver } = chatData.participants;
  return (
    <div className={`${styles["chatbox"]} position-relative`}>
      {/* recievers profile bar*/}
      <div
        className={`d-flex w-100 border-bottom ${styles["active-chat-profile-bar"]}`}
      >
        {/* back button that render only on mobile screen */}
        <div
          className={`d-sm-none my-auto p-2 border-end ${
            isUserChatOpen ? "position-relative" : ""
          }`}
        >
          <i
            className="fa-solid fs-3 fa-arrow-left mb-0"
            onClick={backToMessageHistory}
          ></i>
        </div>

        {/* profile chat content */}
        <div className={`d-flex p-2 justify-content-start`}>
          <img className="profile-pic" src={receiver.profilePic} />
          <div className="w-100 mx-2">
            <p className="lh-1 fw-bold mb-0">{receiver.name}</p>
            {receiver.isOnline ? (
              <div>
                <small className="lh-1 text-success">Online</small>
                <i className="fa-solid align-middle online-icon mx-2 fa-circle text-success"></i>
              </div>
            ) : (
              <div>
                <small className="lh-1 text-muted">Offline</small>
                <i className="fa-solid align-middle online-icon mx-2 fa-circle text-secondary"></i>
              </div>
            )}
          </div>
        </div>
        {/* chat message list */}
      </div>

      {/* user chat messages list */}
      <div className={styles["message-box-wrapper"]}>
        <div className={`${styles["messages-list"]} px-3 p-1 overflow-auto`}>
          {chatData.messages.map((msg) => (
            <div
              className={`mw-75 my-2 ${
                msg.senderId === loggedInUserId ? "ms-auto" : "me-auto"
              }`}
            >
              <div
                className={`p-2 pe-3 ${
                  msg.senderId === loggedInUserId
                    ? `ms-auto ${styles["senders-message"]}`
                    : `me-auto ${styles["recievers-message"]}`
                } ${styles["msg-content"]}`}
              >
                {msg.content}
              </div>
              <small
                className={`text-secondary d-block ${styles["msg-time"]} ${
                  msg.senderId === loggedInUserId ? "text-end" : "text-start"
                }`}
              >
                {msg.timestamp}
              </small>
            </div>
          ))}
        </div>
        {/* new message input box */}
        <div className={`${styles["message-input-box"]} bg-white p-2`}>
          <div className="border border-rounded h-100">
            <div className="input-group h-100">
              <textarea
                rows={3}
                ref={messageInputRef}
                onChange={setMessageInput}
                className="form-control h-100 border-0"
              ></textarea>
              <span className="cursor-pointer input-group-text border-0">
                <i className="fa-solid fs-6 fa-paper-plane"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
