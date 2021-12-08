import React from "react";
import "../App.css";
import {
  Profile,
  Div,
  Body,
  Photo,
  List,
  Input,
} from "../styles/StyledAccountSettings";

const AccountSettings = () => {
  return (
    <Body>
      <Div>
        <Profile>
          <div
            style={{
              backgroundColor: "white",
              padding: "30% 30%",
            }}
          >
            <Photo src="https://joeschmoe.io/api/v1/random" />
            <List>
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
            </List>
          </div>
        </Profile>
      </Div>
    </Body>
  );
};

export default AccountSettings;
