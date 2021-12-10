import React, { useState } from "react";
import { Form, Input, Switch } from "antd";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const { TextArea } = Input;

const BoardCreation = (props) => {
  const [title, setTitle] = useState(""); //enregistrement du titre du board dans le store
  const [desc, setDesc] = useState(""); //enregistrement de la description du board dans le store
  const [boardId, setBoardId] = useState("");
  const [check, setCheck] = useState(false);

  var saveBoardInfos = async (title, desc) => {
    var save = await fetch("/board-creation", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `title=${title}&desc=${desc}&token=${props.token}`,
    });
    var response = await save.json();
    props.onSubmitTitle(title, desc, response.saveBoard._id); //recuperation des infos du board (du backend) pour les enregistrer dans le store
    setBoardId(response.saveBoard._id);
    console.log(response.saveBoard._id, "tessssst");
    setCheck(true);
  };
  if (check == true) {
    return <Navigate to={`/board/${boardId}`} />;
  }
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
          <h1 style={{ fontSize: "30px" }}>Choose a board name</h1>
          <h6 style={{ color: "grey", fontSize: "20px" }}>
            You can change it later
          </h6>
          <Input
            style={{ width: "500px" }}
            name="boardTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="descBoard">
          <h1 style={{ fontSize: "30px" }}>A quick description ?</h1>
          <h6 style={{ color: "grey", fontSize: "20px" }}>
            Up to 80 charactères
          </h6>
          <TextArea
            style={{ width: "750px" }}
            name="boardDesc"
            onChange={(e) => setDesc(e.target.value)}
          />
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
            borderRadius: "4px",
            background: "#5b25c0",
            padding: "10px 22px",
            marginTop: "15px",
            color: "#fff",
            outline: "none",
            border: "none",
          }}
          onClick={() => saveBoardInfos(title, desc)}
        >
          {" "}
          Create
          {/* <BtnLink to={`/board/${boardId}`}>Create</BtnLink> */}
        </Btn>
      </Form>
    </HeroDiv>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmitTitle: function (title, desc, boardId) {
      dispatch({ type: "saveInfos", title, desc, boardId });
    },
  };
}

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreation);
