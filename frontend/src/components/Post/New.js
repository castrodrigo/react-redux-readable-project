import React from "react";
import Select from "react-styled-select";
import styled from "styled-components";
import Layout from "../Layout";

const FormContainer = styled.form`
  max-width: 700px;
  background: #fcf7f9;
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.75em;
  width: 70%;
  border: 1px solid #012542;
  border-radius: 2px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  padding: 0.75em;
  width: 70%;
  border: 1px solid #012542;
  border-radius: 2px;
  box-sizing: border-box;
`;

const FormSelect = styled(Select)`
  width: 70%;
  border: 1px solid #012542;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 16px;
`;

const Label = styled.label`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0.25em 0.5em;
  align-items: center;
`;

const Button = styled.button`
  border: 1px solid #ffffff;
  border-radius: 2px;
  color: #fff;
  background: #840032;
  padding: 10px;
  margin-top: 10px;
`;

const New = () => (
  <Layout
    content={
      <React.Fragment>
        <h2>Create a new post</h2>
        <FormContainer>
          <Label>
            Title:
            <Input type="text" name="name" />
          </Label>
          <Label>
            Category:
            <FormSelect name="category" options={[]} />
          </Label>
          <Label>
            Body:
            <Textarea rows="10" name="body" />
          </Label>
          <Label>
            Author:
            <Input type="text" name="body" />
          </Label>
          <Button>Send</Button>
        </FormContainer>
      </React.Fragment>
    }
  />
);

export default New;
