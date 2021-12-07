import React from "react";
import "../App.css";
import { Profile, Div, Body, Photo } from "../styles/StyledAccountSettings";

const AccountSettings = () => {
  return (
    <Body>
      <Div>
        <Profile>
          <div style={{ paddingTop: "30px" }}>
            <Photo src="https://joeschmoe.io/api/v1/random" />
            <h4>Name</h4>
            <h4>Email address</h4>
          </div>
        </Profile>
      </Div>
    </Body>
  );
};

export default AccountSettings;
