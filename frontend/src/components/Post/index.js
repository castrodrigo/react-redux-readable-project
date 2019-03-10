import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { FaComments, FaEdit, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { formatTimestamp } from "../../util/date";

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
  & button {
    color: #001936;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
`;

const Control = styled.div`
  & > button {
    font-size: 18px;
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

const redirectToCategory = (e, category, props) => {
  e.preventDefault();
  props.history.push(`/${category}`);
};

const redirectToEdit = (e, id, props) => {
  e.preventDefault();
  props.history.push(`/edit/${id}`);
};

const Post = ({
  post: {
    id,
    title,
    timestamp,
    author,
    body,
    category,
    commentCount,
    voteScore
  },
  ...props
}) => (
  <Link to={`/${category}/${id}`}>
    <DataWrapper>
      <PostWrapper>
        <Title>{title}</Title>
        <DetailSection>
          <section>
            Published in <span>{formatTimestamp(timestamp)}</span> by{" "}
            <span>{author}</span>, in{" "}
            <button onClick={e => redirectToCategory(e, category, props)}>
              {category}
            </button>
          </section>
          <Control>
            <button onClick={e => redirectToEdit(e, id, props)}>
              <FaEdit />
            </button>
          </Control>
        </DetailSection>
        <ContentWrapper>{body}</ContentWrapper>
        <CommentSection>
          <span>
            <FaComments /> ({commentCount})
          </span>
          <span>score: {voteScore}</span>
        </CommentSection>
      </PostWrapper>
      <VoteWrapper>
        <button>
          <FaThumbsUp />
        </button>
        <span>{voteScore}</span>
        <button>
          <FaThumbsDown />
        </button>
      </VoteWrapper>
    </DataWrapper>
  </Link>
);

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
  }).isRequired,
  history: PropTypes.shape({
    history: PropTypes.shape.isRequired
  }).isRequired
};

export default withRouter(Post);
