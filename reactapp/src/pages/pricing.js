import React from "react";
import "../App.css";
import { Div } from "../styles/StyledContent";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Div>
        <h1>Choose your plan</h1>
        <h5>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </h5>
      </Div>
    </>
  );
};

export default Pricing;
