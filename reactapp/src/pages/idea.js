import React from "react";
import { HeroDiv, Btn, BtnLink } from "../styles/StyledContent";
import { Form, FormGroup, Input } from "reactstrap";

const IdeaCreation = () => {
  return (
    <HeroDiv style={{ padding: "260px" }}>
      <Form inline>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <h1
            className="me-sm-2"
            for="exampleName"
            style={{ fontWeight: "bold" }}
          >
            TITRE DE L'IDEE
          </h1>
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
            DESCRIPTION DE L'IDEE
          </h1>
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
          <BtnLink to="/board">Retour</BtnLink>
        </Btn>
      </Form>
    </HeroDiv>
  );
};

export default IdeaCreation;
