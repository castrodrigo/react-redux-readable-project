import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { formatTimestamp } from "../../util/date";

const PostWrapper = styled.div`
  border: 1px solid #d1ccce;
  padding: 0.75em;
  color: #001936;
`;

const Title = styled.h2`
  margin: 0 0 4px;
`;

const DetailSection = styled.section`
  font-size: 0.75em;
  color: #8e8b8c;
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
    <PostWrapper>
      <Title>{title}</Title>
      <DetailSection>
        Published in <span>{formatTimestamp(timestamp)}</span> by{" "}
        <span>{author}</span>, in{" "}
        <button onClick={e => redirectToCategory(e, category, props)}>
          {category}
        </button>
      </DetailSection>
      <ContentWrapper>{body}</ContentWrapper>
      <CommentSection>
        <span>
          <FaComments /> ({commentCount})
        </span>
        <span>score: {voteScore}</span>
      </CommentSection>
    </PostWrapper>
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
