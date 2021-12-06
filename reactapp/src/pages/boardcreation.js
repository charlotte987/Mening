import React from "react";
import { Form, Input, Switch } from "antd";
import TextArea from "rc-textarea";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
// import Navbar from "../components/Navbar";

const BoardCreation = () => {
  return (
    <HeroDiv style={{ padding: "260px" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        style={{ paddingRight: "100px" }}
      >
        <Form.Item
          label="Choose a board name"
          name="boardName"
          style={{
            fontWeight: "bold",
            display: "block",
            width: "200%",
            fontSize: "25px",
          }}
        >
          <h6 style={{ color: "grey" }}>You can change it later</h6>
          <Input style={{ width: "125%" }} />
        </Form.Item>

        <Form.Item
          label="A quick description ?"
          name="descBoard"
          style={{
            fontWeight: "bold",
            display: "block",
            width: "200%",
            fontSize: "25px",
          }}
        >
          <h6 style={{ color: "grey" }}>Up to 80 charactères</h6>
          <TextArea style={{ width: "125%" }} />
        </Form.Item>
        <Form.Item
          label="Premium"
          valuePropName="checked"
          tooltip="Activer le premium"
        >
          <Switch />
        </Form.Item>
        <Btn
          style={{
            cursor: "pointer",
            paddingLeft: "180px",
          }}
        >
          <BtnLink to="/board">Create</BtnLink>
        </Btn>
      </Form>
    </HeroDiv>
  );
};

export default BoardCreation;
