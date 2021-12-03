import React from "react";
import {
  Div,
  HeroImage,
  Subtitle,
  HeroLeft,
  Title,
  BtnLink,
  Btn,
} from "../styles/StyledContent";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Div>
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
      </Div>
      <Div>
        <Title>Features</Title>
      </Div>
    </>
  );
};

export default Home;
