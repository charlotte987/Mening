import React from "react";
import { HeroDiv } from "../styles/StyledContent";
import Navbar from "../components/Navbar";
import { Row, Col, Image, Divider, padding } from "antd";
import Title from "antd/lib/skeleton/Title";

const About = () => {
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <>
      <Navbar style={{ height: "10%" }} />
      <div className="howItWorks-page" style={{ height: "90%" }}>
        <div className="howItWorksTitle">
          <h1>How it works ?</h1>
        </div>

        <Row
          gutter={[24, 16]}
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <Col
            style={{
              marginBottom: "50px",
              paddingRight: "100px",
              paddingLeft: "75px",
            }}
            span={12}
          >
            {" "}
            <h1>1. Create feedback boards </h1>{" "}
            <span>
              Create as many boards as you want to collect customer feedback,
              such as 'feature requests' or 'bug reports'.
            </span>{" "}
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "50px",
            }}
            span={12}
          >
            {" "}
            <img
              style={{
                justifyContent: "center",
                borderStyle: "solid",
                borderColor: "white",
                borderWidth: 5,
                alignItems: "center",
                marginBottom: "50px",
              }}
              width="500px"
              src={require("../images/boardCreation.png")}
            ></img>
          </Col>

          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "50px",
            }}
            span={12}
          >
            <img
              style={{
                justifyContent: "center",
                borderStyle: "solid",
                borderColor: "white",
                borderWidth: 5,
                alignItems: "center",
                marginBottom: "50px",
              }}
              width="500px"
              src={require("../images/board.png")}
            ></img>
          </Col>
          <Col span={12} style={{ marginBottom: "50px", paddingRight: "50px" }}>
            {" "}
            <h1>2. Serve your boards seamlessly</h1>{" "}
            <span>
              Implement your own brand identity and share the boards, publicly
              or privately, on your custom domain or via its widgets.
            </span>{" "}
          </Col>

          <Col
            span={12}
            style={{
              marginBottom: "50px",
              paddingRight: "100px",
              paddingLeft: "75px",
            }}
          >
            {" "}
            <h1>1. Create feedback boards </h1>{" "}
            <span>
              Create as many boards as you want to collect customer feedback,
              such as 'feature requests' or 'bug reports'.
            </span>{" "}
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            span={12}
          >
            <img
              style={{
                justifyContent: "center",
                borderStyle: "solid",
                borderColor: "white",
                borderWidth: 5,
                alignItems: "center",
              }}
              width="500px"
              src={require("../images/like.png")}
            ></img>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
