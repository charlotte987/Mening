import React, { useState } from "react";
import { Form, Input } from "antd";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
// import Navbar from "../components/Navbar";

import { connect } from "react-redux";

const { TextArea } = Input;

const IdeaCreation = (props) => {
  const [idea, setIdea] = useState(""); //enregistrement du titre de l'idée dans le store et BDD
  const [ideaDescription, setIdeaDescription] = useState(""); //enregistrement de la description de l'idée dans le store et BDD
  const [ideaId, setIdeaId] = useState("");

  var saveIdea = async (idea, ideaDescription) => {
    console.log(props.token);
    var save = await fetch("/idea-creation", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `idea=${idea}&ideaDesc=${ideaDescription}&token=${props.token}`,
    });

    var response = await save.json();
    console.log(response, "test response");
    props.onAddIdeaClick(idea, ideaDescription, response.saveIdea._id);
  };

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

          <Input
            style={{ width: "500px" }}
            onChange={(e) => {
              setIdea(e.target.value);
              console.log("onchange", idea);
            }}
          />
        </Form.Item>

        <Form.Item name="descIdea">
          <h1 style={{ fontSize: "30px" }}>Description de l'idée</h1>

          <TextArea
            style={{ width: "750px" }}
            onChange={(e) => setIdeaDescription(e.target.value)}
          />
        </Form.Item>

        <Btn
          onClick={() => saveIdea(idea, ideaDescription)}
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
    onAddIdeaClick: function (idea, ideaDescription, Id) {
      dispatch({
        type: "addIdea",
        idea: idea,
        ideaDescription: ideaDescription,
        Id: Id,
      });
    },
  };
}

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaCreation);
