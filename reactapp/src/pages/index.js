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
  featureDiv,
  Feature,
  Line,
} from "../styles/StyledContent";
import Navbar from "../components/Navbar";

import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroDiv>
        <HeroLeft>
          <Title>Build it together</Title>
          <Subtitle>
            Mening is the easiest and most affordable tool to collect ideas from
            your users.
          </Subtitle>
          <Btn>
            <BtnLink to="/signin">See an example</BtnLink>
          </Btn>
        </HeroLeft>

        <HeroImage src={require("../images/build-together.jpg")} alt="logo" />
      </HeroDiv>

      <div>
        <DivTitle>Features</DivTitle>
        <featureDiv>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Share ideas, vote and discuss 💡" bordered={true}>
                  Give voice to your community, get valuable suggestions and
                  prioritize what they need the most.
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Your Brand 🎨" bordered={true}>
                  Reflect your brand and personality by adding your company's
                  logo, using a domain you already own and changing the theme
                  colors.
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Board privacy 🕵️" bordered={true}>
                  Your feedback board can be public or limited to specific
                  users. Select the privacy setting that best suits your needs.
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Line gutter={16}>
              <Col span={8}>
                <Card title="Mobile-friendly 📲" bordered={true}>
                  Your board is mobile-friendly from the ground up so you can
                  browse feedback on the go..
                </Card>
              </Col>
              <Col span={8}>
                <Card title="User profiles 😀" bordered={true}>
                  Let users change their photo and personal information.
                </Card>
              </Col>
              <Col span={8}>
                <Feature title="And more ! ❤️" bordered={false}>
                  We look forward to your recommendations for future features.
                </Feature>
              </Col>
            </Line>
          </div>
        </featureDiv>
      </div>

      <div>
        <DivTitle>Avis</DivTitle>
      </div>
    </>
  );
};

export default Home;
