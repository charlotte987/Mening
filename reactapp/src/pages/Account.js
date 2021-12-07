import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Profile, Div, Body } from "../styles/StyledAccount";

import { Card, Avatar } from "antd";
import { PlusOutlined, SettingOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Account = () => {
  return (
    <Body>
      <Div>
        <Profile
          actions={[
            <Link to="/">
              <SettingOutlined key="setting" />
            </Link>,
            <Link to="/board-creation">
              <PlusOutlined key="edit" />
            </Link>,
          ]}
        >
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
