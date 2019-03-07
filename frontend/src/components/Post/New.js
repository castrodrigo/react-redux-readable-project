import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
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
  border-radius: 4px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  padding: 0.75em;
  width: 70%;
  border: 1px solid #012542;
  border-radius: 4px;
  box-sizing: border-box;
`;

const FormSelect = styled(Select)`
  width: 70%;
  box-sizing: border-box;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  & > div,
  & > div:hover {
    border-color: #012542;
  }
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
  border-radius: 4px;
  color: #fff;
  background: #840032;
  padding: 10px;
  margin-top: 10px;
  &:disabled {
    background: #f0f0f0;
  }
`;

class New extends React.Component {
  state = {
    title: "",
    author: "",
    category: null,
    body: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      title,
      author,
      category: { value },
      body
    } = this.state;
    this.props.onSubmit({ title, author, category: value, body });
  };

  handleOnChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  handleOnSelect = category => {
    this.setState({ category });
  };

  handleValidation = () => {
    const { title, author, category, body } = this.state;
    return title !== "" && author !== "" && body !== "" && category
      ? true
      : false;
  };

  render() {
    return (
      <Layout
        content={
          <React.Fragment>
            <h2>Create a new post</h2>
            <FormContainer onSubmit={this.handleSubmit}>
              <Label>
                Title:
                <Input
                  type="text"
                  name="title"
                  onChange={this.handleOnChange}
                  value={this.state.title}
                />
              </Label>
              <Label>
                Category:
                <FormSelect
                  name="category"
                  options={[
                    { label: "Test", value: 1 },
                    { label: "T2est", value: 2 }
                  ]}
                  onChange={this.handleOnSelect}
                  searchable={false}
                  value={this.state.category}
                />
              </Label>
              <Label>
                Body:
                <Textarea
                  rows="10"
                  name="body"
                  onChange={this.handleOnChange}
                  value={this.state.body}
                />
              </Label>
              <Label>
                Author:
                <Input
                  type="text"
                  name="author"
                  onChange={this.handleOnChange}
                  value={this.state.author}
                />
              </Label>
              <Button disabled={!this.handleValidation()}>Send</Button>
            </FormContainer>
          </React.Fragment>
        }
      />
    );
  }
}

New.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default New;
