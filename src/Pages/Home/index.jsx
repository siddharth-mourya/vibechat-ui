import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import styles from "./index.module.scss";
import ChatHistory from "../../Components/ChatHistory";
import ChatBox from "../../Components/ChatBox";

const Home = () => {
  const [isRightColumnOpen, setIsRightColumnOpen] = useState(false);

  const toggleRightColumn = () => {
    setIsRightColumnOpen(!isRightColumnOpen);
  };

  return (
    <>
      <Row className="gx-0 h-100">
        <Col
          xs={12}
          sm={5}
          lg={4}
          className={`${
            isRightColumnOpen ? "d-none d-sm-block" : ""
          } h-100 border-end overflow-auto`}
        >
          <ChatHistory openChat={toggleRightColumn} />
        </Col>

        <Col
          xs={12}
          sm={7}
          lg={8}
          className={`${isRightColumnOpen ? "" : "d-none d-sm-block"} h-100`}
        >
          <ChatBox
            backToMessageHistory={toggleRightColumn}
            isUserChatOpen={isRightColumnOpen}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
