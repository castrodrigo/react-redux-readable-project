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

const FormSelect = styled(Select)`
  width: 70%;
  box-sizing: border-box;
  font-size: 12px;
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

  componentDidMount = () => {
    if (this.props.post) {
      const { post, categories } = this.props;
      const { title, author, category, body } = post;
      const selectedCategory = categories.find(c => c.value === category);
      this.setState({ title, author, category: selectedCategory, body });
    }
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

  handleOnSelect = category => this.setState({ category });

  isButtonDisabled = () => {
    const { title, author, category, body } = this.state;
    return !(title !== "" && author !== "" && body !== "" && category !== null);
  };

  isFieldDisabled = name =>
    this.props.disabledFields && this.props.disabledFields.includes(name);

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
            readOnly={this.isFieldDisabled("title")}
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
            isDisabled={this.isFieldDisabled("category")}
          />
        </Label>
        <Label>
          Body:
          <Textarea
            rows="10"
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
  categories: PropTypes.array.isRequired,
  post: PropTypes.object
};

export default Form;
