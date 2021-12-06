import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
// import Navbar from "../components/Navbar";

const BoardCreation = () => {
  return (
    <HeroDiv style={{ padding: "260px" }}>
      <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <h1
            className="me-sm-2"
            for="exampleName"
            style={{ fontWeight: "bold" }}
          >
            Choose the name of your board
          </h1>
          <h4
            className="me-sm-2"
            for="exampleName"
            style={{ fontWeight: "bold", color: "grey" }}
          >
            You can change it later
          </h4>
          <Input
            style={{ width: "100%", height: "50%" }}
            id="exampleName"
            name="boardName"
            placeholder="A cool board name"
            type="text"
          />
        </FormGroup>
        <FormGroup
          className="mb-2 me-sm-2 mb-sm-0"
          style={{ paddingTop: "40px" }}
        >
          <h1
            className="me-sm-2"
            for="Description"
            style={{ fontWeight: "bold" }}
          >
            A quick description ?
          </h1>
          <h4
            className="me-sm-2"
            for="exampleName"
            style={{ fontWeight: "bold", color: "grey" }}
          >
            Up to 280 charactères
          </h4>
          <Input
            style={{ width: "100%" }}
            id="exampleDescription"
            name="description"
            type="textarea"
            placeholder="Tell us about you!"
          />
        </FormGroup>
        <Btn
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <BtnLink to="/board">Create</BtnLink>
        </Btn>
      </Form>
    </HeroDiv>
  );
};

export default BoardCreation;
