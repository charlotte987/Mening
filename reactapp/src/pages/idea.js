import React from "react";
import { HeroDiv } from "../styles/StyledContent";

import { Form } from "antd";

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
          label="TITRE DE L'IDEE"
          name="ideaName"
          style={{
            fontWeight: "bold",
            display: "block",
            width: "200%",
            fontSize: "25px",
          }}
        ></Form.Item>

        <Form.Item
          label="DESCRIPTION DE L'IDEE"
          name="descIdea"
          style={{
            fontWeight: "bold",
            display: "block",
            width: "300%",
            fontSize: "25px",
          }}
        ></Form.Item>
      </Form>
    </HeroDiv>
  );
};

export default IdeaCreation;
