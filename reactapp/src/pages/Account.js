import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Profile, Div, Body, Image } from "../styles/StyledAccount";

import { Card, Avatar, Modal, Button } from "antd";
import {
  PlusOutlined,
  ContainerOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { connect } from "react-redux";

const { Meta } = Card;

const Account = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const [boardName, setBoardName] = useState([]);
  //Recuperation des boards en DB pour les afficher dans la liste des boards de l'utilisateur
  useEffect(() => {
    var findBoards = async () => {
      var boards = await fetch(`/board/${props.token}`);
      var body = await boards.json();
      console.log(body);
      setBoardName(body.boards); // stockage des infos des boards de l'utilisateur dans l'etat boardName
    };
    findBoards();
  }, []);

  const state = {
    loading: false,
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const logout = () => {
    props.setIsLoggedOut();
  };

  return (
    <Body>
      <Div>
        <div style={{ paddingBottom: "55px" }}>
          <Profile
            actions={[
              // <SettingOutlined key="setting" onClick={showModal2} />,
              <Link to="/create">
                <PlusOutlined key="create" />
              </Link>,
              <ContainerOutlined key="board" onClick={showModal} />,

              <Link to="/">
                <LogoutOutlined key="logout" onClick={logout} />
              </Link>,
            ]}
          >
            <Modal
              visible={isModalVisible}
              title="Boards"
              onCancel={handleCancel}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Close
                </Button>,
              ]}
            >
              {boardName.map((board, i) => (
                <p key={i} style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ marginRight: "20px" }}>
                    <Link to={`/board/${board._id}`}>{board.boardName}</Link>
                  </p>
                  <p>{board.boardDesc}</p>
                </p>
              ))}
            </Modal>

            <Meta
              avatar={
                <Avatar
                  src={`https://eu.ui-avatars.com/api/?name=${props.user.username}&background=5b25c0&color=fff`}
                />
              }
              title={`${props.user.username}`}
              description="Free Account"
            />
          </Profile>
        </div>
        <Image src={require("../images/profile.svg")} alt="profile" />
      </Div>
    </Body>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setIsLoggedOut: function () {
      dispatch({ type: "setIsLoggedOut" });
    },
  };
}
function mapStateToProps(state) {
  return { token: state.token, infos: state.infos, user: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
