import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { confirmAlert } from "react-confirm-alert";
import { FaEdit, FaEraser } from "react-icons/fa";
import { formatTimestamp } from "../../util/date";
import Vote from "../Vote";
import Form from "./Form";

const CommentWrapper = styled.div`
  background: #d1ccce;
  padding: 0.75em;
  color: #001936;
  width: 90%;
`;

const DetailSection = styled.section`
  font-size: 0.75em;
  > span,
  > button {
    font-weight: bold;
  }
  > button {
    color: #001936;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
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

const Control = styled.div`
  text-align: right;
  border-top: 1px solid #ffffff;
  padding-top: 0.75em;
  & > a {
    font-size: 16px;
    margin-right: 6px;
  }
  & > button {
    margin-left: 6px;
    font-size: 16px;
    padding: 0;
    background: 0;
    border: 0;
    cursor: pointer;
  }
  & > button:hover {
    color: #840032;
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

  toggleEditForm = () =>
    this.setState(prevState => ({ editable: !prevState.editable }));

  render() {
    if (!this.props.comment) {
      return null;
    }
    const {
      comment: { timestamp, body, author, voteScore },
      voteUp,
      voteDown,
      updateComment
    } = this.props;
    return (
      <DataWrapper>
        <section>
          <CommentWrapper>
            <DetailSection>
              Commented in <span>{formatTimestamp(timestamp)}</span> by{" "}
              <span>{author}</span>
            </DetailSection>
            <ContentWrapper>{body}</ContentWrapper>
            <Control>
              <button onClick={this.toggleEditForm}>
                <FaEdit />
              </button>
              <button title={`Delete Post`} onClick={this.handleOnDelete}>
                <FaEraser />
              </button>
            </Control>
          </CommentWrapper>
          <Vote score={voteScore} voteUp={voteUp} voteDown={voteDown} />
        </section>
        {this.state.editable && (
          <Form onSubmit={updateComment} comment={this.props.comment} />
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
