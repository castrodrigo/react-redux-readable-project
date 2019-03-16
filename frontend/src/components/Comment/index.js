import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { confirmAlert } from "react-confirm-alert";
import Vote from "../Vote";
import Form from "./Form";
import Details from "./Details";
import Controls from "./Controls";

const CommentWrapper = styled.div`
  background: #d1ccce;
  padding: 0.75em;
  color: #001936;
  width: 90%;
`;

const ContentWrapper = styled.div`
  margin: 20px 0;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d1ccce;
  & > section {
    display: flex;
    flex-basis: 100%;
  }
`;

class Comment extends React.Component {
  state = {
    editable: false
  };

  handleOnDelete = () =>
    confirmAlert({
      title: "Confirm comment removal",
      message: "Are you sure that you want to remove this comment?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.removeComment()
        },
        { label: "No" }
      ]
    });

  handleOnSubmit = data =>
    this.props.updateComment(data).then(this.setState({ editable: false }));

  toggleEditForm = () =>
    this.setState(prevState => ({ editable: !prevState.editable }));

  render() {
    if (!this.props.comment) {
      return null;
    }
    const {
      comment: { timestamp, body, author, voteScore },
      voteUp,
      voteDown
    } = this.props;
    return (
      <DataWrapper>
        <section>
          <CommentWrapper>
            <Details timestamp={timestamp} author={author} />
            <ContentWrapper>{body}</ContentWrapper>
            <Controls
              onEdit={this.toggleEditForm}
              onDelete={this.handleOnDelete}
            />
          </CommentWrapper>
          <Vote score={voteScore} voteUp={voteUp} voteDown={voteDown} />
        </section>
        {this.state.editable && (
          <Form
            onSubmit={this.handleOnSubmit}
            comment={this.props.comment}
            disabledFields={["author"]}
          />
        )}
      </DataWrapper>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired
  }),
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired
};

export default Comment;
