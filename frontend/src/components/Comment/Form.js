import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormContainer = styled.form`
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
  &:read-only {
    background: #f6f6f6;
    color: #999999;
  }
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

const Label = styled.label`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
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
    id: null,
    author: "",
    body: ""
  };

  componentDidMount = () => {
    if (this.props.comment) {
      const { id, author, body } = this.props.comment;
      this.setState({ id, author, body });
    }
  };

  clearForm = () => {
    this.setState({
      author: "",
      body: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, author, body } = this.state;
    this.props.onSubmit({ author, body }).then(() => !id && this.clearForm());
  };

  handleOnChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  isButtonDisabled = () => {
    const { author, body } = this.state;
    return !(author !== "" && body !== "");
  };

  isFieldDisabled = name =>
    this.props.disabledFields && this.props.disabledFields.includes(name);

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Label>
          Text:
          <Textarea
            rows="4"
            name="body"
            onChange={this.handleOnChange}
            value={this.state.body}
            readOnly={this.isFieldDisabled("body")}
          />
        </Label>
        <Label>
          Author:
          <Input
            type="text"
            name="author"
            onChange={this.handleOnChange}
            value={this.state.author}
            readOnly={this.isFieldDisabled("author")}
          />
        </Label>
        <Button disabled={this.isButtonDisabled()}>Send</Button>
      </FormContainer>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  comment: PropTypes.object,
  disabledFields: PropTypes.array
};

export default Form;
