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
  const [likes, setLikes] = useState(0);
  const [voteCount, setVoteCount] = useState(0);

  var saveIdea = async (idea, ideaDescription) => {
    var save = await fetch("/idea-creation", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `idea=${idea}&ideaDesc=${ideaDescription}&token=${props.token}&likesFromFront=${likes}&voteCountFromFront=${voteCount}&boardId=${props.infos.boardId}`,
    });

    var response = await save.json();
    console.log(response, "test response");
    props.onAddIdeaClick(
      idea,
      ideaDescription,
      response.saveIdea._id,
      response.saveIdea.likes,
      response.saveIdea.voteCount
    );
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
    onAddIdeaClick: function (idea, ideaDescription, Id, likes, voteCount) {
      dispatch({
        type: "addIdea",
        idea: idea,
        ideaDescription: ideaDescription,
        likes: likes,
        voteCount: voteCount,
        Id: Id,
      });
    },
  };
}

function mapStateToProps(state) {
  return { token: state.token, infos: state.infos };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaCreation);
