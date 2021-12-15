import React from "react";
import {
  HeroDiv,
  HeroImage,
  Subtitle,
  HeroLeft,
  Title,
  BtnLink,
  Btn,
  DivTitle,
  Feature,
  Line,
  Cards,
} from "../styles/StyledContent";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import "../App.css";

import "antd/dist/antd.css";
import { Card, Col, Row, Divider } from "antd";

const Home = () => {
  return (
    <>
      <div className="Index-page">
        <Navbar />
        <HeroDiv>
          <HeroLeft>
            <Title>For your users, by your users</Title>
            <Subtitle>
              Mening is the easiest and most affordable tool to collect ideas
              from your users.
            </Subtitle>
            <Btn>
              <BtnLink to="/board/61b87a8d4d2558fa03707a1c">
                See an example
              </BtnLink>
            </Btn>
          </HeroLeft>

          <HeroImage src={require("../images/idea.svg")} alt="logo" />
        </HeroDiv>

        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            width: 600,
            borderColor: "#000000",
            marginLeft: "34%",
            opacity: 0.2,
          }}
        ></hr>

        <div style={{ paddingBottom: "70px" }}>
          <DivTitle>Features</DivTitle>
          <div style={{ padding: "1% 10%" }}>
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={8}>
                  <Cards
                    title="Share ideas, vote and discuss 💡"
                    bordered={true}
                  >
                    Give voice to your community, get valuable suggestions and
                    prioritize what they need the most.
                  </Cards>
                </Col>
                <Col span={8}>
                  <Cards title="Your Brand 🎨" bordered={true}>
                    Reflect your brand and personality by adding your company's
                    logo and changing the theme colors.
                  </Cards>
                </Col>
                <Col span={8}>
                  <Cards title="Board privacy 🕵️" bordered={true}>
                    Your feedback board can be public or limited to specific
                    users. Select the privacy setting that best suits your
                    needs.
                  </Cards>
                </Col>
              </Row>
            </div>
            <div className="site-card-wrapper">
              <Line gutter={16}>
                <Col span={8}>
                  <Cards title="Mobile-friendly 📲" bordered={true}>
                    Your board is mobile-friendly from the ground up so you can
                    browse feedback on the go..
                  </Cards>
                </Col>
                <Col span={8}>
                  <Cards title="User profiles 😀" bordered={true}>
                    Let users change their photo and personal information.
                  </Cards>
                </Col>
                <Col span={8}>
                  <Cards title="And more ! ❤️" bordered={false}>
                    We look forward to your recommendations for future features.
                  </Cards>
                </Col>
              </Line>
            </div>
          </div>
        </div>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            width: 600,
            borderColor: "#000000",
            marginLeft: "34%",
            marginTop: "5%",
            opacity: 0.2,
          }}
        ></hr>
        <div>
          <DivTitle>Reviews</DivTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              display: "flex",
              paddingLeft: "30%",
              paddingRight: "30%",
            }}
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne merninisti licere mihi ista probare, quae sunt a te dicta?
                Refert tamen, quo modo.
              </p>
              <Divider orientation="left">
                Antoine - Program Manager à La Capsule
              </Divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne merninisti licere mihi ista probare, quae sunt a te dicta?
                Refert tamen, quo modo.
              </p>
              <Divider orientation="right">Laurent - CEO des kebabs</Divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne merninisti licere mihi ista probare, quae sunt a te dicta?
                Refert tamen, quo modo.
              </p>
              <Divider orientation="left">Amalia - TripBook's CEO</Divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nonne merninisti licere mihi ista probare, quae sunt a te dicta?
                Refert tamen, quo modo.
              </p>
              <Divider orientation="right">Michael - Krier's CEO</Divider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { isLoggedIn: state.isLoggedIn };
}

export default connect(mapStateToProps, null)(Home);
