import React, { useState } from "react";
import { Form, Input } from "antd";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
// import Navbar from "../components/Navbar";

import { connect } from "react-redux";

const { TextArea } = Input;

const IdeaCreation = (props) => {
  const [idea, setIdea] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");

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
          <h1
            style={{ fontSize: "30px" }}
            onChange={(e) => setIdea(e.target.value)}
          >
            Nom de l'idée
          </h1>

          <Input style={{ width: "500px" }} />
        </Form.Item>

        <Form.Item name="descIdea">
          <h1
            style={{ fontSize: "30px" }}
            onChange={(e) => setIdeaDescription(e.target.value)}
          >
            Description de l'idée
          </h1>

          <TextArea style={{ width: "750px" }} />
        </Form.Item>

        <Btn
          onClick={() => props.onAddIdeaClick(idea, ideaDescription)}
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

function mapDispatchToProps(dispatch) {
  return {
    onAddIdeaClick: function (idea, ideaDescription) {
      dispatch({
        type: "AddIdea",
        IdeaContent: { idea: idea, ideaDescription: ideaDescription },
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(IdeaCreation);
