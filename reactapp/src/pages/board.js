import React, { createElement, useState } from "react";
import "../App.css";
import { List, Avatar, Space, Button } from "antd";
import {
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { Btn, BtnLink } from "../styles/StyledContent";
import { PromiseProvider } from "mongoose";
import { connect } from "react-redux";

const Board = (props) => {
  // Tableau d'idées//
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  //Compteur de like et dislike//

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  //fonction de like et dislike//
  //   const actions = [
  //     <Tooltip key="comment-basic-like" title="Like">
  //       <span onClick={like}>
  //         {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
  //         <span className="comment-action">{likes}</span>
  //       </span>
  //     </Tooltip>,
  //     <Tooltip key="comment-basic-dislike" title="Dislike">
  //       <span onClick={dislike}>
  //         {React.createElement(
  //           action === "disliked" ? DislikeFilled : DislikeOutlined
  //         )}
  //         <span className="comment-action">{dislikes}</span>
  //       </span>
  //     </Tooltip>,
  //   ];

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    //bannière et photo de profile//
    <div>
      <div className="Banner">
        <img
          src={require("../images/julian.jpg")}
          className="avatar"
          alt="profile picture"
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
          }}
        >
          {props.infos.title}
        </h1>{" "}
        {/* Setting et bouton suggérer */}
        <div
          className="icons-list"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "50px",
            marginLeft: "100px",
          }}
        >
          <SettingFilled />
          <Btn
            style={{
              cursor: "pointer",
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
        {props.infos.desc}
      </h2>
      {/* 


      {/* //liste de commentaires// */}
      <List
        itemLayout="horizontal"
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "300px",
          marginTop: "50px",
          marginRight: "300px",
        }}
        dataSource={data}
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
            ]}
          >
            <List.Item.Meta
              author={"Han Solo"}
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={props.AddIdeaContent.idea}
              description={props.AddIdeaContent.ideaDescription}
            ></List.Item.Meta>
          </List.Item>
        )}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return { infos: state.infos, AddIdeaContent: state.IdeaContent };
}

export default connect(mapStateToProps, null)(Board);
