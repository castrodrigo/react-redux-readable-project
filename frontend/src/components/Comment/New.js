import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Form from "./Form";

const FormContainer = styled.div`
  margin: 20px 0;
  max-width: 700px;
  background: #fcf7f9;
`;

const New = ({ onSubmit }) => (
  <FormContainer>
    <h3>Add a new Comment</h3>
    <Form onSubmit={onSubmit} />
  </FormContainer>
);

New.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default New;
