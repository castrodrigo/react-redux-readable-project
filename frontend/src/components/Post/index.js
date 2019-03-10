import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { formatTimestamp } from "../../util/date";
import {
  FaComments,
  FaEdit,
  FaEraser,
  FaThumbsUp,
  FaThumbsDown
} from "react-icons/fa";
import "react-confirm-alert/src/react-confirm-alert.css";

const Item = styled(Link)`
  &,
  &:visited {
    color: #001936;
    text-decoration: none;
  }
  &:hover {
    color: #840032;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  border: 1px solid #d1ccce;
`;

const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  background: #d1ccce;
  justify-content: space-evenly;
  text-align: center;
  box-size: border-box;
  padding: 0.5em;
  border-left: 1px solid #d1ccce;
  & button {
    font-size: 18px;
    padding: 0px;
    background: none;
    border: 0;
    cursor: pointer;
  }
  & button:first-child {
    color: #007544;
  }
  & button:last-child {
    margin-top: 4px;
    color: #750000;
  }
  & span {
    background: white;
    padding: 4px;
    display: block;
    color: #840032;
  }
`;

const PostWrapper = styled.div`
  padding: 0.75em;
  color: #001936;
  width: 90%;
`;

const Title = styled.h2`
  margin: 0 0 4px;
`;

const DetailSection = styled.section`
  font-size: 0.75em;
  color: #8e8b8c;
  display: flex;
  justify-content: space-between;
  & span,
  & button {
    font-weight: bold;
  }
  & a {
    color: #001936;
    font-weight: bold;
  }
`;

const ContentWrapper = styled.div`
  margin: 20px 0;
`;

const CommentSection = styled.section`
  border-top: 1px solid #d1ccce;
  padding-top: 0.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Control = styled.div`
  & > a {
    font-size: 16px;
    margin-right: 6px;
  }
  & > button {
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

class Post extends React.Component {
  handleOnDelete = () =>
    confirmAlert({
      title: "Confirm post removal",
      message: "Are you sure that you want to remove this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.removePost()
        },
        { label: "No" }
      ]
    });

  render() {
    if (!this.props.post) {
      return null;
    }
    const {
      id,
      title,
      timestamp,
      author,
      body,
      category,
      commentCount,
      voteScore
    } = this.props.post;
    return (
      <DataWrapper>
        <PostWrapper>
          <Item to={`/${category}/${id}`}>
            <Title>{title}</Title>
          </Item>
          <DetailSection>
            <section>
              Published in <span>{formatTimestamp(timestamp)}</span> by{" "}
              <span>{author}</span>, in{" "}
              <Item to={`/${category}`}>{category}</Item>
            </section>
          </DetailSection>
          <ContentWrapper>{body}</ContentWrapper>
          <CommentSection>
            <Item to={`/${category}/${id}`} title={`${commentCount} Comments`}>
              <span>
                <FaComments /> ({commentCount})
              </span>
            </Item>
            <Control>
              <Item to={`/edit/${id}`} title={`Edit Post`}>
                <FaEdit />
              </Item>
              <button title={`Delete Post`} onClick={this.handleOnDelete}>
                <FaEraser />
              </button>
            </Control>
          </CommentSection>
        </PostWrapper>
        <VoteWrapper>
          <button onClick={this.props.voteUp}>
            <FaThumbsUp />
          </button>
          <span>{voteScore}</span>
          <button onClick={this.props.voteDown}>
            <FaThumbsDown />
          </button>
        </VoteWrapper>
      </DataWrapper>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired
  }),
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired
};

export default withRouter(Post);
