import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import styled from "styled-components";

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
Input.displayName = "Input";

const Textarea = styled.textarea`
  padding: 0.75em;
  width: 70%;
  border: 1px solid #012542;
  border-radius: 4px;
  box-sizing: border-box;
`;
Textarea.displayName = "Textarea";

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
FormSelect.displayName = "Select";

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
Button.displayName = "Button";

class Form extends React.Component {
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

  isDisabled = () => {
    const { title, author, category, body } = this.state;
    return !(title !== "" && author !== "" && body !== "" && category !== null);
  };

  render() {
    return (
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
            options={this.props.categories}
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
        <Button disabled={this.isDisabled()}>Send</Button>
      </FormContainer>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default Form;
