import React from "react";
import { Form, Input } from "antd";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
// import Navbar from "../components/Navbar";

const { TextArea } = Input;

const IdeaCreation = () => {
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
        <Form.Item name="ideaName">
          <h1 style={{ fontSize: "30px" }}>Nom de l'idée</h1>

          <Input style={{ width: "500px" }} />
        </Form.Item>

        <Form.Item name="descIdea">
          <h1 style={{ fontSize: "30px" }}>Description de l'idée</h1>

          <TextArea style={{ width: "750px" }} />
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

export default IdeaCreation;
