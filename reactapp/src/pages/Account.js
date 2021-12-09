import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Profile, Div, Body, Input } from "../styles/StyledAccount";

import { Card, Avatar, Modal, Button } from "antd";
import {
  PlusOutlined,
  SettingOutlined,
  ContainerOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { connect } from "react-redux";

const { Meta } = Card;

const Account = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [loading, setLoading] = useState(false);

  const state = {
    loading: false,
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk = () => {
    setIsModalVisible2(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const logout = () => {
    props.setIsLoggedOut();
  };

  return (
    <Body>
      <Div>
        <Profile
          actions={[
            <SettingOutlined key="setting" onClick={showModal2} />,
            <Link to="/board-creation">
              <PlusOutlined key="create" />
            </Link>,
            <ContainerOutlined key="board" onClick={showModal} />,

            <Link to="/">
              <LogoutOutlined key="logout" onClick={logout} />
            </Link>,
          ]}
        >
          <Modal
            visible={isModalVisible}
            title="Boards"
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Close
              </Button>,
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          <Modal
            visible={isModalVisible2}
            title="Settings"
            onCancel={handleCancel2}
            footer={[
              <Button key="back" onClick={handleCancel2}>
                Close
              </Button>,
              <Button
                key="link"
                href="/account"
                type="primary"
                loading={loading}
                onClick={handleOk}
              >
                Submit
              </Button>,
            ]}
          >
            <div>
              <label for="name">Username</label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                minlength="6"
                maxlength="20"
                size="10"
              ></Input>
            </div>
            <div>
              <label for="email">Email Address</label>
              <Input
                type="text"
                id="email"
                name="email"
                required
                minlength="6"
                maxlength="20"
                size="10"
              ></Input>
            </div>
          </Modal>
          <Meta
            avatar={
              <Avatar
                src={`https://eu.ui-avatars.com/api/?name=${props.user.username}`}
              />
            }
            title={`${props.user.username}`}
            description="Free Account"
          />
        </Profile>
      </Div>
    </Body>
  );
};

function mapStateToProps(state) {
  return { token: state.token, user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    // addToken: function (token) {
    //   dispatch({ type: "addToken", token: token });
    // },
    setIsLoggedOut: function () {
      dispatch({ type: "setIsLoggedOut" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
