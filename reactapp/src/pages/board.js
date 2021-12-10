import React, { useState, useEffect } from "react";
import "../App.css";
import { List, Avatar, Space, Button } from "antd";
import {
  MessageOutlined,
  LikeOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Btn, BtnLink } from "../styles/StyledContent";
import { connect } from "react-redux";

import Background from "../images/banner.jpg";

const Board = (props) => {
  // Tableau d'idées//

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
      <div
        style={{
          height: "200px",
          backgroundImage: `url(${Background})`,
          // backgroundColor: "blue",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          src={require("../images/logolacapsule.png")}
          alt="icon"
          style={{
            width: "100px",
            borderRadius: "50%",
            marginLeft: "200px",
            marginTop: "12%",
          }}
        ></img>
      </div>

      {/* //Titre et Description// */}
      <div style={{ display: "flex" }}>
        <h1
          style={{
            marginLeft: "400px",
            marginTop: "20px",
            marginRight: "20%",
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
            width: "100vw",
            marginLeft: "20%",
            marginRight: "50%",
          }}
        >
          <SettingOutlined
            style={{
              width: "50px",
              cursor: "pointer",
              marginTop: "10%",
              marginRight: "10%",
            }}
          />
          <Btn
            style={{
              cursor: "pointer",
              marginRight: "10%",
            }}
          >
            <BtnLink to="/idea-creation">Suggérer</BtnLink>
          </Btn>
        </div>
      </div>

      <h2
        style={{
          marginLeft: "400px",
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
                avatar={
                  <Avatar
                    src={`https://eu.ui-avatars.com/api/?name=${props.user.username}&background=5b25c0&color=fff`}
                  />
                }
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
  return {
    infos: state.infos,
    ideaContent: state.ideaContent,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteIdea: function (ideaId) {
      dispatch({ type: "deleteIdea", ideaId });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Board);
