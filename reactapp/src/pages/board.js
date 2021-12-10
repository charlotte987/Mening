import React, { useState, useEffect } from "react";
import "../App.css";
import { List, Avatar, Space, Button } from "antd";
import {
  MessageOutlined,
  LikeOutlined,
  SettingOutlined,
  DeleteOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";
import { Btn, BtnLink } from "../styles/StyledContent";
import { PromiseProvider } from "mongoose";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Board = (props) => {
  // Tableau d'idées//
  const [board, setBoard] = useState([]);
  var { id } = useParams();

  useEffect(() => {
    var findBoards = async () => {
      var boards = await fetch(`/myboard/${id}`);
      var body = await boards.json();
      console.log(body.board[0].boardName, "LE BODY");
      setBoard(body.board[0]);
    };
    findBoards();
  }, []);

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  var deleteIdeaBbdStore = async (ideaId) => {
    props.deleteIdea(ideaId);
    const response = await fetch(`/delete-idea/${ideaId}`, {
      method: "DELETE",
    });
  };

  return (
    //bannière et photo de profile//
    <div>
      <div className="Banner">
        <span>
          <Link to="/">
            <LeftCircleOutlined
              style={{
                color: "white",
                fontSize: "200%",
                cursor: "pointer",
              }}
            />
          </Link>
        </span>
        <img
          src={require("../images/julian.jpg")}
          className="avatar"
          alt="profile"
        ></img>
      </div>

      {/* //Titre et Description// */}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h1
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "400px",
            marginTop: "20px",
            marginRight: "300px",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          {board.boardName}
        </h1>{" "}
        {/* Setting et bouton suggérer */}
        <div
          className="icons-list"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginLeft: "400px",
          }}
        >
          <SettingOutlined
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "50px",
              cursor: "pointer",
            }}
          />
          <Btn
            style={{
              cursor: "pointer",
              marginLeft: 30,
            }}
          >
            <BtnLink to="/idea-creation">Suggérer</BtnLink>
          </Btn>
        </div>
      </div>

      <h2
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "400px",
          marginTop: "5px",
          marginRight: "300px",
          fontSize: "20px",
          color: "grey",
          fontWeight: "lighter",
        }}
      >
        {board.boardDesc}
      </h2>
      {/* 


      {/* //liste de commentaires// */}
      {!props.ideaContent ? (
        <List></List>
      ) : (
        <List
          itemLayout="horizontal"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "300px",
            marginTop: "50px",
            marginRight: "300px",
          }}
          dataSource={props.ideaContent}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,

                <Button
                  type="link"
                  icon={<DeleteOutlined />}
                  size={32}
                  onClick={() => deleteIdeaBbdStore(item.ideaId)}
                ></Button>,
              ]}
            >
              <List.Item.Meta
                author={"Han Solo"}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.title}
                description={item.ideaDesc}
              ></List.Item.Meta>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return { infos: state.infos, ideaContent: state.ideaContent };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteIdea: function (ideaId) {
      dispatch({ type: "deleteIdea", ideaId });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Board);
