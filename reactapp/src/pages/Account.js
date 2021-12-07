import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Profile, Div, Body, BoardList } from "../styles/StyledAccount";

import { Card, Avatar, Modal } from "antd";
import {
  PlusOutlined,
  SettingOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const Account = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Body>
      <Div>
        <Profile
          actions={[
            <Link to="/account-settings">
              <SettingOutlined key="setting" />
            </Link>,
            <Link to="/board-creation">
              <PlusOutlined key="create" />
            </Link>,
            <ContainerOutlined key="board" onClick={showModal} />,
          ]}
        >
          <Modal
            title="Boards"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <BoardList>
              <Link to="/board">Some contents...</Link>
              <Link to="/board">Some contents...</Link>
              <Link to="/board">Some contents...</Link>
            </BoardList>
          </Modal>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Nathan Savari"
            description="Free Account"
          />
        </Profile>
      </Div>
    </Body>
  );
};

export default Account;
