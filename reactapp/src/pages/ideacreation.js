import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
// import Navbar from "../components/Navbar";

const IdeaCreation = () => {
  return (
    <HeroDiv style={{ padding: "260px" }}>
      <Form inline>
        <FormGroup
          className="mb-2 me-sm-2 mb-sm-0"
          style={{ paddingRight: "150px" }}
        >
          <h1
            className="me-sm-2"
            for="exampleName"
            style={{ fontWeight: "bold" }}
          >
            Titre de l'idée
          </h1>

          <Input
            style={{ width: "200%", height: "50%" }}
            id="exampleName"
            name="boardName"
            placeholder="A cool idea name"
            type="text"
          />
        </FormGroup>
        <FormGroup
          className="mb-2 me-sm-2 mb-sm-0"
          style={{ paddingTop: "30px", paddingRight: "150px" }}
        >
          <h1
            className="me-sm-2"
            for="Description"
            style={{ fontWeight: "bold" }}
          >
            Description
          </h1>

          <Input
            style={{ width: "200%" }}
            id="exampleDescription"
            name="description"
            type="textarea"
            placeholder="Présente ton idée!"
          />
        </FormGroup>
        <Btn
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "15px",
          }}
        >
          <BtnLink to="/board">Create</BtnLink>
        </Btn>
      </Form>
    </HeroDiv>
  );
};

export default IdeaCreation;
