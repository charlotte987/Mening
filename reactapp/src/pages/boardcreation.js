import React from "react";
import { Form, Input, Switch } from "antd";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
//import Navbar from "../components/Navbar";

const { TextArea } = Input;

const BoardCreation = () => {
  return (
    <HeroDiv style={{ paddingLeft: "400px", paddingTop: "150px" }}>
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
      >
        <Form.Item name="boardName">
          <h1 style={{ fontSize: "30px" }}>Choose a bord name</h1>
          <h6 style={{ color: "grey", fontSize: "20px" }}>
            You can change it later
          </h6>
          <Input style={{ width: "500px" }} />
        </Form.Item>

        <Form.Item name="descBoard">
          <h1 style={{ fontSize: "30px" }}>A quick description ?</h1>
          <h6 style={{ color: "grey", fontSize: "20px" }}>
            Up to 80 charactères
          </h6>
          <TextArea style={{ width: "750px" }} />
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
            paddingLeft: "200px",
          }}
        >
          <BtnLink to="/board">Create</BtnLink>
        </Btn>
      </Form>
    </HeroDiv>
  );
};

export default BoardCreation;
