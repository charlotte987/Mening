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
  PageTitle,
} from "../styles/StyledContent";
import Navbar from "../components/Navbar";

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
      </div>
    </>
  );
};

export default Home;
