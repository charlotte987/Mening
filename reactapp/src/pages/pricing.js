import React from "react";
import "../App.css";
import { Subtitle, PageTitle } from "../styles/StyledContent";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div>
        <PageTitle>Choose your plan</PageTitle>
      </div>
      <Subtitle>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </Subtitle>
    </>
  );
};

export default Pricing;
