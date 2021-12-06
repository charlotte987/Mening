import React from "react";
import { Form, Input } from "antd";
import TextArea from "rc-textarea";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
// import Navbar from "../components/Navbar";

const IdeaCreation = () => {
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
          label="Titre de l'idée"
          name="ideadName"
          style={{
            fontWeight: "bold",
            display: "block",
            width: "200%",
            fontSize: "25px",
          }}
        >
          <Input style={{ width: "125%" }} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="descIdea"
          style={{
            fontWeight: "bold",
            display: "block",
            width: "200%",
            fontSize: "25px",
          }}
        >
          <TextArea style={{ width: "125%" }} />
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

export default IdeaCreation;
